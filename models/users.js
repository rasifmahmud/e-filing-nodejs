var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema({
    name: {type: String},
    username: {type: String, unique: true, index: true, required: true},
    password: {type: String},
    designation: {type: String},
    created: {type: Date,default: Date.now},
    dob: {type: Date},
    contactNo: {type: [String]},
    email: {type: [String]},
    profilePic: {type: String},
    signature: {type: String}
});
var User= mongoose.model('User', userSchema);
module.exports = User;

module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password,salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
            //console.log("user inserted");
        });
    });

};

module.exports.getUserbyUsername = function (username, callback) {
    User.findOne({username: username}, callback).lean();
}
