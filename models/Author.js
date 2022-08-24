const { Schema, default: mongoose } = require("mongoose");

const authorSchema = new Schema({
	name: {
		type: String,
	},
});

module.exports = mongoose.model("authors", authorSchema);
