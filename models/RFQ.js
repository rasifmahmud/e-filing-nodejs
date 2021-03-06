var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require("./users");
var notifications= require("./notifications");
var RFQDetails=require("./RFQ_info");

var rfqSchema = new mongoose.Schema({
    initiator_id: {type: Schema.ObjectId, ref: 'User'},
    created: {type: Date, default: Date.now},
    step_id: {type: Number, default: 1},
    substep_id: {type: Number, default: 1},
    state: {type: String , default: "running"},
    title: {type: String, default: "............"},
    bidhi_niti: {type: String},
    details:
        [{
            item_no: {type: Number},
            desctription: {type: String},
            unit: {type: String},
            qty: {type: Number},
            price_fig: {type: Number},
            price_words: {type: String},
            total_fig: {type: Number},
            total_words: {type: String}

        }],
    total_tt_fig: {type: Number},
    total_tt_words: {type: String},
    refer_verifier: {
        ID: {type: Schema.ObjectId, ref: 'User'},
        date: {type: Date, default: Date.now},
        signed: {type: Boolean, default: false}
    },
    refer_accountant: {
        ID: {type: Schema.ObjectId, ref: 'User'},
        date: {type: Date, default: Date.now},
        signed: {type: Boolean, default: false}
    },
    refer_director: {
        ID: {type: Schema.ObjectId, ref: 'User'},
        date: {type: Date, default: Date.now},
        signed: {type: Boolean, default: false}
    },
    refer_committee: [{
        ID: {type: Schema.ObjectId, ref: 'User'},
        date: {type: Date, default: Date.now},
        signed: {type: Boolean, default: false}
    }]
});


var RFQ = mongoose.model('RFQ', rfqSchema);
module.exports = RFQ;

module.exports.createRFQ = function (newRFQ, callback) {
    newRFQ.save(function (err, doc) {
        var newnot= new notifications({
            rfq_id: doc._id,
            from: doc.initiator_id,
            to: doc.refer_verifier.ID,
            text: "asked for verification"
        });
        notifications.createnotification(newnot, function (err, doc2) {
            return callback(err, doc2);
        });

    });

};


module.exports.getAllRFQbyUserID = function(ID, callback) {
    RFQ
        .find({
            $or: [{'initiator_id': ID},
                {'refer_verifier.ID': ID},
                {'refer_accountant.ID': ID},
                {'refer_committee.ID': ID},
                {'refer_director.ID': ID}
            ]
        })
        .populate('initiator_id')
        .populate('refer_verifier.ID')
        .populate('refer_accountant.ID')
        .populate('refer_committee.ID')
        .populate('refer_director.ID')
        .exec(callback);
}


module.exports.getRFQdetailsbyID= function (rfq_id, user_id, done) {
    RFQ.findOne({_id: rfq_id}).lean()
        .populate('initiator_id')
        .populate(
            'refer_verifier.ID'
        )
        .populate(
            'refer_accountant.ID'
        ).populate(
            'refer_committee.ID'
        )
        .populate(
            'refer_director.ID'
        ).exec( function (err, doc) {
            if(!doc)return;
            console.log("first..............................");
            console.log(doc);
            console.log("second..............................");

        doc.sign_auth=false;

            if(doc.substep_id==1 && doc.refer_verifier.ID._id==user_id && doc.refer_verifier.signed==false){

                doc.sign_auth=true;
                doc.forward_to="Accountant";
                User.find({designation: "Accountant"}).lean().exec( function (err, docs) {
                    doc.forward_list=docs;
                    return done(err,doc);
                });
            }
            else if(doc.substep_id==2 && doc.refer_accountant.ID._id==user_id && doc.refer_accountant.signed==false){
                doc.sign_auth=true;
                doc.forward_to="Director";
                User.find({designation: "Director"}).lean().exec(function (err, docs) {
                    doc.forward_list=docs;
                    return done(err,doc);
                });
            }
            else if(doc.substep_id==3 && doc.refer_director.ID._id==user_id && doc.refer_director.signed==false){
                doc.sign_auth=true;
                doc.forward_to="Committee";
                User.find({designation: "Scientific Officer"}).lean().exec( function (err, docs) {
                    doc.forward_list=docs;
                    return done(err,doc);
                });
            }
            else {
                return done(err,doc);
            }
        });
}
module.exports.updateaccountant = function (rfq_id, accountant_id, done) {
    RFQ.findOne({ _id: rfq_id }, function (err, doc){
        //doc.refer_verifier.date = Date.now;
        doc.refer_verifier.signed= true;
        doc.refer_accountant.ID= accountant_id;
        doc.substep_id=2;
        doc.refer_accountant.date= Date.now();

        doc.save(function (err, doc2) {
            var newnot= new notifications({
                from: doc2.refer_verifier.ID,
                to: doc.refer_accountant.ID,
                text: "asked for accounts verification"
            });
            notifications.createnotification(newnot, function (err, doc3) {
                notifications.removenotifications(rfq_id, doc2.refer_verifier.ID, function (err) {

                });
            });
            return done(err, "asked for accounts verification", Date.now());
        });
    });
}


module.exports.updatedirector = function (rfq_id, director_id, done) {
    RFQ.findOne({ _id: rfq_id }, function (err, doc){
        //doc.refer_accountant.date = Date.now;
        doc.refer_accountant.signed= true;
        doc.refer_director.ID= director_id;
        doc.substep_id=3;
        doc.refer_accountant.date= Date.now();

        doc.save(function (err, doc2) {
            var newnot= new notifications({
                from: doc2.refer_accountant.ID,
                to: doc.refer_director.ID,
                text: "asked for authentication"
            });
            notifications.createnotification(newnot, function (err, doc3) {
                notifications.removenotifications(rfq_id, doc2.refer_accountant.ID, function (err) {

                });
            });
            return done(err, "asked for authentication", Date.now());
        });
    });
}


module.exports.updatecommittee = function (rfq_id, committee, done) {
    RFQ.findOne({ _id: rfq_id }, function (err, doc){
        //doc.refer_director.date = Date.now;
        doc.refer_director.signed= true;
        doc.substep_id=4;
        doc.refer_accountant.date= Date.now();
        for (i = 0; i < committee.length; i++) {
            doc.refer_committee.push({
                ID: committee[i],


            });
        }

        doc.save(function (err, doc2) {
            notifications.removenotifications(rfq_id, doc2.refer_director.ID, function (err, doc3) {
                for (var i=0;i<doc2.refer_committee.length;i++) {
                    var newnot = new notifications({
                        from: doc2.refer_director.ID,
                        to: doc2.refer_committee[i].ID,
                        text: "asked to chair committee"
                    });
                    notifications.createnotification(newnot, function (err, doc4) {

                    });
                }

            });
        });
        return done(err, "asked to chair committee", Date.now());
    });
}

module.exports.updatechahidapotro= function (rfq_id,substep, ID, done) {
    if(substep==1){
        RFQ.updateaccountant(rfq_id, ID[0], done);
    }
    else if(substep==2){
        RFQ.updatedirector(rfq_id, ID[0], done);
    }
    else if(substep==3){
        RFQ.updatecommittee(rfq_id, ID, done);
    }
}

