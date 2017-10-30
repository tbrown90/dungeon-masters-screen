import React, { Component } from 'react';
import './App.css';
import './bootstrap-grid.min.css';
import AttributePage from './Attributes/AttributePage';
import {openTab} from './JS/custom';

class App extends Component {
  componentDidMount() {
    openTab("attribute-tab");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dungeon Master's Screen</h1>
          <div class="tab-buttons">
            <button onClick={openTab.bind(this, "attribute-tab")}>Attributes</button>
            <button onClick={openTab.bind(this, "conditions-tab")}>Conditions</button>
          </div>
        </header>
        <div class="container-fluid">
          <div class="tab" id="attribute-tab">
            <AttributePage />
          </div>
          <div class="tab" id="conditions-tab">
            HELLO FROM THE CONDITIONS TAB.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
