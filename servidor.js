var frameworks = require('express');
var aplication = frameworks();

aplication.use(frameworks.static("public"));

aplication.get('/', function(req, res) {
  res.sendfile("public/index.html");
});



aplication.listen(24);