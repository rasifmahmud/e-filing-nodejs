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
            '<div class="row" style="word-break: break-word;white-space: normal;">'+
            '<div class="col-xs-2" style="margin-top:8px;">'+
            '<img src="/api/pic" class="img-rounded" height="46" width="44">'+
            '</div>'+
            '<div class="col-xs-10">'+
            '<p style="margin-left:10px; margin-bottom:2px;">'+ '<b>'+ special_data.RFQ_list[i].initiator_id.name + '</b>' +' asked for authentification</p>'+
            '<span style="margin-left:10px;">Date</span>'+
            '</div>'+

            '</div>'+
            "</a>" +
            "</li>";
    }
    $("#notifications").empty().append(not);


});
