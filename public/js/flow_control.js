$(document).ready(function(){
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

    console.log(special_data.user);
    console.log(special_data.rfq_list);




});

















