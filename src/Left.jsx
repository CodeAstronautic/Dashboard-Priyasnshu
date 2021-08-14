import React from 'react';
import logo from './assets/imgs/logo.png';
import * as Icons from 'react-bootstrap-icons';
import './assets/scss/left.scss'

const Left =()=>{
    return(
    <>
    <img className="mobile-icon" src={logo} alt="logo" />
        <div className="Leftbody">
            
            <ul className="icons">
                <li>
                    <img src={logo} alt="logo" />
                </li>
                <li>< Icons.House /></li>
                <li>< Icons.Person /></li>
                <li>< Icons.Bell /></li>
                <li>< Icons.Plus /></li>
                <li>< Icons.PlayCircle /></li>
            </ul>
        </div>
        </>
    );
}

export default Left;