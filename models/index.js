var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/innovately");

var User = require('./user')
var Idea = require('./idea')

module.exports = {
  User: User,
  Idea: Idea
}