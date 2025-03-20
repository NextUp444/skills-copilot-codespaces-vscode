//create web server
var express = require('express');
var app = express();
app.listen(3000);
console.log('Server running at http://localhost:3000/');

//create a route
app.get('/', function(req, res){
    res.send('Hello, World!');
});

//create a route
app.get('/comments', function(req, res){
    res.send('Comments will go here!');
});

//create a route
app.get('/comments/new', function(req, res){
    res.send('New comments will go here!');
});

//create a route
app.get('/comments/:id', function(req, res){
    res.send('Comments will go here!');
});

//create a route
app.get('/comments/:id/edit', function(req, res){
    res.send('Edit comments will go here!');
});

//create a route
app.get('/comments/:id/delete', function(req, res){
    res.send('Delete comments will go here!');
});