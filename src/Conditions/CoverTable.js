import React, { Component } from 'react';

class CoverTable extends Component {
  render() {
    return (
        <div className="dm-container">
            <div className="dm-container-name">Cover</div>
            <table className="dm-container-table width-100">
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Half Cover</td>
                        <td>Grants +2 bonus to AC and Dexterity saving throws.</td>
                    </tr>
                    <tr>
                        <td>Three-quarters cover</td>
                        <td>Grants +5 bonus to AC and Dexterity saving throws.</td>
                    </tr>
                    <tr>
                        <td>Total Cover</td>
                        <td>Cannot be targeted directly by attacks or spells, although area of effect spells and abilities are still effective.</td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
  }
}

export default CoverTable;
