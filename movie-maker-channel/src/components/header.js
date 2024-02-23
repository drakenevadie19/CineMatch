import React from 'react'; 

import { HashLink as Link } from 'react-router-hash-link';

const addMovie = () => {
    console.log('Hello');
}

const HeaderComponent = () => {
    return ( 
        <div className='topnav'>
            <a href='/#'>Movie Maker</a>
            <Link smooth to='/#' className='add-button' onClick={addMovie}>Add Movie</Link>
        </div>
     );
}
 
export default HeaderComponent;