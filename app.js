
const api_key= "Jv1o4tKXEW1Vys7x7MnjXbDOn7XAnble"
const $gifDiv = $("#gif-div");
const $searchInput = $("#input");



$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchWord = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchWord,
      api_key: api_key
    }
  });
  addGif(response.data);
});

function addGif(res) {
  let numRes = res.data.length;
  if (numRes) {
    let randomIdx = Math.floor(Math.random() * numRes);
    let $newDiv = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newImg = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newDiv.append($newImg);
    $gifDiv.append($newDiv);
  }
}



$("#remove").on("click", function() {
  $gifDiv.empty();
});
