import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByAZ } from '../store/actions';

export default function Filter() {

    let dispatch = useDispatch()

    return (
            <div>
                <button type='submit' onClick={() => dispatch(orderByAZ())}>
                   Swap Order ⇅
                </button>
            </div>
    )
}