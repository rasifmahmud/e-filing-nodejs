$(document).ready(function() {
    var socket = io.connect();

    var myDate = new Date().toString().slice(0, 21);
    document.getElementById("date").innerHTML = myDate;

    var i = 2;
    $("#forward-btn").click(function() {
        $("#step" + i + "-panel").show("slow");
        i++;
        socket.emit('notification', 'rfq er notification pathalam', function (data) {
            console.log(data);
        });


    });

    socket.on('broadcast',function (data) {
        console.log(data);
    })

});
