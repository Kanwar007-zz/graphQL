import React, { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {
    state={
        movies:[
            {
          id:'1',  name:'vijay', typeofmoive:'action',year:'1987'
           },
           {
            id:'2',  name:'vijay', typeofmoive:'action',year:'1987'
             },
             {
                id:'3',  name:'vijay', typeofmoive:'action',year:'1987'
                 },
                 {
                    id:'4',  name:'vijay', typeofmoive:'action',year:'1987'
                     },
                     {
                        id:'5',  name:'vijay', typeofmoive:'action',year:'1987'
                         },
    ]
    }
    render() {
        return (
            <div>
              {
                  this.state.Movies.map((Movie) = {
                      return <Movie key={Movie.id},
                          name= {Movie.name},
                          type={Movie.typeofmoive},
                          year={Movie.year}
                      />
                  })
              }  
            </div>
        );
    }
}

export default Movies;