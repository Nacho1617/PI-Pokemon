import React, { useState } from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';


export default function CreatePokemon() {

    const [input, setInput] = useState({
        name: "",
        health: null,
        attack: null,
        defense: null,
        speed: null,
        weight: null,
        height: null,
        types: []
    })

    const types = useSelector(state => state.types)


    function handleOnChange(e) {
        if (e.target.name === "types" && e.target.value !== "inicio") {
            let check = input.types.find(t => t === e.target.value)
            if (!check) {
                return setInput({
                    ...input,
                    types: [...input.types, e.target.value]
                })
                
            }
            return
        }
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
      e.preventDefault()
      for (const key in input) {
        if (input[key] === "") {
          input[key] = null
        }
      }
        axios.post("http://localhost:3001/api/pokemons", input)
        .then(() => {
        })
    }

    function handleDelete(e, p) {
      e.preventDefault()
      setInput({
        ...input,
        types: input.types.filter(t => t !== p)
      })
    }

    console.log(input)

    return (
        <div>
            <h1>Create a Pokemon!</h1>
           <form onSubmit={(e) => handleSubmit(e)}>
            <article>
            <label htmlFor="name">Name</label>
            <input
              type='text'
              id='name'
              placeholder='Insert your pokemon name'
              name='name'
              autoComplete='none'
              onChange={(e) => {
                handleOnChange(e);
             }}/>
            </article>
            <article>
            <label htmlFor="health">Health</label>
            <input
              type='number'
              id='health'
              placeholder='Insert your pokemon health'
              name='health'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
            </article>
            <article>
            <label htmlFor="attack">Attack</label>
            <input
              type='number'
              id='attack'
              placeholder='Insert your pokemon attack'
              name='attack'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
            </article>
            <article>
            <label htmlFor="deffense">Deffense</label>
            <input
              type='number'
              id='defense'
              placeholder='Insert your pokemon defense'
              name='defense'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
            </article>
            <article>
            <label htmlFor="speed">Speed</label>
            <input
              type='number'
              id='speed'
              placeholder='Insert your pokemon speed'
              name='speed'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
            </article>
            <article>
            <label htmlFor="height">Height</label>
            <input
              type='number'
              id='height'
              placeholder='Insert your pokemon height'
              name='height'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
            </article>
            <article>
            <label htmlFor="weight">Weight</label>
            <input
              type='number'
              id='weight'
              placeholder='Insert your pokemon weight'
              name='weight'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
            </article>
            <label htmlFor='types'>Types</label>
            <select 
              name='types'
              id='types'
              onChange={(e) => handleOnChange(e)}
            >
                <option value="inicio">select...</option>
                {types.map(t => {
                    return <option value={t.id} key={t.id}>
                        {t.name}
                    </option>
                })}
            </select>
            {input.types.map((d, i) => (
              <ul key={i}>
                <li>{d}</li>
                <button onClick={(e) => handleDelete(e, d)}>x</button>
              </ul>
            ))}
            <button
              type='submit'
              disabled={
                input.name === ""
              }
            >
              Create Pokemon
            </button>
           </form>
        </div>
    )
}