// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { searchPokemon } from '../store/actions';


// export default function SearchBar() {

//     let dispatch = useDispatch()
//     const [input, setInput] = useState("")

//     function handleChange(e) {
//         e.preventDefault()
//         setInput(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//         dispatch(searchPokemon(input))
//     }

//     console.log(input)


//     return (
//         <form onSubmit={(e) => handleSubmit(e)}>
//             <input 
//             type="text"
//             id="title"
//             autoComplete="off"
//             onChange={(e) => handleChange(e)}
//             placeholder='Search Pokemon'
//             value={input}
//             />
//             <button type='submit'>Search</button>
//         </form>
//     )
// }