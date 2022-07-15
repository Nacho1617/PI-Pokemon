import React from "react";


export default function Paginate({ pokemonsPerPage, allPokemons, paginate }) {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      {pageNumbers.length > 1 &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
    </nav>
  );
}