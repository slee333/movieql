import { people, getById } from "./db";

/*
* In resolvers, you create functions that resolves operation
And you can have any array of DBs.
? But isn't GraphQL a database? So you need to have a physical file of DB to load? Hmm!
*/

const resolvers = {
  // people return people as an array
  Query: {
    people: () => people,
    person: (_obj_, { id }) => getById(id)
  }
};

export default resolvers;
