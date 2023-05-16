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
      const GIF = result.data.data[0].images.fixed_height;
      $(`#search-input`).val(``);
      console.log(GIF.mp4);

      $('#image-container').append(
        `<div class="col col-lg-2 m-2 gif"> <img src=${GIF.url} class="rounded"> </div>`
      );
      return;
    }
    getGIF();
  });

  $(`#remove-all`).on(`click`, (e) => {
    e.preventDefault();

    $(`.gif`).remove(); 

  })
});
