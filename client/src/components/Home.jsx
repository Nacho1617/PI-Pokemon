import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';
import Filter from './Filter';
// import SearchBar from './SearchBar';


export default function Home() {


    const pokemons = useSelector(state => state.pokemons)


    return (
            <div>
                {/* <SearchBar/> */}
                <Filter />
                { pokemons.length > 0 ? 
                    pokemons.map(poke => {
                        return <div key={poke.id}>
                         <Cards name={poke.name} image={poke.image} types={poke.types} id={poke.id}/>
                        </div>
                    }) : <h1>Loading...</h1>
                }
            </div>
    )
}