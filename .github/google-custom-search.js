'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client('3DBbiFi8MwR7IcfA6gz76KEjTewdNMkyCG_7-jmu6aaNqYvOlhAeo0b-4ohwkQlWd1jVAYH6PMPLBv1i9MEoHLUJoMvp-OFeOMwwqSO4wcV067WqGbXajuOMmrgoYHYx');
 
client.search({
  term: 'Italian',
  location: 'Houston, tx',
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});