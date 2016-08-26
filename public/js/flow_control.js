$(document).ready(function(){
    //  3 types of users are possible. 1. director 2. scientist 3. hishab rokhkhk
    var userType;
    // initiator / jachaikari / hishab rokhkhok / director
    var rfqPrivilege ;
    var proPicImageURL="/api/pic";
    var fullName = special_data.user.name;
    var designation = special_data.user.designation;
    var isOnline = "Online";

    $(".pro-pic").attr("src",proPicImageURL);
    $(".full-name").text(fullName);
    $(".designation").text(designation);
    $(".is-online").text(isOnline);

    console.log(special_data.user);
    console.log(special_data.RFQ_list);

    var num_of_rfq = special_data.RFQ_list.length;
    for(var i=0;i<num_of_rfq;i++){

    }





});

















