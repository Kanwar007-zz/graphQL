const Movie = require('../model/Model')



const resolvers ={
    movies:()=>{
     return  Movie.find({})
 },
 addMovie:(args)=>{
     let movie = new Movie(
        {
            name:args.name,
            type:args.type,
            year:args.year
   
        }
     )
     movie.save();
     return movie;
 }

}
module.exports = resolvers;