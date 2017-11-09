import React, { Component } from 'react';

class Attribute extends Component {
  render() {
    return (
        <div className="dm-container">
          <div className="dm-container-name">Weapons</div>    
          <table className="dm-container-table">
            <thead>
                <tr>
                    <th colspan="5">Simple Melee Weapons</th>
                </tr>
                <tr>
                    <th>Weapon</th>
                    <th>Cost</th>
                    <th>Damage</th>
                    <th>Weight</th>
                    <th>Properties</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Club</td>
                    <td>1sp</td>
                    <td>1d4 Bludgeoning</td>
                    <td>2 lb.</td>
                    <td>Light</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
  }
}

export default Attribute;
