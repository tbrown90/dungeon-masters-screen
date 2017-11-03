import React, { Component } from 'react';

class DamageTable extends Component {
  render() {
    return (
        <div className="dm-container">
            <div className="dm-container-name">Damage and Dying</div>
            <table className="dm-container-table width-100">
                <tbody>
                    <tr>
                        <td>Unconcious</td>
                        <td>When you are reduced to zero hit points you fall unconcious. There are no negative hit point values.</td>
                    </tr>
                    <tr>
                        <td>Death Saving Throws</td>
                        <td>Whenever you start your turn with zero hit points, you must make a death saving throw. Not to be confused with a Constitution saving throw. On a roll of 10 or higher, you succeed. Otherwise, you fail. On your third success you become stable while on your third failure you die. These results need not be consecutive. On a roll of 1, you suffer two failures while on a roll of 20 become stable and gain one hit point.</td>
                    </tr>
                    <tr>
                        <td>Damage at zero Hit Points</td>
                        <td>If you take any damage while at zero hit points you suffer a death saving throw failure. If this damage is from a critical hit, you instead suffer two failures. If this damage is greater than or equal to your hit point maximum, you suffer instant death.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default DamageTable;
