console.log("Let's get this party started!");

$(document).ready(function() {
    $('#search-form').submit(function(event) {
      event.preventDefault();

      let searchTerm = $('#search-input').val();
      console.log(searchTerm);
    });
  });