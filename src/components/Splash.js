import React from 'react'
import WaveBox from './WaveBox';
import Title from './Title';
import './Splash.css';

export default function Splash() {
    return (
        <div className="spl unselectable">
            <WaveBox />
            <Title />
        </div>
    )
}
