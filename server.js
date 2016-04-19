var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

app.set('port', (process.env.PORT || 8080));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post('/requestData', function(req, res){
  request('http://api.openweathermap.org/data/2.5/weather?q='+'Miami'+'&APPID=d501a0f99eabcb1ce51db5dd35edd822', function(err,response){
    res.json(response.body)
  }
});

var server = app.listen(app.get('port'), function () {
  console.log('App running');
});
