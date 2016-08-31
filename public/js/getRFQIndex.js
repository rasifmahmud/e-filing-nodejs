/**
 * Created by razon on 8/31/16.
 */
$( "#rfq-more-info" ).click(function() {
    var required_data;
    var id = 5;
    $.ajax({
        type: "GET",
        url: "/api/rfq_list/"+id+"/"
    }).done(function (data) {
        required_data = data;
    });


});
