import React from 'react'
import './Nav.css';

export default function Nav() {
    const toggleNav = () => {
        document.querySelector(".Nav").classList.toggle("on");
        document.querySelector(".spl").classList.toggle("scale-7");
    }
    return (
        <div className="Nav flex-col unselectable">
            <div>
                <div>ho<span className="rc-a">me</span></div>
                <div>abou<span className="rc-a">t us</span></div>
                <div>serv<span className="rc-a">ices</span></div>
                <div>conta<span className="rc-a">ct us</span></div>
            </div>
            <span className="toogle" onClick={toggleNav}></span>
        </div>
    )
}
