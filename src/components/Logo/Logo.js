import React from 'react';
import Tilt from 'react-tilt'
import palette from './color-palette.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0' >
            <Tilt className="Tilt br2 shadow-2 logo" options={{ max : 35, perspective: 800 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img alt='logo' src={palette}/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;