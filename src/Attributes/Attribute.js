import React, { Component } from 'react';
import StrengthTable from './StrengthTable'
import DexterityTable from './DexterityTable'
import ConstitutionTable from './ConstitutionTable'
import IntelligenceTable from './IntelligenceTable'
import WisdomTable from './WisdomTable'
import CharismaTable from './CharismaTable'

class Attribute extends Component {
  render() {
    var tableToRender;
    if (this.props.name === "Strength")
      tableToRender = <StrengthTable />;
    else if (this.props.name === "Dexterity")
      tableToRender = <DexterityTable />;
    else if (this.props.name === "Constitution")
      tableToRender = <ConstitutionTable />;
    else if (this.props.name === "Intelligence")
      tableToRender = <IntelligenceTable />;
    else if (this.props.name === "Wisdom")
      tableToRender = <WisdomTable />;
    else if (this.props.name === "Charisma")
      tableToRender = <CharismaTable />;

    return (
      <div className="col-sm-4">
        <div className="dm-container">
          <div className="dm-container-name">{this.props.name}</div>
          <div className="dm-container-description">{this.props.description}</div>
          {tableToRender}
        </div>
      </div>
    );
  }
}

export default Attribute;
