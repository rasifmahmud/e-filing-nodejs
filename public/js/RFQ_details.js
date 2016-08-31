/**
 * Created by username on 8/31/16.
 */

$(document).ready(function () {

    "use strict";


    var index_step = 7;

    function show_detail(i) {
        index_step = i;
    }
    

    for (var i= index_step+1 ;i<=16;i++){
        document.getElementById('step' + i + '-panel').style.display = 'none';
    }
// initially all the panels from 2-16 are hidden
//     document.getElementById('step2-panel').style.display = 'none';
//     document.getElementById('step3-panel').style.display = 'none';
//     document.getElementById('step4-panel').style.display = 'none';
//     document.getElementById('step5-panel').style.display = 'none';
//     document.getElementById('step6-panel').style.display = 'none';
//     document.getElementById('step7-panel').style.display = 'none';
//     document.getElementById('step8-panel').style.display = 'none';
//     document.getElementById('step9-panel').style.display = 'none';
//     document.getElementById('step10-panel').style.display = 'none';
//     document.getElementById('step11-panel').style.display = 'none';


// declared the global variables
// to keep track of the state of each step
//     var step2_complete = false;
//     var step3_complete = false;
//     var step4_complete = false;
//     var step5_complete = false;
//     var step6_complete = false;
//     var step7_complete = false;
//     var step8_complete = false;
//     var step9_complete = false;
//     var step10_complete = false;
//     var step11_complete = false;
//
//     if (step2_complete === true)  document.getElementById('step3-panel').style.display = 'block';
//     if (step3_complete === true)  document.getElementById('step4-panel').style.display = 'block';
//     if (step4_complete === true)  document.getElementById('step5-panel').style.display = 'block';
//     if (step5_complete === true)  document.getElementById('step6-panel').style.display = 'block';
//     if (step6_complete === true)  document.getElementById('step7-panel').style.display = 'block';
//     if (step7_complete === true)  document.getElementById('step8-panel').style.display = 'block';
//     if (step8_complete === true)  document.getElementById('step9-panel').style.display = 'block';
//     if (step9_complete === true)  document.getElementById('step10-panel').style.display = 'block';
//     if (step10_complete === true)  document.getElementById('step11-panel').style.display = 'block';
//

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

