'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client('3DBbiFi8MwR7IcfA6gz76KEjTewdNMkyCG_7-jmu6aaNqYvOlhAeo0b-4ohwkQlWd1jVAYH6PMPLBv1i9MEoHLUJoMvp-OFeOMwwqSO4wcV067WqGbXajuOMmrgoYHYx');
 
client.search({
  term: 'Italian',
  location: 'Houston, tx',
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
  console.log(response.jsonBody.businesses[1].name);
  console.log(response.jsonBody.businesses[2].name);
  console.log(response.jsonBody.businesses[3].name);
  console.log(response.jsonBody.businesses[4].name);
}).catch(e => {
  console.log(e);
});
var draw = function(){
  drawSearch()
  
};
function getInput() {
  var userInput = document.getElementById('userInput').value;
}  

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', userInput, false);