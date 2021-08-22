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

  event.preventDefault();
});
