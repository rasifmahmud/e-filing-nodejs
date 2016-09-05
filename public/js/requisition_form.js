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

        $("#forward-to-list").html(function () {
            var forward_list = "";
            var forward_list_length = 5;
            var html_text = '';
            for(var i=0;i<forward_list_length;i++){
                html_text += '<option>Alaska</option>';
            }
            return html_text;
        });


    $("#committee-member-list").html(function () {
        var forward_list = "";
        var forward_list_length = 5;
        var html_text = '';
        for(var i=0;i<forward_list_length;i++){
            html_text += '<option><img src="" alt="habi jabi"><div>alubana</div></option>';
        }
        return html_text;
    });





});


//requsition form related functions
function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    //var row = table.insertRow(rowCount);


    $("#example > tbody").append('<tr>'+

        '<td><input type="checkbox"></td>'+
        '<td contenteditable="true"></td>"'+
        '<td contenteditable="true"></td>' +
        '<td contenteditable="true"></td>' +
        '<td contenteditable="true"></td>' +
        '</tr>'
    );

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


