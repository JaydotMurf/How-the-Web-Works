console.log("Let's get this party started!");

$(document).ready(function() {
    $('#search-form').submit(function(event) {
      event.preventDefault(); // Prevent form submission

      var searchTerm = $('#search-input').val();
      console.log(searchTerm);
    });
  });