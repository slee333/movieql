import { getMovies } from "./db";

/*
* In resolvers, you create functions that resolves operation
And you can have any array of DBs.
* The point is you can hook up any kind of backend you'd like. And 쪼물쪼물 
클라이언트-GraphQL 간 comm이 있고 GraphQL - API (ex. REST API) 간의 통신이 있다.
*/

const resolvers = {
  // people return people as an array
  Query: {
    movies: (_, {rating,limit}) => getMovies(limit,rating),
  },
};

export default resolvers;
