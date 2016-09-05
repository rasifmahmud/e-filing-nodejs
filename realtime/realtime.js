// /**
//  * Created by razon on 8/19/16.
//  */
// var io = require('../app');
// var connectedUsers = {};
// var _ = require("lodash");
// // kono user connected hoilei jei ghotona ghotbe
// io.sockets.on('connection', function (socket) {
//
//     // A new user is currently connected , putting him in connectedusers
//     socket.on('new user', function (username) {
//         // console.log('new user');
//         socket.username = username;
//         if (username in connectedUsers) {
//             connectedUsers[socket.username].push(socket);
//
//         }
//         else {
//             connectedUsers[socket.username] = [];
//             connectedUsers[socket.username].push(socket);
//
//         }
//         console.log(connectedUsers);
//         // getSockets(username);
//         socket.broadcast.emit('online', getOnlineUsernames());
//
//     });
//     // if he disconnects himself from any of the sockets they got deleted eventually
//     socket.on('disconnect', function () {
//         if (!socket.username) {
//             return;
//         }
//         else {
//             var array = connectedUsers[socket.username];
//             var newArray= [];
//             newArray = _.filter(array, s => s.id !== socket.id);
//             if(newArray.length==0){
//                 socket.broadcast.emit('offline', getOnlineUsernames());
//
//                 delete connectedUsers[socket.username];
//             }
//             else{
//                 connectedUsers[socket.username] = newArray;
//             }
//
//         }
//         console.log(connectedUsers);
//
//
//     });
//
//     // this is for test purpose whenever any user wants to sent any notification , broadcast it to all other
//     socket.on('notification', function (data, callback) {
//         console.log(data);
//         socket.broadcast.emit('broadcast', 'Amra notification peyechi');
//         callback("Shobaike notification pathai hurray aj chuti chuti re");
//     });
//
//     // emitting realtime stuffs through the sockets of a single user
//     function getSockets(username) {
//         var socket_array = connectedUsers[username];
//         _.map(socket_array,function (s) {
//             s.emit("moga", getOnlineUsernames());
//         });
//
//     };
//     function getOnlineUsernames() {
//         var onlineUsers = [];
//         for(var k in connectedUsers) onlineUsers.push(k);
//         return onlineUsers;
//
//     }
//
//
//
//
// });
//
// // // kono user connected hoilei jei ghotona ghotbe
// // io.sockets.on('connection', function (socket) {
// //     socket.on('new user', function (data, callback) {
// //         console.log('new user');
// //         if (data in users) {
// //             callback(false);
// //         }
// //         else {
// //             callback(true);
// //             socket.nickname = data;
// //             users[socket.nickname] = socket;
// //             updateNickNames();
// //         }
// //     });
// //     function updateNickNames() {
// //         io.sockets.emit('usernames', Object.keys(users));
// //     }
// //
// //     socket.on('send message', function (data, callback) {
// //         var msg = data.trim();
// //         if (msg.substr(0, 3) === '/w ') {
// //             msg = msg.substr(3);
// //             var index = msg.indexOf(" ");
// //             if (index >= 0) {
// //                 var name = msg.substr(0, index);
// //                 msg = msg.substr(index + 1);
// //                 if (name in users) {
// //                     users[name].emit('new message', {msg: msg, nick: socket.nickname});
// //                 }
// //                 else {
// //                     callback("Please Enter An Online UserName ");
// //                 }
// //             }
// //             else {
// //                 callback("Please Enter A Message");
// //             }
// //         }
// //         else {
// //             io.sockets.emit('new message', {msg: data, nick: socket.nickname});
// //         }
// //     });
// //     socket.on('disconnect', function () {
// //         if (!socket.nickname) {
// //             return;
// //         }
// //         else {
// //             delete users[socket.nickname];
// //             updateNickNames();
// //         }
// //
// //
// //     });
// //
// //
// // });
