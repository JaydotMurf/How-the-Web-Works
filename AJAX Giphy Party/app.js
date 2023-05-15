console.log("Let's get this party started!");

$(document).ready(function() {
    $('#search-form').submit(function(event) {
      event.preventDefault(); // Prevent form submission

      var searchTerm = $('#search-input').val();

      // Make AJAX request to Giphy API
      $.ajax({
        url: 'https://api.giphy.com/v1/gifs/random',
        type: 'GET',
        dataType: 'json',
        data: {
          api_key: 'YOUR_API_KEY', // Replace with your Giphy API key
          tag: searchTerm,
          rating: 'pg-13' // You can change the rating if desired
        },
        success: function(response) {
          var gifUrl = response.data.image_url;

          // Display the GIF
          $('#gif-container').html('<img src="' + gifUrl + '" alt="GIF">');
        },
        error: function() {
          $('#gif-container').html('<p>Failed to load GIF.</p>');
        }
      });
    });
  });