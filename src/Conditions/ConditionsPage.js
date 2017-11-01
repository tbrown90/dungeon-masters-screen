import React, { Component } from 'react';
import CharacterAdvancementTable from './CharacterAdvancementTable';
import RestingTable from './RestingTable';

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
                    <div className="col-sm-3"><CharacterAdvancementTable /></div>
                    <div className="col-sm-4"><RestingTable /></div>
                </div>
            </div>
            <div className="col-sm-5">
                <br/>
            </div>
        </div>
      </div>
    );
  }
}

export default ConditionsPage;
