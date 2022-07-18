import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByType, orderByAttack, orderByName, swapOrder } from '../../store/actions/index';

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
            console.log("se clickeo en filter" + e.target.value)
        }
    }


    return (
            <div>
                <button type='button' onClick={handleClickSwap}>
                   Swap Order ⇅
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