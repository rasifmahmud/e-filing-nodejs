var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectId;
var RFQdetailsSchema = new mongoose.Schema({
    RFQ_ID: {type: Schema.ObjectId },
    title: {type: String},
    bidhi_niti: {type: String},
    details:
    {
        item_no: {type: Number},
        desctription: {type: String},
        unit: {type: Number},
        qty: {type: Number},
        price_fig: {type: Number},
        price_words: {type: String},
        total_fig: {type: Number},
        total_words: {type: String},
        total_tt_fig: {type: Number},
        total_tt_words: {type: String},
    }
});
var RFQdetails= mongoose.model('RFQdetails', RFQdetailsSchema);
module.exports = RFQdetails;

module.exports.createRFQdetails = function (newRFQdetails, callback) {
    newRFQdetails.save(callback);
    //console.log(" rffffdetails inserted");
};
module.exports.getRFQInfobyID = function (ID, callback) {
    RFQdetails.findOne({_id: ID}, callback);
};

