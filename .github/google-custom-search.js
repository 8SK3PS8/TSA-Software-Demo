
var SerpWow = require('google-search-results-serpwow')

// create the serpwow object, passing in our API key
let serpwow = new SerpWow('BC275EC4A95A4E7AACE7207C84F88307')

// set up the location query parameters
var params = {
  q: 'london'
}

// retrieve the location query results as JSON
serpwow.locations(params)
  .then(result => {
    // pretty-print the JSON result
    console.log(JSON.stringify(result, 0, 2));
  })
  .catch(error => {
    console.log(error);
  });