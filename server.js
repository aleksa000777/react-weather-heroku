var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

app.set('port', (process.env.PORT || 8080));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// app.get('/weather',function(req,res){
//   console.log("here");
//   city = req.query.city;
//   request('http://api.openweathermap.org/data/2.5/weather?q='+city+"&APPID=d0b723cbc19d59057399ef8030b6ae01", function(err,response){
//     console.log(response.body);
//     res.json(response.body)
//   })
// })
var server = app.listen(app.get('port'), function () {
  console.log('App running');
});
