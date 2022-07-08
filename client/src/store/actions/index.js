import { 
    CLEAN_POKEMON_DETAILS,
    FILTER_BY_TYPE,
    GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_DETAILS, ORDER_BY_AZ, SEARCH_POKEMON,
} from "../reducer/cases"
import axios from "axios"

export function getAllPokemons() {
    return function(dispatch) {
        axios.get("http://localhost:3001/api/pokemons")
        .then(pokemons => {
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: pokemons.data
            })
        }).catch(error => {
            console.log(error)
        })
    }
}

export function getPokemonDetails(id) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/pokemons/${id}`)
        .then(pokemon => {
            dispatch({
                type: GET_POKEMON_DETAILS,
                payload: pokemon.data
            })
        }).catch(error => {
            console.log(error)
        })
    }
}

export function cleanPokemonDetails() {
    return {
        type: CLEAN_POKEMON_DETAILS,
        payload: {}
    }
}

export function searchPokemon(name) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/pokemons?name=${name}`)
        .then(pokemon => {
            dispatch({
                type: SEARCH_POKEMON,
                payload: pokemon.data
            })
        })
    }
}

export function filterByType(type) {
    return {
        type: FILTER_BY_TYPE,
        payload: type
    }
}

export function getAllTypes() {
    return function(dispatch) {
        axios.get("http://localhost:3001/api/types")
        .then(types => {
            dispatch({
                type: GET_ALL_TYPES,
                payload: types.data
            })
        })
    }
}


export function orderByAZ() {
    return {
        type: ORDER_BY_AZ
    }
}
