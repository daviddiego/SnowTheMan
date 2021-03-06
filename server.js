//Following this example:
// https://www.opencodez.com/java-script/static-website-with-node-js-webserver.htm
var express = require("express");
 
var app = express();
 
app.use(express.static(__dirname + '/preview'));
 
//make way for some custom css, js and images
/*
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
 */
var server = app.listen(8080, function(){
    //var port = server.address().port;
    console.log("Server started...");
});