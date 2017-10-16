var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var IdeaSchema = new Schema({
  title: String,
  description: String
})

var Idea = mongoose.model('Idea', IdeaSchema)
module.exports = Idea;