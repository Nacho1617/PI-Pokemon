import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Cards.css"


export default function Cards({image, name, types, id}) {

    return (
            <div className='cardBack'>
                <h2><NavLink exact to={`/home/${id}`}>{name[0].toUpperCase()+name.substring(1)}</NavLink></h2>
                <img className='cardImage' src={image} alt={`imagen de pokemon`}/>
                <h4>TYPE: {types ? types.join(", ") : <p> Loading types</p>}</h4>
            </div>
    )
}