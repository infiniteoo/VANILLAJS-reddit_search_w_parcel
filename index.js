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
  reddit.search(searchTerm, sortBy, searchLimit);

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
