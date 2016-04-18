var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 8080));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var server = app.listen(app.get('port'), function () {
  console.log('App running');
});
