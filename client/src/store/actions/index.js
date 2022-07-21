import { 
    CLEAN_POKEMON_CREATED,
    CLEAN_POKEMON_DETAILS,
    CREATE_POKEMON,
    FILTER_BY_ORIGIN,
    FILTER_BY_TYPE,
    GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_DETAILS, IS_LOADING, ORDER_BY_ATTACK, ORDER_BY_NAME, SEARCH_POKEMON, SHOW_ALL_POKEMON, SWAP_ORDER,
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
            dispatch(isLoading(false))
            console.log(error)
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
            dispatch(isLoading(false))
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

export function cleanPokemonCreated() {
    return {
        type: CLEAN_POKEMON_CREATED,
        payload: {}
    }
}

export function createPokemon(data) {
    return function(dispatch) {
        dispatch(isLoading(true))
        axios.post("http://localhost:3001/api/pokemons", data)
        .then(pokemon => {
            dispatch({
                type: CREATE_POKEMON,
                payload: pokemon.data
            })
            dispatch(isLoading(false))
        }).catch(error => {
            dispatch(isLoading(false))
            console.log(error)
        })
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
            dispatch(isLoading(false))
            console.log(error)
        })
    }
}

export function filterByType(type) {
    return function(dispatch) {
        dispatch(isLoading(true))
        dispatch({
            type: FILTER_BY_TYPE,
            payload: type
        })
        dispatch(isLoading(false))
    }
}

export function filterByOrigin(origin) {
    return function(dispatch) {
        dispatch(isLoading(true))
        dispatch({
            type: FILTER_BY_ORIGIN,
            payload: origin
        })
        dispatch(isLoading(false))
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

export function swapOrder() {
    return function(dispatch) {
        dispatch(isLoading(true))
        dispatch({
            type: SWAP_ORDER
        })
        dispatch(isLoading(false))
    }
    
}

export function orderByName() {
    return function(dispatch) {
        dispatch(isLoading(true))
        dispatch({
            type: ORDER_BY_NAME
        })
        dispatch(isLoading(false))
    }
}

export function orderByAttack() {
    return function(dispatch) {
        dispatch(isLoading(true))
        dispatch({
            type: ORDER_BY_ATTACK
        })
        dispatch(isLoading(false))
    }
}

export function showAllPokemon() {
    return function(dispatch) {
        dispatch(isLoading(true))
        dispatch({
            type: SHOW_ALL_POKEMON
        })
        dispatch(isLoading(false))
    }
}