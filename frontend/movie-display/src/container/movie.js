import React from 'react';

const movie=(props)=> {
    return (
        <div className='card'>
            <div className='container'>
           <img src={props.image} width='250' height='200'></img>
          <h2>{props.name}</h2>
          <h4>{props.type} ...... {props.year}</h4>
          
            </div>
            
        </div>
    );
}

export default movie;