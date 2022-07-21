import React from "react";
import "./Paginate.css"


export default function Paginate({ pokemonsPerPage, allPokemons, paginate }) {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="btnPag">
      {pageNumbers.length > 1 &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
    </nav>
  );
}