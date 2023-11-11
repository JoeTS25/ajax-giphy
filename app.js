const $gifPlace = $('#gifPlace');
const $search = $('#search');


function newGif(res) {
  let numResults = res.data.length;  
  if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
          src: res.data[randomIdx].images.original.url,
          class: "w-100"
        });
        $newCol.append($newGif);
        $gifPlace.append($newCol);
      }
    
  }


$("form").on("submit", async function(evt) {
    evt.preventDefault();
  
    let searchTerm = $search.val();
    $search.val("");
  
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });
    newGif(response.data);
  });

  $("#remove").on("click", function() {
    $gifPlace.empty();
  });




