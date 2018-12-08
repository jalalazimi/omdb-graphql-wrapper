"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _fs=require("fs");var _path=require("path");var _express=_interopRequireDefault(require("express"));var _apolloServerExpress=require("apollo-server-express");var _compression=_interopRequireDefault(require("compression"));var _api=_interopRequireDefault(require("./api"));var resolvers={Query:{ByTitle:function ByTitle(root,_ref){var title=_ref.title;return(0,_api.default)(title,"&t=").then(function(payload){return payload})},ByID:function ByID(root,_ref2){var id=_ref2.id;return(0,_api.default)(id,"&i=").then(function(payload){return payload})}}};// Configure Apollo GraphQL Server
var server=new _apolloServerExpress.ApolloServer({typeDefs:(0,_apolloServerExpress.gql)((0,_fs.readFileSync)((0,_path.join)(__dirname,"./schema.graphql")).toString()),resolvers:resolvers,playground:true});var app=(0,_express.default)();// Use compression
app.use((0,_compression.default)());// Setup middleware & the GraphQL endpoint
server.applyMiddleware({app:app,path:"/"});// Port
var port=2121;// Start a server
app.listen({port:port},function(){return console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(port).concat(server.graphqlPath))});