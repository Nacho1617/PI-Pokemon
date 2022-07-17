import './App.css';
import React, { useEffect } from 'react';
import Navbar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import CardPokeDetails from "./components/CardPokeDetails"
import CreatePokemon from "./components/CreatePokemon"
import { useDispatch } from 'react-redux';
import { getAllTypes } from './store/actions/index';



function App() {

  let dispatch = useDispatch()

   
  useEffect(() => {
    dispatch(getAllTypes())
}, [dispatch])



  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/">
          <Navbar />
          <Route exact path="/home" component={Home}/>
          <Route exact path={`/home/:id`} component={CardPokeDetails}/>
          <Route path="/createPokemon" component={CreatePokemon}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
