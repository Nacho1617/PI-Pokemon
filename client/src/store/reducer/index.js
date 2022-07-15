import {
    CLEAN_POKEMON_DETAILS,
    // FILTER_BY_TYPE,
    GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_DETAILS, IS_LOADING, ORDER_BY_AZ, SEARCH_POKEMON
} from "./cases"

const initialState = {
    pokemons: [],
    filteredPokemons: [],
    types: [],
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
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            }
        // case FILTER_BY_TYPE:
        //     return {
        //         ...state
        //     }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case ORDER_BY_AZ:
            return {
                ...state,
                okemons: state.pokemons.reverse()
            }
        default:
            return state
    }
}