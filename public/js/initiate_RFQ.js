/**
 * Created by shadman264 on 9/24/16.
 */


$(document).ready(function () {
    document.getElementById("select2-forward-to-list-container").style.marginTop = "-7px";
});

function auto_complete_total(tableID){
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var quantity = row.cells[2].childNodes[0].innerHTML;
        var unit = row.cells[3].childNodes[0].innerHTML;

        console.log(quantity);
        console.log(unit);




    }

}