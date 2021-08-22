import reddit from "./redditapi.js";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", (event) => {
  // get search input value
  const searchTerm = searchInput.value;
  console.log(searchTerm);
  //get sort input value
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  console.log(sortBy);
  // get limit
  const searchLimit = document.getElementById("limit").value;
  console.log(searchLimit);

  // check input
  if (searchTerm === "") {
    // show message
    showMessage("Please add a search term", "alert-danger");
  }

  // clear input
  searchInput.value = "";

  // search reddit
  reddit.search(searchTerm, sortBy, searchLimit).then((results) => {
    let output = `<div class="card-columns">`;

    // loop through posts
    results.forEach((post) => {
      let image = post.preview
        ? post.preview.images[0].source.url
        : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
      output += `
        <div class="card">
          <img class="card-img-top" src="${image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.author}</p>
            <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
            <hr>
            <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
            <span class="badge badge-dark">Score: ${post.score}</span>
          </div>
        </div>

      
      `;
    });

    output += "</div>";
    document.getElementById("results").innerHTML = output;
  });

  event.preventDefault();
});

// Show Message Function
function showMessage(message, className) {
  // Create div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const searchContainer = document.getElementById("search-container");
  // Get form
  const search = document.getElementById("search");

  // Insert alert
  searchContainer.insertBefore(div, search);

  // Timeout after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
}
