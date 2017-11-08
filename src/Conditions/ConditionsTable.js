import React, { Component } from 'react';

class RestingTable extends Component {
  render() {
    return (
        <div className="dm-container">
            <div className="dm-container-name">Conditions</div>
            <table className="dm-container-table width-100">
                <tbody>
                    <tr>
                        <td>Blinded</td>
                        <td>Automatically fail any check requiring sight. Disadvantage on attack rolls. Attackers have advantage.</td>
                    </tr>
                    <tr>
                        <td>Charmed</td>
                        <td>Cannot attack the charmer or target them with harmful abilities or effects. Charmer has advantage on interracting socially with the charmed creature.</td>
                    </tr>
                    <tr>
                        <td>Deafened</td>
                        <td>Automatically fail any ability check that requires hearing.</td>
                    </tr>
                    <tr>
                        <td>Dead</td>
                        <td>You are dead. Sorry. You've got a couple of options: Activate plot armor, come back to life through magical means, or roll a new character.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default RestingTable;
