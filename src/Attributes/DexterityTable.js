import React, { Component } from 'react';

class DexterityTable extends Component {
  render() {
    return (
      <div>
        <table class="attribute-table">
          <tr>
            <th colspan="2">Acrobatics</th>
          </tr>
          <tr>
            <td>Easy</td>
            <td>Walk on an icy surface. Stay upright in a turbulant situation. Land safely on difficult terrain.</td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>Walk along a narrow ledge. Swing from a chandelier and land on your feet.</td>
          </tr>
          <tr>
            <td>Hard</td>
            <td>Cross a wildly swaying rope bridge.</td>
          </tr>
          <tr>
            <td>Very Hard</td>
            <td>Walk across a tightrope. Vault over or under an enemy.</td>
          </tr>
        </table>

        <table class="attribute-table">
          <tr>
            <th colspan="2">Sleight of Hand</th>
          </tr>
          <tr>
            <td>Easy</td>
            <td>Perform simple acts of legerdemain such as palming a coin sized object.</td>
          </tr>
          <tr>
            <td>Contest vs WIS</td>
            <td>Break through a wooden door reinforced with iron. Hang on to a wagon while being dragged behind it.</td>
          </tr>
        </table>

        <table class="attribute-table">
          <tr>
            <th colspan="2">Stealth</th>
          </tr>
          <tr>
            <td>Contest vs WIS</td>
            <td>Conceal yourself from enemies, sneak past unsuspecting targets, slip away while others are distracted.</td>
          </tr>
        </table>

        <table class="attribute-table">
          <tr>
            <th colspan="2">Pick Lock, Disarm Trap, Other</th>
          </tr>
          <tr>
            <td>Easy</td>
            <td>Pick a simple lock. Jam a simple trap. Perform a task requiring particularly dextrous hands.</td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>Pick a typical lock. Escape from tight rope bindings. Securely restrain a prisoner.</td>
          </tr>
          <tr>
            <td>Hard</td>
            <td>Pick an elaborate lock. Disarm a trap of average complexity. Steer a chariot around a tight corner.</td>
          </tr>
          <tr>
            <td>Very Hard</td>
            <td>Pick a masterwork lock. Disarm a complex trap. Escape from locked masterwork manacles.</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DexterityTable;
