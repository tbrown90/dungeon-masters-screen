import React, { Component } from 'react';
import WeaponsTable from './WeaponsTable';

class ItemsAndEquipmentPage extends Component {
  render() {
    return (
      <div className="page">
        <div className="row">
          <div className="col-sm-12"><h1 className="page-title text-center">Items and Equipment</h1></div>
        </div>
        <div className="row">
            <div className="col-sm-6"><WeaponsTable /></div>
            <div className="col-sm-6"><br/></div>
        </div>
      </div>
    );
  }
}

export default ItemsAndEquipmentPage;