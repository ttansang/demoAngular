var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// su dung 
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Cross domain ?????
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

//de lam sercurity
app.use('/api', require('./api/index'));

app.listen(3000, 'localhost');