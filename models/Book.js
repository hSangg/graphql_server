const { Schema, default: mongoose } = require("mongoose");

const bookSchema = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	authorId: {
		type: String,
	},
});

module.exports = mongoose.model("books", bookSchema);
