// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var draw = function(){
    drawSearch()
    
  };
  function getInput() {
    window.foodType = document.getElementById('foodType').value;
    window.addy = document.getElementById('addy').value;
    console.log(foodType);
    console.log(addy);
  }  
  
  var subButton = document.getElementById('subButton');
  subButton.addEventListener('click', getInput, false);


  'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client('3DBbiFi8MwR7IcfA6gz76KEjTewdNMkyCG_7-jmu6aaNqYvOlhAeo0b-4ohwkQlWd1jVAYH6PMPLBv1i9MEoHLUJoMvp-OFeOMwwqSO4wcV067WqGbXajuOMmrgoYHYx');
 
client.search({
  term: foodType,
  location: addy,
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
  //drawSearch()
  
};