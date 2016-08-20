var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var rfqSchema = new mongoose.Schema({
    initiator_id: {type: Schema.ObjectId, ref: 'users'},
    created: {type: Date,default: Date.now},
    step_id: {type: Number},
    refer_jachai :
        {
            ID : {type: Schema.ObjectId, ref: 'users'},
            date: {type: Date},
            signed: {type: Boolean}
        },
    refer_hishab :
    {
        ID : {type: Schema.ObjectId, ref: 'users'},
        date: {type: Date},
        signed: {type: Boolean}
    },
    refer_director :
    {
        ID : {type: Schema.ObjectId, ref: 'users'},
        date: {type: Date},
        signed: {type: Boolean}
    },
    refer_committee :
    [{
        ID : {type: Schema.ObjectId, ref: 'users'},
        date: {type: Date},
        signed: {type: Boolean}
    }]
});
var RFQ= mongoose.model('RFQ', rfqSchema);
module.exports = RFQ;

module.exports.createRFQ = function (newRFQ, callback) {
    newRFQ.save(callback);
    console.log(" rffff inserted");
};

module.exports.getRFQbyID = function(ID, callback) {
    RFQ.find(
        {'refer_jachai.ID': ID},
        {"_id": true}, (callback)
    );
}