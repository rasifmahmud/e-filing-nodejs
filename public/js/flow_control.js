$(document).ready(function(){

    "use strict";

    var i = 2;
    $("#forward-btn").click(function() {
        $("#step" + i + "-panel").show("slow");
        i++;
    });

// initially all the panels from 2-16 are hidden
    document.getElementById( 'step2-panel' ).style.display = 'none';
    document.getElementById( 'step3-panel' ).style.display = 'none';
    document.getElementById( 'step4-panel' ).style.display = 'none';
    document.getElementById( 'step5-panel' ).style.display = 'none';
    document.getElementById( 'step6-panel' ).style.display = 'none';
    document.getElementById( 'step7-panel' ).style.display = 'none';
    document.getElementById( 'step8-panel' ).style.display = 'none';
    document.getElementById( 'step9-panel' ).style.display = 'none';
    document.getElementById( 'step10-panel' ).style.display = 'none';
    document.getElementById( 'step11-panel' ).style.display = 'none';


// declared the global variables
// to keep track of the state of each step
    var step2_complete = false;
    var step2_complete = false;
    var step3_complete = false;
    var step4_complete = false;
    var step5_complete = false;
    var step6_complete = false;
    var step7_complete = false;
    var step8_complete = false;
    var step9_complete = false;
    var step10_complete = false;
    var step11_complete = false;

    if (step2_complete === true)  document.getElementById( 'step3-panel' ).style.display = 'block';
    if (step3_complete === true)  document.getElementById( 'step4-panel' ).style.display = 'block';
    if (step4_complete === true)  document.getElementById( 'step5-panel' ).style.display = 'block';
    if (step5_complete === true)  document.getElementById( 'step6-panel' ).style.display = 'block';
    if (step6_complete === true)  document.getElementById( 'step7-panel' ).style.display = 'block';
    if (step7_complete === true)  document.getElementById( 'step8-panel' ).style.display = 'block';
    if (step8_complete === true)  document.getElementById( 'step9-panel' ).style.display = 'block';
    if (step9_complete === true)  document.getElementById( 'step10-panel' ).style.display = 'block';
    if (step10_complete === true)  document.getElementById( 'step11-panel' ).style.display = 'block';




    //  3 types of users are possible. 1. director 2. scientist 3. hishab rokhkhk
    var userType;
    // initiator / jachaikari / hishab rokhkhok / director
    var rfqPrivilege ;
    var proPicImageURL="../dist/img/user2-160x160.jpg";
    var fullName = "Md. Moniruzzaman";
    var designation = "Scientific Officer";
    var isOnline = "Online";

    $(".pro-pic").attr("src",proPicImageURL);
    $(".full-name").text(fullName);
    $(".designation").text(designation);
    $(".is-online").text(isOnline);

    var user = special_data.user;
    var rfq_list = special_data.rfq_list;
    console.log("username"+"-->" + user.username);
    console.log("password ---> " + user.password);


});

















