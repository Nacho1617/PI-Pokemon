import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Landing() {

    return (
            <div>
                <h1>PI-Pokemon</h1>
                <NavLink exact to="/home">Enter</NavLink>
            </div>
    )
}