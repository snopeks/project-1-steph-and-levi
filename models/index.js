var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/innovately" );


var User = require('./user')
var Idea = require('./idea')
var Like = require('./like')

module.exports = {
  User: User,
  Idea: Idea,
  Like: Like
}
