$(document).ready(function(){
    // console.log($("#target").html());
    // $("#main-content").html($("#target").html());
    $("#nothead").empty().append("You have " +special_data.notification.length + " notifications" );
    $("#notnumber").empty().append(special_data.notification.length);

    var not= "";
    for(var i=0; i<special_data.notification.length;i++){
        var proPic = '"'+'/api/pic/'+special_data.notification[i].from.profilePic+'"';
        not+=
            "<li>"+

            '<a href="#">' +
            '<div class="row" style="word-break: break-word;white-space: normal;">'+
            '<div class="col-xs-2" style="margin-top:8px;">'+
            '<img src='+ proPic +'class="img-rounded" height="46" width="44">'+
            '</div>'+
            '<div class="col-xs-10">'+
            '<p style="margin-left:10px; margin-bottom:2px;">'+ '<b>'+ special_data.notification[i].from.name + '</b>' +' '+ special_data.notification[i].text +'</p>'+
            '<span style="margin-left:10px;">'+ special_data.notification[i].date +'</span>'+
            '</div>'+

            '</div>'+
            "</a>" +
            "</li>";
    }
    $("#notifications").empty().append(not);


});
