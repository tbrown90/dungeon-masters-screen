import React, { Component } from 'react';
import Attribute from './Attribute';
import AttributeSkillsTable from './AttributeSkillsTable';
import SkillDifficultyTable from './SkillDifficultyTable';

class AttributePage extends Component {
  render() {
    return (
      <div class="attribute-page">
        <div class="row">
          <div class="col-sm-12"><h1 class="text-center">Ability Checks</h1></div>
        </div>
        <div class="row">
          <div class="col-sm-3"><br/></div>
          <div class="col-sm-3">
            <AttributeSkillsTable />
          </div>
          <div class="col-sm-3">
            <SkillDifficultyTable />
          </div>
          <div class="col-sm-3"><br/></div>
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
