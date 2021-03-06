'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuggestionSchema = new Schema({
  title: String,
  description: String,
  creatorEmail: String,
  firstname: String,
  lastname: String,
  voteCount: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  voting: Array
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);
