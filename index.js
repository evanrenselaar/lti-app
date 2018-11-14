// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// routes will go here
// routes will go here
app.get('/api/users', function(req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');  
  
    res.send(user_id + ' ' + token + ' ' + geo);
  });

  // POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    var lti_message_type = req.body.lti_message_type;
    res.send (lti_message_type);
});
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);