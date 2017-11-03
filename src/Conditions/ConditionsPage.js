import React, { Component } from 'react';
import CharacterAdvancementTable from './CharacterAdvancementTable';
import RestingTable from './RestingTable';
import DamageTable from './DamageTable';

class ConditionsPage extends Component {
  render() {
    return (
      <div className="page">
        <div className="row">
          <div className="col-sm-12"><h1 className="page-title text-center">Conditions</h1></div>
        </div>
        <div className="row">
            <div className="col-sm-7">
                <div className="row">
                    <div className="col-sm-4"><CharacterAdvancementTable /></div>
                    <div className="col-sm-8"><RestingTable /></div>
                </div>
            </div>
            <div className="col-sm-5">
                <div className="row"><div className="col-sm-12"><DamageTable /></div></div>
            </div>
        </div>
      </div>
    );
  }
}

export default ConditionsPage;
