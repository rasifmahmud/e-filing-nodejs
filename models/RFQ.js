var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require("./users");

var rfqSchema = new mongoose.Schema({
    initiator_id: {type: Schema.ObjectId, ref: 'User'},
    created: {type: Date, default: Date.now},
    step_id: {type: Number},
    substep_id: {type: Number},
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
        date: {type: Date},
        signed: {type: Boolean, default: false}
    },
    refer_accountant: {
        ID: {type: Schema.ObjectId, ref: 'User'},
        date: {type: Date},
        signed: {type: Boolean, default: false}
    },
    refer_director: {
        ID: {type: Schema.ObjectId, ref: 'User'},
        date: {type: Date},
        signed: {type: Boolean, default: false}
    },
    refer_committee: [{
        ID: {type: Schema.ObjectId, ref: 'User'},
        date: {type: Date},
        signed: {type: Boolean, default: false}
    }]
});


var RFQ = mongoose.model('RFQ', rfqSchema);
module.exports = RFQ;

module.exports.createRFQ = function (newRFQ, callback) {
    newRFQ.save(callback);

};


module.exports.getAllRFQbyUserID = function(ID, callback) {
    RFQ
        .find({
            $or: [{'initiator_id': ID},
                {'refer_jachai.ID': ID},
                {'refer_hishab.ID': ID},
                {'refer_committee.ID': ID},
                {'refer_director.ID': ID}
            ]
        })
        .populate('initiator_id')
        .populate('refer_jachai.ID')
        .populate('refer_hishab.ID')
        .populate('refer_committee.ID')
        .populate('refer_director.ID')
        .exec(callback);
}

module.exports.getRFQdetailsbyID= function (rfq_id, user_id, done) {
    RFQ.findOne({_id: rfq_id}).lean().exec( function (err, doc) {
        if(!doc)return;

        doc.sign_auth=false;

        if(doc.substep_id==1 && doc.refer_verifier.ID==user_id && doc.refer_verifier.signed==false){
            doc.sign_auth=true;
            doc.forward_to="Accountant";
            console.log(doc);
            User.find({designation: "Accountant"}).lean().exec( function (err, docs) {
                doc.forward_list=docs;
                console.log(doc);
                return done(doc);
            });
        }
        else if(doc.substep_id==2 && doc.refer_accountant.ID==user_id && doc.refer_accountant.signed==false){
            doc.sign_auth=true;
            doc.forward_to="Director";
            User.find({designation: "Director"}).lean().exec(function (err, docs) {
                doc.forward_list=docs;
                return done(doc);
            });
        }
        else if(doc.substep_id==3 && doc.refer_director.ID==user_id && doc.refer_director.signed==false){
            doc.sign_auth=true;
            doc.forward_to="Committee";
            User.find({designation: "Scientific Officer"}).lean().exec( function (err, docs) {
                doc.forward_list=docs;
                return done(doc);
            });
        }
        else {
            console.log(doc);
            return done(doc);
        }
    });
}

module.exports.updateaccountant = function (rfq_id, accountant_id, done) {
    RFQ.findOne({ _id: rfq_id }, function (err, doc){
        doc.refer_verifier.date = date.now;
        doc.refer_verifier.signed= true;
        doc.refer_accountant.ID= accountant_id;

        doc.save(done);
    });
}


module.exports.updatedirector = function (rfq_id, director_id, done) {
    RFQ.findOne({ _id: rfq_id }, function (err, doc){
        doc.refer_accountant.date = date.now;
        doc.refer_accountant.signed= true;
        doc.refer_director.ID= accountant_id;

        doc.save(done);
    });
}


module.exports.updatedirector = function (rfq_id, committee, done) {
    RFQ.findOne({ _id: rfq_id }, function (err, doc){
        doc.refer_director.date = date.now;
        doc.refer_director.signed= true;
        for (i = 0; i < committee.length; i++) {
            doc.refer_committee.push({ID: committee[i]});
        }

        doc.save(done);
    });
}