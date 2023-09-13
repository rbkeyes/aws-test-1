// set var idx to hour of day
var idx = Math.floor(new Date().getHours());
// get body element from document
var body = document.getElementsByTagName("body")[0];
// set className of body based on hour of day 
body.className = "heaven-" + idx;
