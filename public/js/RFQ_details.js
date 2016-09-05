/**
 * Created by username on 8/31/16.
 */

$(document).ready(function () {

    // "use strict";


    "use strict";

    // $("#main-content").html("<h1> thtihththtgthtihtihtthgth </h1>");
    var myDate = new Date().toString().slice(0, 21);
    document.getElementById("date").innerHTML = myDate;





   //RFQ_details.ejs STARTS

   //STEP 1
   var selected_rfq_id = 0;
   document.getElementById('rfq-initiator-name').innerHTML = special_data.RFQ_list[selected_rfq_id].initiator_id.name;
   document.getElementById('rfq-title').innerHTML = special_data.RFQ_list[selected_rfq_id].title;

   //STEP 2

   //STEP 3
   document.getElementById('rfq-title2').innerHTML = special_data.RFQ_list[selected_rfq_id].title;

   //STEP 4
   //RFQ_details.ejs ENDS









    var index_step = 7;

    function show_detail(i) {
        index_step = i;
    }


    for (var i= index_step+1 ;i<=16;i++){
        document.getElementById('step' + i + '-panel').style.display = 'none';
    }

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

        // $("#rfq-heading").text(rfq_heading.slice(0, -2));

        // $.ajax({
        //     type: "POST",
        //     url: "/api/upload",
        //     data: JSON.stringify(jsonArray),
        //     contentType: "application/json"
        //
        // }).done(function () {
        //     console.log("Message sent successfully");
        // });


    });
});


function set_step1() {
   
}

