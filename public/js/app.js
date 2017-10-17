$(document).ready(function() {
    console.log('app.js loaded!');


    $.ajax({
        method: 'GET',
        url: '/api/ideas',
        success: onSuccess,
        error: onError
    });

    function onSuccess(json) {
        console.log(json);
        for (i = 0; i < json.length; i++) {
            $("#idea").append(`<p>${json[i].title}</p>`);
        }
    }

    function onError(xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
    }
});
