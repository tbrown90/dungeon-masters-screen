import React, { Component } from 'react';
import './App.css';
import './bootstrap-grid.min.css';
import AttributePage from './Attributes/AttributePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dungeon Master's Screen</h1>
        </header>
        <div class="container-fluid">
          <AttributePage />
        </div>
      </div>
    );
  }
}

export default App;
