import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanPokemonCreated, createPokemon } from '../../store/actions';
import validate from "./validations"
import { NavLink } from 'react-router-dom';
import "./CreatePokemon.css"


export default function CreatePokemon() {

  let dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(cleanPokemonCreated())
    }
  }, [dispatch])

  const [input, setInput] = useState({
      name: "",
      health: null,
      attack: null,
      defense: null,
      speed: null,
      weight: null,
      height: null,
      image: "",
      types: []
  })
  
  const [error, setError] = useState({
      name: "",
      health: "",
      attack: "",
      defense: "",
      speed: "",
      weight: "",
      height: "",
      image: "",
      types: ""
  })

    const types = useSelector(state => state.types)

    const loading = useSelector(state => state.loading)

    const pokemon = useSelector(state => state.pokemonCreated)

    // let typesNames = types.map(t => t.name)
    
    // function showName(arrT) {
    //   let arr = []
    //   for (let i = 0; i < arrT.length; i++) {
    //     arr.push(typesNames.indexOf(arrT[i]) + 1)
    //   }
    //   return arr
    // }

    // console.log(showName(["normal", "ghost"]))


    function handleOnChange(e) {
      if (e.target.value !== "inicio") {  
        if (e.target.name === "types") {
          let check = input.types.find(t => t === e.target.value)
          if (!check) {
            console.log(e.target.value)
              setInput({
                    ...input,
                    types: [...input.types, e.target.value]
                  })  
                }
                setError(validate({
                  ...input,
                  types: [...input.types, e.target.value]
                }))
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
        
      
      function handleDelete(e, p) {
        e.preventDefault()
        setInput({
          ...input,
          types: input.types.filter(t => t !== p)
        })
        setError(validate({
          ...input,
          types: input.types.filter(t => t !== p)
        }))
      }

    //  function handleClickSub(e){
    //   e.preventDefault(e)
    //   setInput({
    //     ...input,
    //     types: [1, 2]
    //   })
    //   console.log(input)
    //  }
        
    function handleSubmit(e) {
      e.preventDefault()
      dispatch(createPokemon(input))
      console.log(input)
    }


    if (loading) {
      return <h1>Loading...</h1>
    }

    if (pokemon.name) {
      return <div>
      <h1>{`The pokemon ${pokemon.name} has been created`}</h1>
      </div>
    }

    return (
        <div className='createBack'>
                <NavLink to="/home"><button className='backHomeBtn'>Back to Home</button></NavLink>
            <h1 className='createTitle'>Create a Pokemon!</h1>
           <form className='form' onSubmit={(e) => handleSubmit(e)}>
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
             {error.name && (<label className='error'>{error.name}</label>)}
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
             {error.health && (<label className='error'>{error.health}</label>)}
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
             {error.attack && (<label className='error'>{error.attack}</label>)}
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
             {error.defense && (<label className='error'>{error.defense}</label>)}
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
             {error.speed && (<label className='error'>{error.speed}</label>)}
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
             {error.height && (<label className='error'>{error.height}</label>)}
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
             {error.weight && (<label className='error'>{error.weight}</label>)}
            </article>
            <article>
            <label htmlFor="image">Image link: </label>
            <input
              type='text'
              id='image'
              placeholder='Insert your pokemon image link'
              name='image'
              onChange={(e) => {
                handleOnChange(e);
              }}/>
             {error.image && (<label className='error'>{error.image}</label>)}
            </article>
            <article>
            <label htmlFor='types'>Choose your type(s): </label>
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
            {error.types && (<label className='error'>{error.types}</label>)}
            <div className='deleteBtn'>
            {input.types.map((d, i) => (
              <div key={i}>
                <p>{d}</p>
                <button onClick={(e) => handleDelete(e, d)}>x</button>
                </div>
            ))}
            </div>
            </article>
            <article>
            <button className='createBtn'
              type='submit'
              disabled={
                input.name === "" ||
                error.name !== "" ||
                error.attack !== "" ||
                error.defense !== "" ||
                error.speed !== "" ||
                error.height !== "" ||
                error.weight !== "" ||
                error.image !== "" ||
                error.types !== ""
              }
            >
              Create Pokemon
            </button>
            </article>
           </form>
        </div>
    )
}