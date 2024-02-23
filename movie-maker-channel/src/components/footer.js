import React from 'react';

const FooterComponent = () => {
    return ( 
        <div className='footer'>
            <p>Copyright &copy; Movie Maker {new Date().getFullYear()}</p>
        </div>
     );
}
 
export default FooterComponent;