import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByOrigin, filterByType, orderByAttack, orderByName, swapOrder } from '../../store/actions/index';
import "./Filter.css"

export default function Filter({setCurrentPage}) {

    let dispatch = useDispatch()

    const types = useSelector(store => store.types)

    function handleClickSwap(e) {
        e.preventDefault()
        dispatch(swapOrder())
        setCurrentPage(1)
    }

    function handleClickSortName(e) {
        e.preventDefault()
        dispatch(orderByName())
        setCurrentPage(1)
    }

    function handleClickSortAttack(e) {
        e.preventDefault()
        dispatch(orderByAttack())
        setCurrentPage(1)
    }

    function handleOnChange(e) {
        e.preventDefault()
        if (e.target.value !== "inicio") {
            dispatch(filterByType(e.target.value))
        }
        setCurrentPage(1)
    }

    function handleChangeDbOrApi(e) {
        e.preventDefault()
        if (e.target.value === "Db") {
            dispatch(filterByOrigin(e.target.value))
        }
        if (e.target.value === "Api") {
            dispatch(filterByOrigin(e.target.value))
        }
        setCurrentPage(1)
    }


    return (
            <div className="filter">
                <button type='button' onClick={handleClickSwap}>
                   Swap Order ⇅
                </button>
                <br />
                <button type='button' value="Db" onClick={handleChangeDbOrApi}>
                   Only Db Pokemons
                </button>
                <button type='button' value="Api" onClick={handleChangeDbOrApi}>
                   Only Api Pokemons
                </button>
                <br />
                <label htmlFor='types'>Types</label>
            <select 
              name='types'
              id='types'
              onChange={(e) => handleOnChange(e)}
            >
                <option value="inicio">select...</option>
                {types.map(t => {
                    return <option value={t.name} key={t.id}>
                        {t.name}
                    </option>
                })}
            </select>
                <br />
                <button type='button' onClick={handleClickSortName}>
                    Sort By Name
                </button>
                <button type='button' onClick={handleClickSortAttack}>
                    Sort By attack
                </button>
            </div>
    )
}