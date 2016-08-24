/**
 * Created by razon on 8/25/16.
 */
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/api/pic"
    }).done(function (result) {
        // console.log("Got the fucking image");
    });

});
