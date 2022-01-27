

import React from 'react';
import { useMutation, gql } from "@apollo/client";


const addNovieValue = gql`
 
  mutation addMovie($name:String!,$type:String!,$year:String!){
   
    addMovie(name:$name,type:$type,year:$year){
        name
        type
        year
    }
  }
`;


function AddMovie(){
    let name,year,typeValue
    const [add_Movie, { data, loading, error }] = useMutation(addNovieValue);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    return (
        <div className='addMovie'>
         <form onSubmit={e => {
          e.preventDefault();
          add_Movie({ variables: { name: name.value , type: typeValue.value, year: year.value} });
          name.value = '';
          typeValue.value='';
          year.value='';

        }}>
          <label>name</label>
          <input type='text' ref={node => {
            name = node;
          }} name='name'></input>
          <label>typeOfMoive</label>
          <input type='text'  ref={node => {
            typeValue = node;
          }}
          typeValue='type'></input>
          <label>Year</label>
          <input type='text' 
          ref={node => {
            year = node;
          }}year='year'></input>
          <button type='subtmit'> Add Movie</button>
      </form>
        </div>
    );
}

export default AddMovie;