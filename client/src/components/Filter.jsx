import React from 'react';
import { useDispatch } from 'react-redux';
import { swapOrder } from '../store/actions';

export default function Filter() {

    let dispatch = useDispatch()

    return (
            <div>
                <button type='button' onClick={() => dispatch(swapOrder())}>
                   Swap Order ⇅
                </button>
            </div>
    )
}