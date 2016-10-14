/**
 * Created by abc on 10/13/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: { type:String, unique:true},
    username: { type:String, unique:true},
    password: String
});
var User = mongoose.model('myUser', UserSchema);
module.exports = User;