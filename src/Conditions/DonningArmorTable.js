import React, { Component } from 'react';

class DonningArmorTable extends Component {
  render() {
    return (
        <div className="dm-container">
            <div className="dm-container-name">Donning and Doffing Armor</div>
            <table className="dm-container-table width-100">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Don</th>
                        <th>Doff</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Light</td>
                        <td>1 minute</td>
                        <td>1 minute</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>5 minute</td>
                        <td>1 minute</td>
                    </tr>
                    <tr>
                        <td>Heavy</td>
                        <td>10 minute</td>
                        <td>5 minute</td>
                    </tr>
                    <tr>
                        <td>Shield</td>
                        <td>1 action</td>
                        <td>1 action</td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
  }
}

export default DonningArmorTable;
