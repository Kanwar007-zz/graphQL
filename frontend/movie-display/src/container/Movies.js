import React from 'react';
import Movie from './Movie';
import { useQuery, gql } from "@apollo/client";


const allMovies = gql`
   {
    movies{
           name
           type
           year
       }
   }
`

function Movies() {
    const { loading, error, data } = useQuery(allMovies);
  
    if (loading) return null;
    if (error) return `Error! ${error}`;
  
    return (
     
      <div className='movies'>
                {data.movies.map((movie)=>{
                    return <Movie key={movie.id}
                    name={movie.name}
                    type={movie.typeofmoive}
                    year={movie.year}
                    image={movie.image}/>
                })} 
               </div>
    );
  }
  export default Movies;