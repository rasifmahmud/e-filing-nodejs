$(document).ready(function() {
    var myDate = new Date().toString().slice(0, 21);
    document.getElementById("date").innerHTML = myDate;

    var i = 2;
    $("#forward-btn").click(function() {
        $("#step" + i + "-panel").show("slow");
        i++;
    });

});
