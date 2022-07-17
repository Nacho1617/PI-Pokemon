import {
    CLEAN_POKEMON_CREATED,
    CLEAN_POKEMON_DETAILS,
    CREATE_POKEMON,
    GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_DETAILS, IS_LOADING, SEARCH_POKEMON, SWAP_ORDER
} from "./cases"

const initialState = {
    pokemons: [],
    filteredPokemons: [],
    types: [],
    pokemonCreated: {},
    pokemonDetails: {},
    loading: true
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMON_DETAILS:
            return {
                ...state,
                pokemonDetails: action.payload
            }
        case CLEAN_POKEMON_DETAILS:
            return {
                ...state,
                pokemonDetails: action.payload
            }
        case CLEAN_POKEMON_CREATED:
            return {
                ...state,
                pokemonCreated: action.payload
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            }
        case CREATE_POKEMON:
            return {
                ...state,
                pokemonCreated: action.payload
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case SWAP_ORDER:
            let swapedPokemons = state.pokemons.reverse()
            return {
                ...state,
                pokemons: swapedPokemons
            }
        default:
            return state
    }
}