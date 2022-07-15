import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Cards({image, name, types, id}) {

    return (
            <div>
                <h2><NavLink exact to={`/home/${id}`}>{name}</NavLink></h2>
                <img src={image} alt={`imagen de pokemon`}/>
                <h4>TYPE: {types ? types.join(", ") : <p> Loading types</p>}</h4>
                <hr></hr>
            </div>
    )
}