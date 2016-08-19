$(document).ready(function() {
    // document ready tai sockeio initialise kore nilam
    var socket = io.connect();
    // ei variable er majhe ajax request kore userid ta nie ashbo
    var userID;
    // ajax request er madhdhome imran er initially ja ja dorkar ta eikhane ene dibo
        $.ajax({
            type: "GET",
            url: "/api/data",
        }).done(function (user) {
            userID = user.id;
            // new user connected hoise eita server k janaite hbe realtime er bepar shepar
            socket.emit('new user', userID);

        });


    var myDate = new Date().toString().slice(0, 21);
    document.getElementById("date").innerHTML = myDate;

    var i = 2;
    $("#forward-btn").click(function() {
        $("#step" + i + "-panel").show("slow");
        i++;

        // testing purpose e forward button click korle duniar shobar kache notification pathate chai
        socket.emit('notification', 'rfq er notification pathalam', function (data) {
            console.log(data);
        });


    });
    // server theke kichu broadcast hole ta console e dekhai
    socket.on('broadcast',function (data) {
        console.log(data);
    })

});
