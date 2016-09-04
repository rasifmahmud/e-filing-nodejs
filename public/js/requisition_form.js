$(document).ready(function () {

    "use strict";

    // $("#main-content").html("<h1> thtihththtgthtihtihtthgth </h1>");
    var myDate = new Date().toString().slice(0, 21);
    document.getElementById("date").innerHTML = myDate;

    var table = document.getElementById("#example");

    var rowCount = 1 ;

    $("#example > tbody").append('<tr>'+

        '<td><input type="checkbox"></td>'+
        '<td contenteditable="true"></td>"'+
        '<td contenteditable="true"></td>' +
        '<td contenteditable="true"></td>' +
        '<td contenteditable="true"></td>' +

        '</tr>');

    var i = 2;
    $("#forward-btn").click(function () {
        $("#step" + i + "-panel").show("slow");
        i++;
    });
});


//requsition form related functions
function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    //var row = table.insertRow(rowCount);


    $("#example > tbody").append('<tr>'+

        '<td><input type="checkbox"></td>'+
        '<td contenteditable="true">a</td>"'+
        '<td contenteditable="true">b</td>' +
        '<td contenteditable="true">c</td>' +
        '<td contenteditable="true">d</td>' +

        '</tr>');

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
