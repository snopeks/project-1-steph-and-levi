$(document).ready(function() {
  console.log('app.js loaded!');


  $.ajax({
      method: 'GET',
      url: '/api/ideas',
      success: onSuccess,
      error: onError
    });

    function onSuccess(json) {
      $('#fun-facts').append(json);
      console.log(json);
    }

    function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
}


});
