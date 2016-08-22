/**
 * Created by razon on 8/21/16.
 */
$(document).ready(function() {
    // document ready tai sockeio initialise kore nilam
    var socket = io.connect();
    // ei variable er majhe ajax request kore userid ta nie ashbo
    var data;
    // ajax request er madhdhome imran er initially ja ja dorkar ta eikhane ene dibo
    $.ajax({
        type: "GET",
        url: "/api/data",
    }).done(function (data) {
        data = data;
        // new user connected hoise eita server k janaite hbe realtime er bepar shepar
        console.log(data);
        $.ajax({
            type: "POST",
            url: "/api/data",
            data: JSON.stringify(data),
            contentType : "application/json"

        }).done(function () {
            socket.emit('new user', data.user.username);

        });


    });



    // server theke kichu broadcast hole ta console e dekhai
    socket.on('broadcast',function (data) {
        console.log(data);
    });

    socket.on('moga',function (data) {
        console.log(data);
    });

});