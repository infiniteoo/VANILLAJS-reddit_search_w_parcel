export default {
  search: function (searchTerm, sortBy, searchLimit) {
    console.log("searchLimit", searchLimit);
    fetch(
      `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data.data.children));
  },
};
