import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemonDetails, cleanPokemonDetails} from '../../store/actions';
import { NavLink } from 'react-router-dom';
import "./CardPokeDetails.css"



export default function CardPokemonDetails() {

    let dispatch = useDispatch()

    const {id} = useParams()

    useEffect(() => {
        dispatch(getPokemonDetails(id))
        return () => {
            dispatch(cleanPokemonDetails())
        }
    }, [dispatch, id])
    

    const pokemon = useSelector(state => state.pokemonDetails)

    const loading = useSelector(state => state.loading)

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
            <div className='pokeDetailsBack'>
                <NavLink to="/home"><button className='pokeDetailsButton'>Back to Home</button></NavLink>
                <h1 className='pokeDetailsName'>{pokemon.name && pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h1>
                <div className='pokeDetailsContain'>
                <img className='pokeDetailsImage' src={pokemon.image} alt={`imagen de pokemon`}/>
                <div className='pokeDetailsStats'>
                <h4>HEATLH: {pokemon.health}</h4>
                <h4>ATTACK: {pokemon.attack}</h4>
                <h4>DEFENSE: {pokemon.defense}</h4>
                <h4>SPEED: {pokemon.speed}</h4>
                <h4>HEIGHT: {pokemon.height}</h4>
                <h4>WEIGHT: {pokemon.weight}</h4>
                <h4>TYPE: {pokemon.types ? pokemon.types.join(", ")
                 : <p>loading types...</p>} </h4>    
                 </div>
                </div>
            </div>
    )
}