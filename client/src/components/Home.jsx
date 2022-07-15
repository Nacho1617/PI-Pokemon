import React from 'react';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from './Cards';
import Filter from './Filter';
import SearchBar from './SearchBar';
import Paginate from './Paginate';
import { getAllPokemons } from '../store/actions/index';
import { useState } from 'react';


export default function Home() {
    
    let dispatch = useDispatch()

    const pokemons = useSelector(state => state.pokemons)
    const loading = useSelector(state => state.loading)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage] = useState(12)

    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginate = (pagenumber) => {setCurrentPage(pagenumber)}

    function handleOnButton(e) {
        e.preventDefault()
        dispatch(getAllPokemons())
        setCurrentPage(1)
    }


    if (loading) {
        return <h1>Loading...</h1>
    }

    return <div>
        <SearchBar />
        <Filter />
        {typeof pokemons === "string" ? 
                <div>
                <button onClick={(e)=> handleOnButton(e)}>All Pokemons</button>
                <h1>{pokemons}</h1> 
                </div> : <div>
                    <Paginate pokemonsPerPage={pokemonsPerPage} allPokemons={pokemons.length} paginate={paginate}/>
                <button onClick={(e)=> handleOnButton(e)}>All Pokemons</button>
                    {currentPokemons.map(poke => {
                        return <div key={poke.id}>
                <Cards name={poke.name} image={poke.image} types={poke.types} id={poke.id}/>
                </div>})}
                </div>}
    </div>
}