const Movie = require('../model/Model')



const resolvers ={
    movies:()=>{
     return  Movie.find({})
 },
 addMovie:(args)=>{
     return{
         name:args.name,
         type:args.type,
         year:args.year

     }
 }

}
module.exports = resolvers;