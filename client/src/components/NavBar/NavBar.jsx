import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"


export default function NavBar() {

    return (
            <div className='navBody'>
                <div>
                    <h1>PI Pokemon - Ignacio Balderrama</h1>
                </div>
                <div>
                    <h3><NavLink exact to="/home">Home</NavLink></h3>
                    <h3><NavLink exact to="/createPokemon">Create a Pokemon</NavLink></h3>
                </div>
                <hr></hr>
            </div>
    )
}