$(document).ready(function(){
    // console.log($("#target").html());
    // $("#main-content").html($("#target").html());
    $("#nothead").empty().append("You have " +special_data.RFQ_list.length + " notifications" );
    $("#notnumber").empty().append(special_data.RFQ_list.length);

    var not= "";
    for(var i=0; i<special_data.RFQ_list.length;i++){
        not+=
            "<li>"+
                '<a href="#">' +
                    '<i class="glyphicon glyphicon-file"></i>' + special_data.RFQ_list[i].title+
                     '<span class="pull-right">Date</span>'+
                     '<p>'+ special_data.RFQ_list[i].initiator_id.name +' asked for authentification</p>'
                "</a>" +
            "</li>";
    }
    $("#notifications").empty().append(not);
});