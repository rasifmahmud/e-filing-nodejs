$(document).ready(function(){
    // console.log($("#target").html());
    // $("#main-content").html($("#target").html());
    $("#nothead").empty().append("You have " +special_data.notification.length + " notifications" );
    $("#notnumber").empty().append(special_data.notification.length);

    var not= "";
    for(var i=0; i<special_data.notification.length;i++){
        var proPic = '"'+'/api/pic/'+special_data.notification[i].from.profilePic+'"';


        var dt = new Date(special_data.notification[i].date);
        var year = dt.getFullYear();
        var month = dt.getMonth();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        var day = dt.getDate();

        var hour = dt.getUTCHours();
        var time_tag;
        if(hour==00){
            hour = "12";
            time_tag = "am";
        }
        else if(hour>00 && hour<12){
            time_tag = "am";
        }
        else{
            hour -= 12;
            time_tag = "pm";
        }
        var minute = dt.getUTCMinutes();


        // console.log(special_data.notification[i].date);
        console.log(hour);
        console.log(minute);
        not+=
            "<li>"+

            '<a href="#">' +
            '<div class="row" style="word-break: break-word;white-space: normal;">'+
            '<div class="col-xs-2" style="margin-top:8px;">'+
            '<img src='+ proPic +'class="img-rounded" height="46" width="44">'+
            '</div>'+
            '<div class="col-xs-10">'+
            '<p style="margin-left:10px; margin-bottom:2px;">'+ '<b>'+ special_data.notification[i].from.name + '</b>' +' '+ special_data.notification[i].text +'</p>'+
            '<span style="margin-left:10px; font-style: italic; color:#999">'+
                day+'&nbsp;'+monthNames[month]+','+year + '&nbsp;&nbsp;&nbsp; at ' +
                hour + ':' + minute + '&nbsp;' + time_tag
            '</span>'+
            '</div>'+

            '</div>'+
            "</a>" +
            "</li>";
    }
    $("#notifications").empty().append(not);


});
