var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require("./users");

var notificationsSchema = new mongoose.Schema({
    rfq_id: {type: Schema.ObjectId, ref: 'RFQ'},
    from : {type: Schema.ObjectId, ref: 'User'},
    to: {type: Schema.ObjectId, ref: 'User', index: true},
    text: {type: String},
    date: {type: Date, default: Date.now}
});


var notifications = mongoose.model('notifications', notificationsSchema);
module.exports = notifications;

module.exports.createnotification = function (newNotification, callback) {
    console.log("not created");
    newNotification.save(callback);

};

module.exports.removenotifications = function (rfq_id, to_id, callback) {
    notifications.find({rfq_id: rfq_id, to: to_id}).remove().exec();
}

module.exports.getnotificationsbyuserid = function (user_id, callback) {
    notifications.find({to: user_id})
        .populate('from').exec(callback);
}
