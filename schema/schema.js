const { gql } = require("apollo-server-express");
const typeDefs = gql`
	type Book {
		id: ID!
		name: String
		description: String
		author: Author
	}
	type Author {
		id: ID!
		name: String
		books: [Book]
	}

	# ROOT TYPEs
	type Query {
		books: [Book]
		book(id: ID!): Book
		authors: [Author]
		author(id: ID!): Author
	}

	type Mutation {
		create_author(name: String): Author
		create_book(name: String, authorId: ID): Book
		update_book_by_id(id: String!, description: String!): Book
		delete_author_by_id(id: String!): Author
	}
`;

module.exports = typeDefs;
