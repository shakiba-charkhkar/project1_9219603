var express = require('express');
var router = express.Router();
var fs = require('fs');
var User = require('../server/models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.readFile('./form.html',null, function (error , data) {
    if(error)
    {
      res.write('File Not Found');
    }
    else
    {
      res.write(data);
    }
    res.end();

  })
});


module.exports = router;
