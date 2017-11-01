import React, { Component } from 'react';

class IntelligenceTable extends Component {
  render() {
    return (
<div>
	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Arcana, History, Nature, Religion</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Recall widely known information; identify common people, places, objects, symbols, fauna, or flora.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>Recall more obscure or specific information; identify uncommon people, places, objects, symbols, fauna, or flora.</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>Recall truly esoteric or precise information; identify rare people, places, objects, symbols, fauna, or flora.</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>Recall information that is know only to a few; identify exccedingly rare people, places, objects, symbols, fauna, or flora.</td>
			</tr>
		</tbody>
	</table>

	<table className="dm-container-table">
		<thead>
			<tr>
				<th colspan="2">Investigation, Other</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Easy</td>
				<td>Identify a particularly obvious trap, secret, or coded message. Communicate a simple idea with an intelligent creature you don't share a language with. Discover the true nature of a low-level illusion.</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>Identify a typical trap. Determine the time or cause of death of a recently deceased creature. Estimate the material worth of an item. Discover the true nature of a mid-level illusion.</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>Identify a well-hidden trap, object, or area. Forge a document or identify such a document. Discover the true nature of a high-level illusion.</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>Identify a magically-hidden trap, object, or area. Discern the purpose and process of a complicated device or system. Determine the integrity of a structure, construct, or formation and identify any exploitable weak points.</td>
			</tr>
		</tbody>
	</table>
</div>
    );
  }
}

export default IntelligenceTable;
