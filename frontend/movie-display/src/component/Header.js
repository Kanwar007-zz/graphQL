import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='topnav'>
                <a className='log' href='/'> Movie Display</a>
            <div className='search-container'>
                <form href='/'>
                    <input type='text' placeholder='search movie ' name='search'/>
                   <button type='submit'> Search</button>
                </form>
            </div> 
            </div>
        );
    }
}

export default Header;