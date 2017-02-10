"use strict";

var express = require('express');
var app = express();
let mongo = require('mongodb').MongoClient;
let connection = 'mongodb://localhost:27017/bagpaotravel';
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/', (req, res) => {

	if(req.body.no === "" || req.body.no === "0")
	{
		res.send('please input data!!');
	}
	else
	{
		console.log(req.body.id);
		mongo.connect(connection, (error, database) => {
		database
		.collection('contactus')
		.insert({ 
			no:`${req.body.no}`,
			name:`${req.body.name}`,
			subject:`${req.body.subject}`,
			email:`${req.body.email}` ,
			message :`${req.body.message}` 
			});
   		 }); 

		res.send('success !!');
	}
});


app.listen(1200);


