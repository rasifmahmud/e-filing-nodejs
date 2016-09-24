$(document).ready(function () {







    "use strict";

    // $("#main-content").html("<h1> thtihththtgthtihtihtthgth </h1>");
    console.log(special_data.forward_list);

    var table = document.getElementById("#example");

    var rowCount = 1 ;

    // var index_step = 7;
    //
    // for (var i= index_step+1 ;i<=16;i++){
    //     document.getElementById('step' + i + '-panel').style.display = 'none';
    // }


    // initially button disabled
    $("#submit-requisition-form").prop("disabled",true);



    $("#example > tbody").append('<tr>'+

        '<td><input type="checkbox"></td>'+
        '<td contenteditable="true" style="word-wrap: break-word;"></td>'+
        '<td contenteditable="true" style="word-wrap: break-word;"></td>' +
        '<td contenteditable="true" style="word-wrap: break-word;"></td>' +
        '<td contenteditable="true" style="word-wrap: break-word;"></td>' +

        '</tr>');


    var forward_list = special_data.forward_list;

    var forward_list_length = forward_list.length;

    for(var i=0;i<forward_list_length;i++){
        $('#forward-to-list').append($('<option>', {
            value: forward_list[i]._id,
            text: forward_list[i].name
        }));
    }


    // $.each(forward_list, function (i, item) {
    //     $('#forward-to-list').append($('<option>', {
    //         value: item[0],
    //         text : item[1]
    //     }));
    // });

    //
    // $("#forward-to-list").html(function () {
    //
    //     var forward_list = special_data.forward_list;
    //
    //     var forward_list_length = forward_list.length;
    //     var html_text = '';
    //     for(var i=0;i<forward_list_length;i++){
    //         html_text += '<option>'+ forward_list[i].name +'</option>';
    //     }
    //     return html_text;
    // });


    $("#committee-member-list").html(function () {
        var forward_list = "";
        var forward_list_length = 5;
        var html_text = '';
        for(var i=0;i<forward_list_length;i++){
            html_text += '<option>alubana</option>';
        }
        return html_text;
    });


    $("#authenticate").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();


        $.ajax({
            type: "POST",
            url: "/api/verify",
            data: JSON.stringify({username:username,password:password}),
            contentType: "application/json"

        }).done(function (data) {
            if(data==="passed"){
                $("#submit-requisition-form").prop("disabled",false);
            } else {
                $("#submit-requisition-form").prop("disabled",true);
            }

            console.log(data);
        });

        //    if username and password match


    });





    //console.log("vaaaal" + forward_to);

    var rfq_heading = "";
    var jsonArray = [];
    var jsonData = {};
    $("#submit-requisition-form").click(function () {
        var requsitionFormTable = document.getElementById('example');

        //gets rows of table
        var rowLength = requsitionFormTable.rows.length;

        var rfq_title = $("#rfq_title").val();
        var forward_to = $("#forward-to-list").val();
        //loops through rows
        for (var i = 1; i < rowLength; i++) {
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




            // var itemNo = requsitionFormTable.rows[i].cells[1].innerHTML;
            var descriptionOfItems = requsitionFormTable.rows[i].cells[1].innerHTML;
            var quantity = requsitionFormTable.rows[i].cells[2].innerHTML;
            var URP = requsitionFormTable.rows[i].cells[3].innerHTML;
            var totalAmountInFigure = requsitionFormTable.rows[i].cells[4].innerHTML;

            rfq_heading += descriptionOfItems + " , ";
            // jsonData["itemNo"]  = $.trim(itemNo);
            jsonData["desctription"] = descriptionOfItems;
            // jsonData["unitOfMeasurement"] = unitOfMeasurement;
            jsonData["qty"] = quantity;
            jsonData["price_fig"] = URP;
            // jsonData["URPInWords"] = URPInWords;
            jsonData["total_fig"] = totalAmountInFigure;
            // jsonData["totalAmountInWords"] = totalAmountInWords;
            jsonArray.push(jsonData);

        }

        $("#rfq-heading").text(rfq_heading.slice(0, -2));
        var new_json = {
            title: rfq_title,
            details: jsonArray,
            initiator_id: special_data.user._id,
            bidhi_niti: "samplebidhi_niti",
            refer_verifier:{
                ID: forward_to
            },
        };

        $.ajax({
            type: "POST",
            url: "/api/upload",
            data: JSON.stringify(new_json),
            contentType: "application/json"

        }).done(function () {
            console.log("Message sent successfully");
        });


    });








});


//requsition form related functions
function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    //var row = table.insertRow(rowCount);

    $("#example > tbody").append('<tr>'+

        '<td><input type="checkbox"></td>'+
        '<td contenteditable="true" style=" word-wrap: break-word;"></td>'+
        '<td contenteditable="true" style=" word-wrap: break-word;"></td>' +
        '<td contenteditable="true" style=" word-wrap: break-word;"></td>' +
        '<td contenteditable="true" style=" word-wrap: break-word;"></td>' +

        '</tr>');

    // var checkbox = document.createElement('input');
    // checkbox.type = "checkbox";
    //
    //
    // var counter = 0;
    // var t = $('#example').DataTable();
    // t.row.add( [
    //     checkbox,
    //     counter +'.2',
    //     counter +'.3',
    //     counter +'.4',
    //     counter +'.5'
    // ] ).draw( false );

    // $('#addRow').on( 'click', function () {
    //     t.row.add( [
    //         counter +'.1',
    //         counter +'.2',
    //         counter +'.3',
    //         counter +'.4',
    //         counter +'.5'
    //     ] ).draw( false );
    //
    //     counter++;
    // } );

}



function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }


        }


    } catch (e) {
        alert(e);
    }
}