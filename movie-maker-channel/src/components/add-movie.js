import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';

//Form to add new movie 
const AddMovie = () => {
    return ( 
        <div className='addMovie' id="addNewMovie">
            <form>
                <input type='text' placeholder='Movie Name' required/>
                <input type='text' placeholder='Movie Name' required/>
                <input type='text' placeholder='Movie Name' required/>

                <button>Add Movie</button>
            </form>

            <div className='top'>
                <Link smooth to='#header' className='top-button'>Back to Top</Link>
            </div>
        </div>
    );
}
 
export default AddMovie;