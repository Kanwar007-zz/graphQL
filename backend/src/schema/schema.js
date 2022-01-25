const { buildSchema } = require('graphql');

const movieSchema = buildSchema(`
  type Query 
  {
      movies:String
  }
  type Movie
  {
      name:String,
      type:String,
      year:String
  }
`)
module.exports = movieSchema;