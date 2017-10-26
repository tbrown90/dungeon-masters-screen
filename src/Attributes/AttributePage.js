import React, { Component } from 'react';
import Attribute from './Attribute';

class AttributePage extends Component {
  render() {
    return (
      <div class="attribute-page">
        <div class="row">
          <div class="col-sm-6">
            <table class="attribute-table center">
              <tr>
                <th colspan="2">Skills</th>
              </tr>
              <tr>
                <th>Ability Score</th>
                <th>Associated Skills</th>
              </tr>
              <tr>
                <td>Strength</td>
                <td>Athletics</td>
              </tr>
              <tr>
                <td>Dexterity</td>
                <td>Acrobatics, Sleight of Hand, Stealth</td>
              </tr>
              <tr>
                <td>Constitution</td>
                <td>N/A (see Constitution table)</td>
              </tr>
              <tr>
                <td>Intelligence</td>
                <td>Arcana, History, Nature, Religion</td>
              </tr>
              <tr>
                <td>Wisdom</td>
                <td>Animal Handling, Insight, Medicine, Perception, Survival</td>
              </tr>
              <tr>
                <td>Charisma</td>
                <td>Deception, Intimidation, Performance, Persuasion</td>
              </tr>
            </table>
          </div>
          <div class="col-sm-6">
            <table class="attribute-table center">
              <tr>
                <th colspan="2">Typical Difficulty Classes</th>
              </tr>
              <tr>
                <th>Task Difficulty</th>
                <th>DC</th>
              </tr>
              <tr>
                <td>Trivial</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Easy</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Moderate</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Hard</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Very Hard</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Nearly Impossible</td>
                <td>30</td>
              </tr>
            </table>
          </div>
        </div>
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

export default AttributePage;
