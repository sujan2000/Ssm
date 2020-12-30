import logo from './logo.svg';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Redux movies</h1>
        <div className="container">
          <MovieList/>
          <MovieDetails/>
        </div>
      </div>
    )
  }
}

export default App;
