// $(function () {
//     $("#upload").click(function () {
//         var content = tinymce.get("texteditor").getContent();
//         var text = $(content).text();
//         $.ajax({
//             type: "POST",
//             url: "/",
//             data: JSON.stringify({text: text}),
//             contentType : "application/json"
//
//         }).done(function (data) {
//
//             $('#data-container').html('<p> Congratulations '+data.user.name +'."'+data.text.text +'" has been successfully uploaded.</p>');
//         });
//
//     });
//
//
//
//
// });