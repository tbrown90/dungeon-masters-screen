import React, { Component } from 'react';

class CharismaTable extends Component {
  render() {
    return (
<div>
	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Concentration</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Distracting environmental stimuli such as a wave crashing over the deck of a storm tossed ship.</td>
			</tr>
			<tr>
				<td>Variable: max(10, x)</td>
				<td>After taking damage, make a Con saving throw with a DC of max(10, 1/2 damage taken).</td>
			</tr>
		</tbody>
	</table>

	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Forced March</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Variable: DC 10 + x</td>
				<td>At the end of each hour, make a Con saving throw with a DC of 10 + the number of hours traveled past 8. Gain one level of exhaustion on a failed save.</td>
			</tr>
		</tbody>
	</table>

	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Water</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Automatic</td>
				<td>A PC drinking less than half the amount of water needed during the day gains one point of exhaustion at the end of the day, or two if already exhausted.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>A PC drinking more than half the amount of water they require during the day but less than the full amount must succeed on a Con saving throw or advance one level of exhaustion, or two if already exhausted.</td>
			</tr>
		</tbody>
	</table>

	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Air</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td colspan="2">A PC can hold their breath for a number of minutes equal to 1 + their Con modifier (minimum of 30 seconds). When out of breath, a pc can survive a number of rounds equal to their Con modifier before they drop to 0 hit points and begin to die.</td>
			</tr>
		</tbody>
	</table>

	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Food</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td colspan="2">A PC must eat one pound of food per day to subsist. They can go without food a number of days equal to 3 + their Con modifier (minimum 1) before they begin to starve. This day count resets when they eat their fill for a day, otherwise the PC advances one level of exhaustion at the end of each day beyond their limit.</td>
			</tr>
		</tbody>
	</table>
</div>
    );
  }
}

export default CharismaTable;
