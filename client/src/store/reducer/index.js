import {
    CLEAN_POKEMON_CREATED,
    CLEAN_POKEMON_DETAILS,
    CREATE_POKEMON,
    FILTER_BY_TYPE,
    GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_DETAILS, IS_LOADING, ORDER_BY_ATTACK, ORDER_BY_NAME, SEARCH_POKEMON, SHOW_ALL_POKEMON, SWAP_ORDER
} from "./cases"

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    pokemonDb: [],
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
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case SHOW_ALL_POKEMON:
            let showPokemons = state.allPokemons.sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                  }
                  if (b.id > a.id) {
                    return -1;
                  }
                  return 0;
            })
            return {
                ...state,
                pokemons: showPokemons
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
                pokemonCreated: action.payload,
                pokemonDb: [...state.pokemonDb, {...action.payload}]
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
        case ORDER_BY_NAME:
            let sortedPokemonsName = state.pokemons.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                  }
                  if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1;
                  }
                  return 0;
            })
            return {
                ...state,
                pokemons: sortedPokemonsName
            }
        case ORDER_BY_ATTACK:
            let sortedPokemonsAttack = state.pokemons.sort((a, b) => {
                if (a.attack > b.attack) {
                    return -1;
                  }
                  if (b.attack > a.attack) {
                    return 1;
                  }
                  return 0;
            })
            return {
                ...state,
                pokemons: sortedPokemonsAttack
            }
        case FILTER_BY_TYPE:
            let filterPokemon = state.allPokemons.filter(p => p.types.includes(action.payload))
            if (filterPokemon.length === 0) {
                filterPokemon = `No ${action.payload} type pokemon found`
            }
            return {
                ...state,
                pokemons: filterPokemon
            }
        default:
            return {...state}
    }
}