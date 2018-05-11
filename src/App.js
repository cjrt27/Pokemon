import React, { Component } from 'react';
import logo from './logo.PNG';
import './App.css';
import axios from 'axios';


const PokeButton = props => {
  return <button className="button" onClick={props.fetchNewPokemon}>PokeMe</button>;
};

const PokeInfo = (props) => {
  return (
    <div className= "infoContainer"> 
      <h1 className="Name">Name: {props.name} </h1>
      <p className="Weight">Weight: {props.weight}</p>
      <div className="Img"><img src={props.pokeImg} alt={props.name}  /></div>
    </div>
  )
};


class App extends Component {
constructor() {
  super()

  this.state = {
    pokeImg: '',
    name: "",
    weight: null
  }
};


fetchNewPokemon = () => {

  let id=Math.floor(Math.random() *802);
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    console.log("hi there");
    axios
      .get(pokemonURL)
      .then(data => {
        if (data){
          this.setState({pokeImg: data.data.sprites.front_default, name: data.data.name, weight: data.data.weight})
        }
      })
      .catch(err => {
        console.log(err);
      });
}
  
  componentDidMount() {
    let id=Math.floor(Math.random() *802);
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    console.log("hi there");
    axios
      .get(pokemonURL)
      .then(data => {
        console.log(data);
        if (data){
          this.setState({pokeImg: data.data.sprites.front_default, name: data.data.name, weight: data.data.weight})
        }
      })
      .catch(err => {
        console.log(err);
      });

      
  }

  render() {
    return (
      <div className="App">
      <h1> POKEMON APP</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <PokeButton fetchNewPokemon={this.fetchNewPokemon}/>
          <PokeInfo pokeImg={this.state.pokeImg} name={this.state.name} weight= {this.state.weight}/>
      </div>
    );
  }
}

export default App;
