$.holdReady(true);
$.ajax({
    type: "GET",
    url: "/api/data",
}).done(function (data) {
    special_data = data;
    $.holdReady(false);
});

