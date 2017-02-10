var express = require('express');

var app = express();

app.use(express.static('dist'));

app.listen(4000, function () {
  console.log('Express server is up on port 4000');
});
