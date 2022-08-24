const Book = require("../models/Book");
const Author = require("../models/Author");

const mongoDataMethods = {
	getAllBook: async () => await Book.find(),
	getAllAuthor: async () => await Author.find(),
	getBookById: async (id) => await Book.findById(id),
	getAuthorById: async (id) => Author.findById(id),
	getBookByAuthorId: async (authorId) =>
		await Book.find({ authorId }).exec(),
	updateBookById: async (id, description) => {
		return await Book.findByIdAndUpdate(
			{ _id: id },
			{ description: description },
			{ new: true }
		);
	},
	deleteAuthorById: async (id) => {
		return await Author.findByIdAndDelete(
			{ _id: id },
			{ new: true }
		);
	},
};

module.exports = mongoDataMethods;
