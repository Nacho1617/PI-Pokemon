import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Landing.css"



export default function Landing() {

    return (
            <div className='landingBackground'>
                <h1>PI-Pokemon</h1>
                <NavLink exact to="/home"><h2>Enter</h2></NavLink>
            </div>
    )
}