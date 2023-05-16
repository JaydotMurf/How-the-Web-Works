$(document).ready(function () {
  console.log("Let's get this party started!");

  $(`#search-form`).on('submit', (e) => {
    e.preventDefault();

    const KEY = `DtY6Xwh7tRXaqDLWgk513pPmjmoBYRuP`;
    let searchQuery = $(`#search-input`).val();
    const amountOfGIFS = 1;

    async function getGIF() {
      let result = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
        params: { key: KEY, q: searchQuery, limit: amountOfGIFS },
      });
      const loopingGIF = result.data.data[0].images.fixed_height;
      $(`#search-input`).val(``);
      console.log(loopingGIF.mp4);

      $('#image-container').append(
        `<div class="col gif mb-2 offset-md-2"> <img src=${loopingGIF.url} class="rounded"> </div>`
      );
      return;
    }

    getGIF();
  });
});
