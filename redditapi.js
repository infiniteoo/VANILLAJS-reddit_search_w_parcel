export default {
  search: function (searchTerm, sortBy, searchLimit) {
    console.log("searchLimit", searchLimit);
    return fetch(
      `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
    )
      .then((response) => response.json())
      .then((data) => data.data.children.map((data) => data.data))
      .catch((err) => console.log(err));
  },
};
