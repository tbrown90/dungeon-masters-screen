import React, { Component } from 'react';

class AttributeSkillsTable extends Component {
  render() {
    return (
<div className="dm-container">
	<div className="dm-container-name">Skills</div>
	<table className="dm-container-table center">
		<thead>
			<tr>
				<th>Ability Score</th>
				<th>Associated Skills</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Strength</td>
				<td>Athletics</td>
			</tr>
			<tr>
				<td>Dexterity</td>
				<td>Acrobatics, Sleight of Hand, Stealth</td>
			</tr>
			<tr>
				<td>Constitution</td>
				<td>N/A (see Constitution table)</td>
			</tr>
			<tr>
				<td>Intelligence</td>
				<td>Arcana, History, Nature, Religion</td>
			</tr>
			<tr>
				<td>Wisdom</td>
				<td>Animal Handling, Insight, Medicine, Perception, Survival</td>
			</tr>
			<tr>
				<td>Charisma</td>
				<td>Deception, Intimidation, Performance, Persuasion</td>
			</tr>
		</tbody>
	</table>
</div>
    );
  }
}

export default AttributeSkillsTable;
