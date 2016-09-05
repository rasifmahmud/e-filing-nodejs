// /**
//  * Created by razon on 8/19/16.
//  */
// var io = require('../app');
// var connectedUsers = {};
// var _ = require("lodash");
// // kono user connected hoilei jei ghotona ghotbe
//
// module.exports = io;
// io.sockets.on('connection', function (socket) {
//
//     // A new user is currently connected , putting him in connectedusers
//     socket.on('new user', function (userID) {
//         socket.userID = userID;
//         if (userID in connectedUsers) {
//             connectedUsers[socket.userID].push(socket);
//
//         }
//         else {
//             connectedUsers[socket.userID] = [];
//             connectedUsers[socket.userID].push(socket);
//
//         }
//         notifyAll(userID);
//     });
//
//     // if he disconnects himself from any of the sockets they got deleted eventually
//     socket.on('disconnect', function () {
//         if (!socket.userID) {
//             return;
//         }
//         else {
//             var array = connectedUsers[socket.userID];
//             var newArray = [];
//             newArray = _.filter(array, s => s.id !== socket.id);
//             if (newArray.length == 0) {
//                 socket.broadcast.emit('offline', getOnlineUsernames());
//
//                 delete connectedUsers[socket.userID];
//             }
//             else {
//                 connectedUsers[socket.userID] = newArray;
//             }
//
//         }
//
//
//     });
//
//     // this is for test purpose whenever any user wants to sent any notification , broadcast it to all other
//     socket.on('notification', function (data, callback) {
//         socket.broadcast.emit('broadcast', 'Amra notification peyechi');
//         callback("Shobaike notification pathai hurray aj chuti chuti re");
//     });
//
//     // emitting realtime stuffs through the sockets of a single user
//     function getSockets(username) {
//         var socket_array = connectedUsers[username];
//         _.map(socket_array, function (s) {
//             s.emit("moga", getOnlineUsernames());
//         });
//
//     }
//     // emitting realtime stuffs through the sockets of a single user
//     module.exports.sendThroughSockets = function sendThroughSockets(username,data) {
//         var socket_array = connectedUsers[username];
//         _.map(socket_array, function (s) {
//             s.emit("tumi_jachaikari", data);
//         });
//
//     }
//
//     function notifyAll(myUsername) {
//         for (var k in connectedUsers) {
//             if(k==myUsername){
//                 continue;
//             }
//             getSockets(k);
//
//         }
//     }
//
//     function getOnlineUsernames() {
//         var onlineUsers = [];
//         for (var k in connectedUsers) onlineUsers.push(k);
//         return onlineUsers;
//
//     }
//
//
// });
//
