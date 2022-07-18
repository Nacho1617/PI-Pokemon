import React,{ useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import Paginate from '../Paginate/Paginate';
import { getAllPokemons, showAllPokemon } from '../../store/actions/index';


export default function Home() {
    
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllPokemons())
    },[dispatch])
     
    const loading = useSelector(state => state.loading)
    const pokemons = useSelector(state => state.pokemons)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage] = useState(12)

    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginate = (pagenumber) => {setCurrentPage(pagenumber)}

    function handleOnButton(e) {
        e.preventDefault()
        dispatch(showAllPokemon())
        setCurrentPage(1)
    }


    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return <div>
        <SearchBar />
        <Filter setCurrentPage={setCurrentPage}/>
        {typeof pokemons === "string" ? 
                <div>
                <button onClick={(e)=> handleOnButton(e)}>All Pokemons</button>
                <h1>{pokemons}</h1> 
                </div> : <div>
                    <Paginate pokemonsPerPage={pokemonsPerPage} allPokemons={pokemons.length} paginate={paginate}/>
                <button onClick={(e)=> handleOnButton(e)}>All Pokemons</button>
                    {currentPokemons && currentPokemons.map(poke => {
                        return <div key={poke.id}>
                <Cards name={poke.name} image={poke.image} types={poke.types} id={poke.id}/>
                </div>})}
                <Paginate pokemonsPerPage={pokemonsPerPage} allPokemons={pokemons.length} paginate={paginate}/>
                <button onClick={(e)=> handleOnButton(e)}>All Pokemons</button>
                </div>}
    </div>
}