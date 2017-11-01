import React, { Component } from 'react';

class WisdomTable extends Component {
  render() {
    return (
<div>
	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Deception</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Contest vs VIS</td>
				<td>Fast-talk or con someone. Adopt a disguise or impersonate another creature. Tell a convincing lie or otherwise hide your true intentions.</td>
			</tr>
		</tbody>
	</table>

	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Intimidation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Scare a spineless noble in to handing over their coin purse.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>Pry information out of an uncooperative prisoner. Convince street thugs to back down from a confrontation.</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>Advise a guard that it might be best to look the other way. Coerce an official into signing a document.</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>Frighten a creature larger than you. Stop an agitate mob in their tracks.</td>
			</tr>
		</tbody>
	</table>

	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Performance</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Routine performance such as telling a story in a tavern.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>Professional performance such as an inspiring speech or musical display.</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>Memorable performance which may attract the local patron and lead to national fame.</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>Extraordinary performance which may attract the attention of distant patrons and even extraplanar beings.</td>
			</tr>
		</tbody>
	</table>

	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Persuasion</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Convince the mayor to allow your party to help. Calm a distraught person.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>Persuade a group of highway thieves to leave in peace. Convince a friendly acquaintance that you know best.</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>Convince a chamberlain to let your party see the king. Inspire or rally a crowd of townsfolk. Negotiate peace between warring tribes.</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>Convince a sphinx that you are worthy of its secrets. Assure a dragon you are worth more alive than dead.</td>
			</tr>
		</tbody>
	</table>
</div>
    );
  }
}

export default WisdomTable;
