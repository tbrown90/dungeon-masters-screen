import React, { Component } from 'react';
import WeaponsTable from './WeaponsTable';
import ArmorAndShieldsTable from './ArmorAndShieldsTable';
import ServicesTable from './ServicesTable';
import LifestyleTable from './LifestyleTable';
import {openTab} from './../JS/custom';

class ItemsAndEquipmentPage extends Component {
  render() {
    return (
      <div className="page">
        <div className="row">
          <div className="col-sm-12"><h1 className="page-title text-center">Items and Equipment</h1></div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <WeaponsTable />
            <br />
            <button className="tab-button" onClick={openTab.bind(this, "magic-items-tab")}>Magic Item Prices</button>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <ArmorAndShieldsTable />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <ServicesTable />
              </div>
              <div className="col-sm-6">
                <LifestyleTable />
              </div>
            </div>     
          </div>       
        </div>
      </div>
    );
  }
}

export default ItemsAndEquipmentPage;
