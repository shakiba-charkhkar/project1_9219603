/**
 * Created by abc on 10/14/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../server/models/user');

router.post('/submit',function (req , res , next) {

    console.log('in register function');

   var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var confirm = req.body.confirm-password;

    var newuser = new User();

    newuser.username= username;
    newuser.email= email;
    newuser.password= password;

    newuser.save(function ( err, saveduser) {
       if(err)
       {
           console.log(err);
           return res.status(500).send();
       }
        console.log('data inserted');
        return res.status(200).send();
    });

});
module.exports = router;