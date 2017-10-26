import React, { Component } from 'react';
import './App.css';
import './bootstrap-grid.min.css';
import Attribute from './Attributes/Attribute';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header">
          <h1 className="App-title">Dungeon Master's Screen</h1>
        </header>
        <div class="row">
          <Attribute name="Strength" description="Strength measures bodily power and athletic training." />
          <Attribute name="Dexterity" description="Dexterity measures agility, reflexes, and balance." />
          <Attribute name="Constitution" description="Constitution measures health, stamina, and vital force." />
          <Attribute name="Intelligence" description="Intelligence measures mental acuity, accuracy of recall, and the ability to reason." />
          <Attribute name="Wisdom" description="Wisdom measures perceptiveness, intuition, and attunement of the surrounding world." />
          <Attribute name="Charisma" description="Charisma measures force of personality, persuasiveness, personal magnetism, social influence, and physical attractiveness." />
        </div>
      </div>
    );
  }
}

export default App;
