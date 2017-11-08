import React, { Component } from 'react';

class ExhaustionTable extends Component {
  render() {
    return (
        <div className="dm-container">
            <div className="dm-container-name">Exhaustion</div>
            <table className="dm-container-table width-100">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Disadvantage on ability checks</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Speed halved</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Disadvantage on attack rolls and saving throws.</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Hit point maximum halved</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Speed reduced to 0</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Death</td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
  }
}

export default ExhaustionTable;
