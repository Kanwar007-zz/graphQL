import React from 'react';
import AddMovie from '../container/AddMovie';

const Footer=() => {
    return (
        <div className='footer'>
            <AddMovie></AddMovie>
          <p> Copy right movie display {new Date().getFullYear} </p>

        </div>
    );
}

export default Footer;