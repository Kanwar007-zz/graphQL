

import React from 'react';

const AddMovie=() =>{
    return (
        <div className='addMovie'>
      <form onSubmit={()=>alert('add movie')}>
          <label>name</label>
          <input type='text' name='name'></input>
          <label>typeOfMoive</label>
          <input type='text' name='name'></input>
          <label>Year</label>
          <input type='text' name='name'></input>
          <button type='subtmit'> Add Movie</button>
      </form>
        </div>
    );
}

export default AddMovie;