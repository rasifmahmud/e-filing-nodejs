/**
 * Created by username on 8/31/16.
 */

$(document).ready(function () {

    "use strict";

    // $("#main-content").html("<h1> thtihththtgthtihtihtthgth </h1>");
    var myDate = new Date().toString().slice(0, 21);
    document.getElementById("date").innerHTML = myDate;

    $("#lsb-rfq-list").click(function () {
        // window.location.href = "/";
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
            console.log("age");
            console.log(rfq_list);
            console.log("pore");
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
    
    //SHADMAN'S WORK OF RFQ DETAILS STARTS
    //RFQ_details.ejs STARTS

   //STEP 1
   var selected_rfq_id = 0;
   document.getElementById('rfq-initiator-name').innerHTML = special_data.user.name;
   document.getElementById('rfq-title').innerHTML = special_data.RFQ_detail.title;

   //STEP 2

   //STEP 3
   document.getElementById('rfq-title2').innerHTML = special_data.RFQ_detail.title;

   //RFQ_TITLE
    document.getElementById("rfq_title").value = special_data.RFQ_detail.title;

    //TABLE NON-EDITABLE
    document.getElementById("rfq_table_non").contentEditable = false;

    //TABLE ENTRY
    var total_table_entry = special_data.RFQ_detail.details.length;
    var t = $('#rfq_table_non').DataTable();
    for(var i=0;i<total_table_entry;i++){

        t.row.add( [
            i+1,
            special_data.RFQ_detail.details[i].desctription,
            special_data.RFQ_detail.details[i].qty,
            special_data.RFQ_detail.details[i].price_fig,
            special_data.RFQ_detail.details[i].total_fig
        ] ).draw( false );
    }


    //INTERNAL STEP SPAN ENTRIES

    //step1
    document.getElementById("item_span").innerHTML = special_data.RFQ_detail.title;
    //step 2
    document.getElementById("taka_fig_span").innerHTML = special_data.RFQ_detail.total_tt_fig;
    document.getElementById("taka_word_span").innerHTML = special_data.RFQ_detail.total_tt_words;

    //step4
    document.getElementById("field_span").innerHTML = "Furniture";
    
    //SIGNATURE

    document.getElementById("scientist_sig").src = '/api/pic/' + special_data.RFQ_detail.initiator_id.signature;
    // document.getElementById("verifier_sig").src = '/api/pic/' + special_data.RFQ_detail.refer_verifier.ID.signature;
    // document.getElementById("accountant_sig").src = '/api/pic/' + special_data.RFQ_detail.refer_accountant.ID.signature;
    // document.getElementById("director_sig").src = '/api/pic/' + special_data.RFQ_detail.refer_director.ID.signature;
    
   //RFQ_details.ejs ENDS
    //SHADMAN'S WORK OF RFQ DETAILS ENDS









    var index_step = 7;

    function show_detail(i) {
        index_step = i;
    }


    for (var i= index_step+1 ;i<=16;i++){
        document.getElementById('step' + i + '-panel').style.display = 'none';
    }


    //SHADMAN'S WORK

    var forward_list = special_data.forward_list;

    var forward_list_length = forward_list.length;

    document.getElementById("to-whom").innerHTML = special_data.RFQ_detail.forward_to;
    document.getElementById("select2-forward-to-list-2-container").style.marginTop = "-7px";
    ;

    for(var i=0;i<forward_list_length;i++){
        $('#forward-to-list-2').append($('<option>', {
            value: forward_list[i]._id,
            text: forward_list[i].name
        }));
    }




    $("#committee-member-list").html(function () {
        var forward_list = "";
        var forward_list_length = 5;
        var html_text = '';
        for(var i=0;i<forward_list_length;i++){
            html_text += '<option>alubana</option>';
        }
        return html_text;
    });


    // step 1  er jonno necessary data start
    var rfq_heading = "";
    $("td").contentEditable = true;
    //$("td").required = true;
    var jsonArray = [];
    var jsonData = {};
    $("#submit-requisition-form").click(function () {
        var requsitionFormTable = document.getElementById('dataTable');

        //gets rows of table
        var rowLength = requsitionFormTable.rows.length;

        //loops through rows
        for (i = 2; i < rowLength; i++) {
            jsonData={};
            //gets cells of current row
            var oCells = requsitionFormTable.rows.item(i).cells;
            //gets amount of cells of current row
            var cellLength = oCells.length;
            //loops through each cell in current row
            // for(var j = 2; j < cellLength; j++){
            //
            //     // get your cell info here
            //     var cellVal = requsitionFormTable.rows[i].cells[j].innerHTML;   //oCells.item(j).childNodes[0].innerHTML;
            //     alert(j + " --> " + cellVal);
            // }

            var itemNo = requsitionFormTable.rows[i].cells[1].innerHTML;
            var descriptionOfItems = requsitionFormTable.rows[i].cells[2].innerHTML;
            var unitOfMeasurement = requsitionFormTable.rows[i].cells[3].innerHTML;
            var quantity = requsitionFormTable.rows[i].cells[4].innerHTML;
            var URPInFigure = requsitionFormTable.rows[i].cells[5].innerHTML;
            var URPInWords = requsitionFormTable.rows[i].cells[6].innerHTML;
            var totalAmountInFigure = requsitionFormTable.rows[i].cells[7].innerHTML;
            var totalAmountInWords = requsitionFormTable.rows[i].cells[8].innerHTML;

            rfq_heading += descriptionOfItems + " , ";
            jsonData["itemNo"]  = $.trim(itemNo);
            jsonData["descriptionOfItems"] = descriptionOfItems;
            jsonData["unitOfMeasurement"] = unitOfMeasurement;
            jsonData["quantity"] = quantity;
            jsonData["URPInFigure"] = URPInFigure;
            jsonData["URPInWords"] = URPInWords;
            jsonData["totalAmountInFigure"] = totalAmountInFigure;
            jsonData["totalAmountInWords"] = totalAmountInWords;
            jsonArray.push(jsonData);

        }

        $("#rfq-heading").text(rfq_heading.slice(0, -2));

        $.ajax({
            type: "POST",
            url: "/api/upload",
            data: JSON.stringify(jsonArray),
            contentType: "application/json"

        }).done(function () {
            console.log("Message sent successfully");
        });


    });
});


function set_step1() {
   
}

