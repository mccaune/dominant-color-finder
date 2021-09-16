import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
    return (
        <div className='f3'>
            <p>
                {'Here you can find out dominant colors of any picture'}
            </p>   
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >Find out</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;