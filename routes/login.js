/**
 * Created by abc on 10/14/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../server/models/user');
router.post('/submit',function (req , res , next) {

    console.log('in login function');
    var username = req.body.username;
    var password = req.body.password;

    User.find ({username: username , password:password},function (err,user) {
        if(err)
        {
            console.log(err);
            return res.status(500).send();
        }
        if(!user)
        {
            console.log('user not found');
            return res.status(404).send();
        }
        return res.status(200).send();
    });


});
module.exports = router;