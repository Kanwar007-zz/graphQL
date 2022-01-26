import React, { Component } from 'react';
import Movie from './Movie';
import {useQuery, gql } from "@apollo/client";


const allMovies = gql`
   {
    movies{
           name
           type
           year
       }
   }
`


class Movies extends Component {
    movies = useQuery(allMovies);
    }
    render() {
        return (
            <div className='movies'>
             {data.map((movie)=>{
                 return <Movie key={movie.id}
                 name={movie.name}
                 type={movie.typeofmoive}
                 year={movie.year}
                 image={movie.image}/>
             })} 
            </div>
        );
    }
}

export default Movies;