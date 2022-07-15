import { 
    CLEAN_POKEMON_DETAILS,
    FILTER_BY_TYPE,
    GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_DETAILS, IS_LOADING, ORDER_BY_AZ, SEARCH_POKEMON,
} from "../reducer/cases"
import axios from "axios"

export function isLoading(loading) {
    return {
        type: IS_LOADING,
        payload: loading
    }
}

export function getAllPokemons() {
    return function(dispatch) {
        dispatch(isLoading(true))
        axios.get("http://localhost:3001/api/pokemons")
        .then(pokemons => {
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: pokemons.data
            })
            dispatch(isLoading(false))
        }).catch(error => {
            console.log(error)
            dispatch(isLoading(false))
        })
    }
}

export function getPokemonDetails(id) {
    return function(dispatch) {
        dispatch(isLoading(true))
        axios.get(`http://localhost:3001/api/pokemons/${id}`)
        .then(pokemon => {
            dispatch({
                type: GET_POKEMON_DETAILS,
                payload: pokemon.data
            })
            dispatch(isLoading(false))
        }).catch(error => {
            console.log(error)
            dispatch(isLoading(false))
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
        dispatch(isLoading(true))
        axios.get(`http://localhost:3001/api/pokemons?name=${name}`)
        .then(pokemon => {
            dispatch({
                type: SEARCH_POKEMON,
                payload: pokemon.data
            })
            dispatch(isLoading(false))
        }).catch(error => {
            console.log(error)
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
        }).catch(error => {
            console.log(error)
        })
    }
}


export function orderByAZ() {
    return {
        type: ORDER_BY_AZ
    }
}