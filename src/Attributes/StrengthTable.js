import React, { Component } from 'react';

class StrengthTable extends Component {
  render() {
    return (
      <div>
        <table class="attribute-table">
          <tr>
            <th colspan="2">Athletics</th>
          </tr>
          <tr>
            <td>Automatic</td>
            <td>Climb a wall with plenty of hand holds, secure knotted rope, or ladder. Jump a number of feet equal to half your strength score, or your full strength score with a 10 foot running start. Jump into the air a number of feet equal to half of (3 + strength modifier) or the full amount with a 10 foot running start.</td>
          </tr>
          <tr>
            <td>Easy</td>
            <td>Climb a wall lacking an adequate number of hand holds. Tread water in rough conditions. Jump a few feet further than normal. Clear an obstacle such as a low-lying hedge.</td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>Climb a rope lacking a vertical brace. Swim in rough water or against a mild current.</td>
          </tr>
          <tr>
            <td>Hard</td>
            <td>Climb a wall with very few handholds. Catch yourself on a rope or a handhold at the end of a fall or jump. Swim in violent water or against a strong current.</td>
          </tr>
          <tr>
            <td>Very Hard</td>
            <td>Climb a slippery or sheer wall. Climb vertically along an overhang with handholds. Swim in stormy waters.</td>
          </tr>
        </table>

        <table class="attribute-table">
          <tr>
            <th colspan="2">Other feats of Strength</th>
          </tr>
          <tr>
            <td>Easy</td>
            <td>Force open a stuck or broken door. Break free from weak bindings. Pull a stuck object loose.</td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>Break through a wooden door reinforced with iron. Hang on to a wagon while being dragged behind it.</td>
          </tr>
          <tr>
            <td>Hard</td>
            <td>Break through a heavy locked or barred door. Topple a stone statue.</td>
          </tr>
          <tr>
            <td>Very Hard</td>
            <td>Break through a heavy, reinforced door such as a prison or armory door. Hold a door shut against water.</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default StrengthTable;
