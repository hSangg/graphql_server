const { books, authors } = require("../data/static");
const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
	Query: {
		books: async (parent, agrs, context) =>
			await context.getAllBook(),
		book: async (parent, args, context) =>
			await context.getBookById(args.id),
		authors: async (parent, agrs, context) =>
			await context.getAllAuthor(),
		author: async (parent, agrs, context) =>
			await context.getAuthorById(agrs.id),
	},

	//MUTATION
	Mutation: {
		create_author: async (parent, agrs) => {
			const newAuthor = new Author(agrs);
			return await newAuthor.save();
		},
		create_book: async (parent, agrs) => {
			const newBook = new Book(agrs);
			return await newBook.save();
		},
		update_book_by_id: async (parent, agrs, context) => {
			return await context.updateBookById(
				agrs.id,
				agrs.description
			);
		},
		delete_author_by_id: async (parent, agrs, context) => {
			return await context.deleteAuthorById(agrs.id);
		},
	},

	Book: {
		author: async (parent, agrs, context) =>
			await context.getAuthorById(parent.authorId),
	},
	Author: {
		books: async (parent, agrs, context) =>
			await context.getBookByAuthorId(parent.id),
	},
};

module.exports = resolvers;
