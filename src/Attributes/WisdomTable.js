import React, { Component } from 'react';

class WisdomTable extends Component {
  render() {
    return (
<div>
	<table class="attribute-table">
		<thead>
			<tr>
				<th colspan="2">Insight, Perception</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Spot a prominent landmark or structure in the distance. Hear the far-off sound of thunder. Determine if a child is telling the truth.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>Spot a natural-obscured object or feature. Eavesdrop on a conversation in the next room. Discern who amonge a cagey group is the leader. Discern the intended message of a non-verbal communication.</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>Spot a well-hidden object or feature. Eavesdrop on a hushed conversation through a heavy door. Guess at the enemies next action.</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>Spot a nearly-invisible object or feature. Read the lips of a creature you can see but not hear.</td>
			</tr>
			<tr>
				<td>Contest vs CHA</td>
				<td>Determine if someone is lying or disguising their intentions.</td>
			</tr>
			<tr>
				<td>Contest vs DEX</td>
				<td>Spot a creature attempting to hide, hear the movements of a hidden foe.</td>
			</tr>
		</tbody>
	</table>

	<table class="attribute-table">
		<thead>
			<tr>
				<th colspan="2">Survival</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Follow a well-worn trail through a forest. Follow the tracks of a creature through snow or mud. Forage a day's worth of food in a plentiful area. Navigate on a clear night.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>Follow an abandoned or forgotten trail. Track a creature through a forest. Forage a day's worth of food in a sparse area. Navigate on a cloudy night. Predict an oncoming storm. Identify signs of nearby creatures.</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>Track a creature over barren terrain. Forage a day's worth of food in a harsh area. Navigate through an alien area on a cloudy night. Predict tomorrow's weather.</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>Track a creature after rainfall. Navigate in an alien area on a stormy night.</td>
			</tr>
		</tbody>
	</table>

	<table class="attribute-table">
		<thead>
			<tr>
				<th colspan="2">Animal Handling, Medicine</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Calm a domesticated animal. Stabalize a dying creature outside of combat. Diagnose a common ailment.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>Calm a wild but otherwise peaceful animal. Intuit an animal's emotional state. Set a broken bone. Perform a complex manuever while mounted. Stabalize a dying creature in combat. Diagnose an uncommon ailment.</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>Intuit a hostile animal's next action. Control an untrained mount. Diagnose a rare disease.</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>Calm a dangerous wild animal. Diagnose a magical or divine ailment.</td>
			</tr>
		</tbody>
	</table>
</div>
    );
  }
}

export default WisdomTable;
