function showd(i) {
    window.alert('you  ' + i);
    var inner = $("#target").html();
    console.log("ggug juyg");
    // $("#main-content").html($("#target").html());

}

$(document).ready(function(){
    console.log(RFQ_index);

    // console.log($("#target").innerHTML);
    // console.log($("#target").text());

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

    console.log(special_data.RFQ_list);
    console.log(special_data.user);
    //window.alert(special_data.RFQ_list.length);




    $("#lsb-rfq-list").click(function () {
        $("#main-content").html(function (rfq_list) {
            var initiator_name = "initiator_name";
            var initiating_date = "initiating_date";
            var running_for = "running_for";
            var rfq_title = "rfq title";
            var cost = "cost";
            var rfq_state = "cancel";
            var rfq_step = "rfq_step";
            var icon = "";
            var bg = "";

            rfq_list = special_data.RFQ_list;
            var html_text = "";
            for(var i=0;i<rfq_list.length;i++){
                initiator_name = rfq_list[i].initiator_id.name;
                initiating_date = rfq_list[i].created;
                rfq_title ="";// rfq_list[i].RFQ_details_id.title;
                rfq_state = rfq_list[i].state;
                // rfq_title = rfq_list[i].RFQ_details_id.title;
                console.log(special_data.RFQ_list[i].state);
                if(rfq_state === "running"){
                    icon = "fa fa-chevron-right";
                    bg = "green";
                }else if(rfq_state === "complete"){
                    icon = "fa fa-check-square-o";
                    bg = "blue";
                }else if(rfq_state === "cancel"){
                    icon = "fa fa-ban";
                    bg = "red";
                }else {
                    console.log("problem in RFQ_state (running, complete or cancelled)");
                    //return;
                }

                html_text+=
                    // '<div class="row" style="padding-left: 15px;padding-right: 15px;">'+
                    //         '<div class="col-lg-12 col-xs-12">'+
                    //             '<div class="info-box">'+
                    //                 '<span class="info-box-icon bg-green"><i class="fa fa-flag-o fa-lg"></i></span>'+
                    //                 '<div class="info-box-content">'+
                    //                 '<span class="info-box-text">Bookmarks</span>'+
                    //                 '<span class="info-box-number">410</span>'+
                    //                 '</div>'+
                    //             '</div>'+
                    //         // <!-- /.info-box -->
                    //         '</div>'+
                    // '</div>';

                    '<div class="row" style="padding-left: 15px;padding-right: 15px;">'+
                    '<div class="col-lg-12 col-xs-12" style="padding-top: 15px;">'+
                    '<!-- small box -->'+
                    '<div class="small-box bg-'+bg+'">'+
                    '<div class="inner">'+
                    '<h2>RFQ Title : '+rfq_title+'</h2>'+
                    '<div class="row">' +
                    '<div class="col-md-6 col-sm-6 col-xs-12">' +
                    '<p>Initiator : <strong>'+initiator_name+'</strong></p>'+
                    '<p>Initiated : <strong>'+initiating_date.toString().slice(0, 10)+'</strong></p>'+
                    '<p>Running : <strong>'+running_for+'</strong></p>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-12">' +
                    '<p>Cost : <strong>'+cost+'</strong></p>'+
                    '</div>'+
                    '</div>'+
                    '</div>' +
                    '<div class="icon">'+
                    '<i class="' + icon + '" aria-hidden="true"></i>'+
                    '</div>'+
                    '<a class="small-box-footer" href="/rfq_detail/'+ special_data.RFQ_list[i]._id +'/" id="rfq-more-info">'+
                    //             '<a class="small-box-footer" href="rfq_list" id="/api/rfq_list/'+ i +'">'+
                    'More info <i class="fa fa-arrow-circle-right fa-lg"></i>'+
                    '</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>';

                // '<div class="panel panel-primary">' +
                //     '<div class="panel-heading">initiator : '+initiator_name+'</div>'+
                //     '<div class="panel-body">Panel Content</div>'+
                // '</div>';
            }
            return '<div style="padding-top: 15px;">'+html_text +'</div>';
        });

        // var no_of_rfq = special_data.RFQ_list.length;
        // for(let i = 0; i < no_of_rfq; i++) {
        //     console.log(i);
        //     $('#rfq-more-info' + i).click( function(){
        //         show_detail(i);
        //     });
        // }
    });


    // step 1  er jonno necessary data start
    var rfq_heading = "";
    $("td").contentEditable = true;
    $("td").textWrap = true;
    //$("td").required = true;
    var jsonArray = [];
    var jsonData = {};


    // for(var i=0;i<5;i++){
    //     var id = "#rfq-more-info" + i;

    //
    // }

    // $("#rfq-more-info0").click(function () {
    //     console.log("thioh dofnd");
    // });

//    main content by default jeta thakbe
//    activity list
//     $("#mainpart").click(function () {
//        $("#mainpart").html("<h1>kaj kore na</h1>");
//     });



});