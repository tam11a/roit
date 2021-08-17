import React from 'react';
import './WaveBox.css';

export default function WaveBox() {
    return (
        <div className="wavebox">
            <div className='box'>            
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.68 53.55" className="icon-svg"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M53.32,22.37A26.85,26.85,0,0,0,0,26.84,26.46,26.46,0,0,0,.79,33.3h0v0l.06.3s-.51-7,3.06-12.68a14.23,14.23,0,0,1,7.42-5.94.2.2,0,0,1,.18.36c-3,1.76-7.87,6.16-7.91,16.15a33.6,33.6,0,0,0,.18,3.65s2.3,11.63,11.54,16l.34.16c2.32,1,16,6.44,28.71-4.07h0s-.42-.87-2.7-1.83c-2-.84-5.36-1.74-11.08-2.21C18.24,42.11,15,40.65,9.7,34.66c0,0-6.18-9.07,1.8-16.42a.21.21,0,0,1,.31.27c-2,3-5.18,10.17,3.58,17.1,0,0,6.14,4,16.06,3.28,6.9-.5,11.85.4,14.77,1.6a7.2,7.2,0,0,1,2.66,1.66h0A26.91,26.91,0,0,0,53.32,22.37Zm-2.83,6a53.42,53.42,0,0,0-15.46,3c-8.61,3-18.91-.3-19.49-8.11-.47-6.34,5.79-8.64,9.76-8.18a.4.4,0,0,0,.25-.73c-3.53-2.19-11.2-5.42-19.39.88a24.33,24.33,0,0,1,7.57-8.17,22.61,22.61,0,0,1,8.65-3.52A23.71,23.71,0,0,1,50.54,26.84C50.54,27.36,50.52,27.87,50.49,28.38Z"/></g></g></svg>
        </div>

    )
}
