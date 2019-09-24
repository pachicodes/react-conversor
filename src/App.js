import React, {Component} from 'react';
import './App.css';

import Conversor from "./components/Conversor"
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moeda</h1>
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
    );
  }
}

export default App;
