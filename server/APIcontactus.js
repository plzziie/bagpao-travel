"use strict";

var express = require('express');
var app = express();
let mongo = require('mongodb').MongoClient;
let connection = 'mongodb://localhost:27017/bagpaotravel';


app.get('/:id', (req, res) => {

	if(req.params.id === "" && req.params.id === 0)
	{
		res.send('please input data!!');
	}
	else
	{
		mongo.connect(connection, (error, database) => {
		database
		.collection('contactus')
		.insert({ no:`${no}`,
			firstname:`${firstname}`,
			lastname:`${lastname}`,
			subject:`${subject}`,
			email:`${email}` ,
			message :`${message}`});
   		 });

		res.send('success !!');
	}
});


app.listen(1200);


