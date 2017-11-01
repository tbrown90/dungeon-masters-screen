import React, { Component } from 'react';
import './App.css';
import './bootstrap-grid.min.css';
import AttributePage from './Attributes/AttributePage';
import ConditionsPage from './Conditions/ConditionsPage';
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
        </header>
        <div className="menu">
          <div className="tab-buttons">
            <button onClick={openTab.bind(this, "attribute-tab")}>Attributes</button>
            <button onClick={openTab.bind(this, "conditions-tab")}>Conditions</button>
          </div>
        </div>

        <div className="container-fluid">
          <div className="tab" id="attribute-tab">
            <AttributePage />
          </div>
          <div className="tab" id="conditions-tab">
            <ConditionsPage />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
