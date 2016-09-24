$.holdReady(true);
$.ajax({
    type: "GET",
    url: "/api/data",
}).done(function (data) {
    special_data = data;
    noti_length = special_data.notification.length;
    
    
    RFQ_index = document.URL;
    RFQ_index = RFQ_index.slice(0,-1);
    RFQ_index = RFQ_index.substr(RFQ_index.lastIndexOf('/')+1);
    $.holdReady(false);
});

