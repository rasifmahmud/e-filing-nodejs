$(document).ready(function () {

    "use strict";

    // $("#main-content").html("<h1> thtihththtgthtihtihtthgth </h1>");
    var myDate = new Date().toString().slice(0, 21);
    document.getElementById("date").innerHTML = myDate;

    var i = 2;
    $("#forward-btn").click(function () {
        $("#step" + i + "-panel").show("slow");
        i++;
    });
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


    // step 1  er jonno necessary data start
    var rfq_heading = "";
    $("td").contentEditable = true;
    $("td").textWrap = true;
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


//requsition form related functions
function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name = "chkbox[]";
    cell1.style.height = "100px";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.style.textAlign = "center";
    cell2.innerHTML = rowCount - 1;
    cell2.style.height = "100px";

    var cell3 = row.insertCell(2);
    var element2 = document.createElement("textarea");
    element2.type = "text";
    element2.name = "txtbox[]";
    element2.style.textAlign = "left";
    element2.style.width = "100%";
    element2.style.height = "100%";
    element2.style.border = "none";

    cell3.style.height = "100px";
    cell3.contentEditable = true;
    //cell3.appendChild(element2);

    var cell4 = row.insertCell(3);
    var element3 = document.createElement("textarea");
    element3.type = "text";
    element3.name = "txtbox[]";
    element3.style.textAlign = "center";
    element3.style.width = "100%";
    element3.style.height = "100%";
    element3.style.border = "none";

    cell4.style.height = "100px";
    cell4.contentEditable = true;
    //cell4.appendChild(element3);

    var cell5 = row.insertCell(4);
    var element4 = document.createElement("textarea");
    element4.type = "text";
    element4.name = "txtbox[]";
    element4.style.textAlign = "center";
    element4.style.width = "100%";
    element4.style.height = "100%";
    element4.style.border = "none";

    cell5.style.height = "100px";
    cell5.contentEditable = true;
    //cell5.appendChild(element4);

    var cell6 = row.insertCell(5);
    var element5 = document.createElement("textarea");
    element5.type = "text";
    element5.name = "txtbox[]";
    element5.style.textAlign = "center";
    element5.style.width = "100%";
    element5.style.height = "100%";
    element5.style.border = "none";

    cell6.style.height = "100px";
    cell6.contentEditable = true;
    //cell6.appendChild(element5);

    var cell7 = row.insertCell(6);
    var element6 = document.createElement("textarea");
    element6.type = "text";
    element6.name = "txtbox[]";
    element6.style.textAlign = "center";
    element6.style.width = "100%";
    element6.style.height = "100%";
    element6.style.border = "none";

    cell7.style.height = "100px";
    cell7.contentEditable = true;
    //cell7.appendChild(element6);

    var cell8 = row.insertCell(7);
    var element7 = document.createElement("textarea");
    element7.type = "text";
    element7.name = "txtbox[]";
    element7.style.textAlign = "center";
    element7.style.width = "100%";
    element7.style.height = "100%";
    element7.style.border = "none";

    cell8.style.height = "100px";
    cell8.contentEditable = true;
    //cell8.appendChild(element7);

    var cell9 = row.insertCell(8);
    var element8 = document.createElement("textarea");
    element8.type = "text";
    element8.name = "txtbox[]";
    element8.style.textAlign = "center";
    element8.style.width = "100%";
    element8.style.height = "100%";
    element8.style.border = "none";

    cell9.style.height = "100px";
    cell9.contentEditable = true;
    //cell9.appendChild(element8);


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

        for (var i = 2; i < rowCount; i++) {
            table.rows[i].cells[1].innerHTML = i - 1;

        }

    } catch (e) {
        alert(e);
    }
}
