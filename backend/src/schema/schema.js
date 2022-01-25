const { buildSchema } = require('graphql');

const movieSchema = buildSchema(`
  type Query 
  {
      movies:[Movie]
  }

  type Mutation 
  {
    addMovie(name:String!,type:String!,year:String!):Movie
   }
  type Movie
  {
      name:String,
      type:String,
      year:String
  }
`)
module.exports = movieSchema;