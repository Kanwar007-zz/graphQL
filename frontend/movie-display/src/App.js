import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Movies from './container/Movies';
const App=()=> {
    return (
        <div>
            <Header></Header>
            <Movies></Movies>
            <Footer></Footer>
        </div>
    );
}

export default App;