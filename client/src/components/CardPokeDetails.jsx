import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemonDetails, cleanPokemonDetails} from '../store/actions';


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

    return (
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt={`imagen de pokemon`}/>
                <h4>ORDER: {pokemon.order}</h4>
                <h4>HEATLH: {pokemon.health}</h4>
                <h4>ATTACK: {pokemon.attack}</h4>
                <h4>DEFENSE: {pokemon.defense}</h4>
                <h4>SPEED: {pokemon.speed}</h4>
                <h4>HEIGHT: {pokemon.height}</h4>
                <h4>WEIGHT: {pokemon.weight}</h4>
                <h4>TYPE: {pokemon.types ? pokemon.types.join(", ")
                 : <p>loading types...</p>} </h4>    
            </div>
    )
}