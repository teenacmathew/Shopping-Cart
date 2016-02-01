var server   = require('express')();
var http = require('http').Server(server);
var bodyParser = require("body-parser");
var mongo = require('mongoskin');
var routes = require('./routes/');
var db = mongo.db("mongodb://localhost:27017/items", {native_parser:true});
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(function(req,res,next){
  console.log("server");

  req.db = db;
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

http.listen(8080,function(){
  console.log("Connected & Listen to port 8080");
});

routes(server);


