const express = require("express");
const { ApolloServer } = require("apollo-server-express");

//load schema & resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const { mongoose } = require("mongoose");

const app = express();

(async () => {
	//connect to mongoDB
	try {
		await mongoose.connect(
			"mongodb+srv://sang:EtWdczz2EgdEufdK@graphql.k4pvpan.mongodb.net/?retryWrites=true&w=majority"
		);

		console.log("mongoDB connected");
	} catch (error) {
		console.log(error);
		process.exit();
	}

	//load db_methods
	const mongoDataMethods = require("./data/db");

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: () => mongoDataMethods,
	});
	await server.start();
	server.applyMiddleware({ app });

	const PORT = process.env.PORT || 4000;

	app.listen({ port: PORT }, () => {
		console.log("server already at http://locahost:4000");
	});
})();
