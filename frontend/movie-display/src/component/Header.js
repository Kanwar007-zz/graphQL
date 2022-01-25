import React from 'react';

const Header=()=> {
    return (
        <div className='topnav'>
                <a className='log' href='/'> Movie Display</a>
            <div className='search-container'>
                <form href='/'>
                    <input type='text' placeholder='search movie ' name='search'/>
                   <button type='submit'> <i className="fa fa-search"></i></button>
                </form>
            </div> 
            </div>

    );
}

export default Header;