export default {
    search: function(searchTerm, searchLimit, sortBy) {

        fetch(`http://www.reddit.com/search.json?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => console.log(data));
    
      }
    
}