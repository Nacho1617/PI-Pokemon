import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanPokemonCreated, createPokemon } from '../../store/actions';
import validate from "./validations"


export default function CreatePokemon() {

  let dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(cleanPokemonCreated())
    }
  }, [dispatch])

    const [error, setError] = useState({
        name: "",
        health: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: "",
        types: ""
    })

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

    const loading = useSelector(state => state.loading)

    const pokemon = useSelector(state => state.pokemonCreated)


    function handleOnChange(e) {
      if (e.target.value !== "inicio") {
        
        if (e.target.name === "types") {
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
          
          setError(validate({
            ...input,
            [e.target.name]: e.target.value
          }))
        }
      }
        
        function handleSubmit(e) {
          e.preventDefault()
      for (const key in input) {
        if (input[key] === "") {
          input[key] = null
        }
      }
      dispatch(createPokemon(input))
    }

    function handleDelete(e, p) {
      e.preventDefault()
      setInput({
        ...input,
        types: input.types.filter(t => t !== p)
      })
    }

    console.log(input)

    if (loading) {
      return <h1>Loading...</h1>
    }

    if (pokemon.name) {
      return <div>
      <h1>{`El pokemon ${pokemon.name} ha sido creado`}</h1>
      </div>
    }

    return (
        <div>
            <h1>Create a Pokemon!</h1>
           <form onSubmit={(e) => handleSubmit(e)}>
            <article>
            <label htmlFor="name">Name: </label>
            <input
              type='text'
              id='name'
              placeholder='Insert your pokemon name'
              name='name'
              autoComplete='none'
              onChange={(e) => {
                handleOnChange(e);
             }}/>
             {error.name && (<p>{error.name}</p>)}
            </article>
            <article>
            <label htmlFor="health">Health: </label>
            <input
              type='number'
              id='health'
              placeholder='Insert your pokemon health'
              name='health'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
             {error.health && (<p>{error.health}</p>)}
            </article>
            <article>
            <label htmlFor="attack">Attack: </label>
            <input
              type='number'
              id='attack'
              placeholder='Insert your pokemon attack'
              name='attack'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
             {error.attack && (<p>{error.attack}</p>)}
            </article>
            <article>
            <label htmlFor="deffense">Deffense: </label>
            <input
              type='number'
              id='defense'
              placeholder='Insert your pokemon defense'
              name='defense'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
             {error.defense && (<p>{error.defense}</p>)}
            </article>
            <article>
            <label htmlFor="speed">Speed: </label>
            <input
              type='number'
              id='speed'
              placeholder='Insert your pokemon speed'
              name='speed'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
             {error.speed && (<p>{error.speed}</p>)}
            </article>
            <article>
            <label htmlFor="height">Height: </label>
            <input
              type='number'
              id='height'
              placeholder='Insert your pokemon height'
              name='height'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
             {error.height && (<p>{error.height}</p>)}
            </article>
            <article>
            <label htmlFor="weight">Weight: </label>
            <input
              type='number'
              id='weight'
              placeholder='Insert your pokemon weight'
              name='weight'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
             {error.weight && (<p>{error.weight}</p>)}
            </article>
            <article>
            <label htmlFor='types'>Types: </label>
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
                <p>{d}</p>
                <button onClick={(e) => handleDelete(e, d)}>x</button>
              </ul>
            ))}
             {error.types && (<p>{error.types}</p>)}
            </article>
            <article>
            <button
              type='submit'
              disabled={
                input.name === "" ||
                error.name !== "" ||
                error.attack !== "" ||
                error.defense !== "" ||
                error.speed !== "" ||
                error.height !== "" ||
                error.weight !== ""
              }
            >
              Create Pokemon
            </button>
            </article>
           </form>
        </div>
    )
}