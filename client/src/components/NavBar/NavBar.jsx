import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"


export default function NavBar() {

    return (
            <div className='navBody'>
                <div>
                    <h1>PI Pokemon - Ignacio Balderrama</h1>
                </div>
                <div className='navBtn'>
                    <button><NavLink exact to="/home">Home</NavLink></button>
                    <button><NavLink exact to="/createPokemon">Create a Pokemon</NavLink></button>
                </div>
                <hr></hr>
            </div>
    )
}