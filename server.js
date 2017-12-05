var express = require('express');
var app = express();
var pouchDB = require('pouchdb');
var bodyParser = require('body-parser');
var error = Error('error');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));





app.listen(3000, function(error){
   if (!error) {
       console.log("Server is running on port 3000.");
   } else {
       console.log("Error. Something went wrong.")
   } 
});