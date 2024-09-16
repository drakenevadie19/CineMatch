import React from 'react'; 

import { HashLink as Link } from 'react-router-hash-link';

const addMovie = () => {
    console.log('Hello');
}

const HeaderComponent = () => {
    return ( 
        <div className='topnav' id="header">
            <a href='/#'>Movie Channel</a>
            <Link smooth to='#addNewMovie' className='add-button' onClick={addMovie}>Add Movie</Link>
        </div>
    );
}

export default HeaderComponent;