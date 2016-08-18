$(document).ready(function() {

    // submit data for step1 modal
    $("#step1-get-data-form").submit(function(e) {
        var content = tinymce.get("step1-texteditor").getContent();

        $("#step1-data-container").html(content);

        $('#step1-modal').modal('toggle');

        return false;

    });

    // submit data for step2 modal
    $("#step2-get-data-form").submit(function(e) {
        var content = tinymce.get("step2-texteditor").getContent();

        $("#step2-data-container").html(content);

        $('#step2-modal').modal('toggle');

        return false;

    });

    // submit data for step3 modal
    $("#step3-get-data-form").submit(function(e) {
        var content = tinymce.get("step3-texteditor").getContent();

        $("#step3-data-container").html(content);

        $('#step3-modal').modal('toggle');

        return false;

    });

    // submit data for step4 modal
    $("#step4-get-data-form").submit(function(e) {
        var content = tinymce.get("step4-texteditor").getContent();

        $("#step4-data-container").html(content);

        $('#step4-modal').modal('toggle');

        return false;

    });

    // submit data for step5 modal
    $("#step5-get-data-form").submit(function(e) {
        var content = tinymce.get("step5-texteditor").getContent();

        $("#step5-data-container").html(content);

        $('#step5-modal').modal('toggle');

        return false;

    });


    // submit data for step6 modal
    $("#step6-get-data-form").submit(function(e) {
        var content = tinymce.get("step6-texteditor").getContent();

        $("#step6-data-container").html(content);

        $('#step6-modal').modal('toggle');

        return false;

    });


    // submit data for step7 modal
    $("#step7-get-data-form").submit(function(e) {
        var content = tinymce.get("step7-texteditor").getContent();

        $("#step7-data-container").html(content);

        $('#step7-modal').modal('toggle');

        return false;

    });


    // submit data for step8 modal
    $("#step8-get-data-form").submit(function(e) {
        var content = tinymce.get("step8-texteditor").getContent();

        $("#step8-data-container").html(content);

        $('#step8-modal').modal('toggle');

        return false;

    });


    // submit data for step9 modal
    $("#step9-get-data-form").submit(function(e) {
        var content = tinymce.get("step9-texteditor").getContent();

        $("#step9-data-container").html(content);

        $('#step9-modal').modal('toggle');

        return false;

    });


    // submit data for step10 modal
    $("#step10-get-data-form").submit(function(e) {
        var content = tinymce.get("step10-texteditor").getContent();

        $("#step10-data-container").html(content);

        $('#step10-modal').modal('toggle');

        return false;

    });


    // submit data for step11 modal

    $("#step11-get-data-form").submit(function(e) {
        var content = tinymce.get("step11-texteditor").getContent();

        $("#step11-data-container").html(content);

        $('#step11-modal').modal('toggle');

        return false;

    });


});