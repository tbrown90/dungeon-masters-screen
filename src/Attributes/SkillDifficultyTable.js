import React, { Component } from 'react';

class SkillDifficultyTable extends Component {
  render() {
    return (
<div className="dm-container">
	<div className="dm-container-name">Typical Difficulty Classes</div>
	<table className="dm-container-table center width-100">
		<thead>
			<tr>
				<th>Task Difficulty</th>
				<th>DC</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Trivial</td>
				<td>5</td>
			</tr>
			<tr>
				<td>Easy</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Moderate</td>
				<td>15</td>
			</tr>
			<tr>
				<td>Hard</td>
				<td>20</td>
			</tr>
			<tr>
				<td>Very Hard</td>
				<td>25</td>
			</tr>
			<tr>
				<td>Nearly Impossible</td>
				<td>30</td>
			</tr>
		</tbody>
	</table>
</div>
    );
  }
}

export default SkillDifficultyTable;
