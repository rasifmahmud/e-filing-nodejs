var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require("./users");

var rfqSchema = new mongoose.Schema({
    initiator_id: {type: Schema.ObjectId, ref: 'users'},
    created: {type: Date, default: Date.now},
    step_id: {type: Number},
    refer_jachai: {
        ID: {type: Schema.ObjectId, ref: 'users'},
        date: {type: Date},
        signed: {type: Boolean}
    },
    refer_hishab: {
        ID: {type: Schema.ObjectId, ref: 'users'},
        date: {type: Date},
        signed: {type: Boolean}
    },
    refer_director: {
        ID: {type: Schema.ObjectId, ref: 'users'},
        date: {type: Date},
        signed: {type: Boolean}
    },
    refer_committee: [{
        ID: {type: Schema.ObjectId, ref: 'users'},
        date: {type: Date},
        signed: {type: Boolean}
    }]
});
var RFQ = mongoose.model('RFQ', rfqSchema);
module.exports = RFQ;

module.exports.createRFQ = function (newRFQ, callback) {
    newRFQ.save(callback);
    //console.log(" rffff inserted");
};

module.exports.getFullRFQListbyID = function (ID, callback) {
    RFQ.find(
        {
            $or: [{'initiator_id': ID},
                {'refer_jachai.ID': ID},
                {'refer_hishab.ID': ID},
                {'refer_committee.ID': ID},
                {'refer_director.ID': ID}
            ]
        },
        {"_id": true, "step_id": true}, (callback)
    ).lean();
}

module.exports.getFullRFQListbyUsername = function (username, callback) {
    User.getUserbyUsername(username, function (er, doc) {
        if (!doc) {
            return;
        }
        var ID = doc._id;
        //console.log(ID);

        RFQ.find(
            {
                $or: [{'initiator_id': ID},
                    {'refer_jachai.ID': ID},
                    {'refer_hishab.ID': ID},
                    {'refer_committee.ID': ID},
                    {'refer_director.ID': ID}
                ]
            },
            (callback)).lean();
    });
};