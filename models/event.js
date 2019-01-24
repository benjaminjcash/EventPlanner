const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
	title: String,
	creator: String,
	description: String,
	date: Date,
	imgUrl: String
});

let Event = mongoose.model('Event', eventSchema);

module.exports = Event;