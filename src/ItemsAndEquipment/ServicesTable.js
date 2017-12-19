import React, { Component } from 'react';

class ServicesTable extends Component {
  render() {
    return (
        <div className="dm-container">
          <div className="dm-container-name">Services</div>    
          <table className="dm-container-table">
            <thead>
                <tr>
                    <th>Service</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2">Coach Cab</td>
                </tr>
                <tr>
                    <td>Between Towns</td>
                    <td>3 cp/mile</td>
                </tr>
                <tr>
                    <td>Within a City</td>
                    <td>1 cp</td>
                </tr>
                <tr>
                    <td colspan="2">Hireling</td>
                </tr>
                <tr>
                    <td>Skilled</td>
                    <td>2 gp/day</td>
                </tr>
                <tr>
                    <td>Unskilled</td>
                    <td>2 sp/day</td>
                </tr>
                <tr>
                    <td colspan="2"><br/></td>
                </tr>
                <tr>
                    <td>Messenger</td>
                    <td>2 cp/mile</td>
                </tr>
                <tr>
                    <td>Road/Gate Toll</td>
                    <td>1 cp</td>
                </tr>
                <tr>
                    <td>Ship's Passage</td>
                    <td>1 sp/mile</td>
                </tr>
                <tr>
                    <td>First Level Spell</td>
                    <td>10 - 30gp + Components</td>
                </tr>
                <tr>
                    <td>Second Level Spell</td>
                    <td>30 - 50gp + Components</td>
                </tr>
                <tr>
                    <td>Third+ Level Spell</td>
                    <td>Usually a service for service.</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
  }
}

export default ServicesTable;
