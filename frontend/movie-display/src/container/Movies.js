import React, { Component } from 'react';
import movie from './Movie';
import Movie from './Movie';

class Movies extends Component {
    state={
        movies:[
            {
          id:'1',  name:'vijay', typeofmoive:'action',year:'1987',image:'https://rb.gy/mwzdxh'
           },
           {
            id:'2',  name:'vijay', typeofmoive:'action',year:'1987',image:'https://rb.gy/mwzdxh'
             },
             {
                id:'3',  name:'vijay', typeofmoive:'action',year:'1987',image:'https://rb.gy/mwzdxh'
                 },
                 {
                    id:'4',  name:'vijay', typeofmoive:'action',year:'1987',image:'https://rb.gy/mwzdxh'
                     },
                     {
                        id:'5',  name:'vijay', typeofmoive:'action',year:'1987',image:'https://rb.gy/mwzdxh'
                         },
    ]
    }
    render() {
        return (
            <div className='movies'>
             {this.state.movies.map((movie)=>{
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