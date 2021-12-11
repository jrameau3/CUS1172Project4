var express = require("express");
var app = express();

var api_routes = require('./api_routes_dev.js');
app.use('/api', api_routes);
app.use(express.static('demo'));

app.get('/', (req, res) => {
  res.render("index_dev.html");
})
//Start the server.

app.listen(3000, function() {
  console.log("Server is running")
  
})
