import React, { Component } from 'react';

class LifestyleTable extends Component {
  render() {
    return (
        <div className="dm-container">
          <div className="dm-container-name">Lifestyle Expenses</div>    
          <table className="dm-container-table">
            <thead>
                <tr>
                    <th>Lifestyle</th>
                    <th>Price/Day</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Wretched</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Squalid</td>
                    <td>1 sp</td>
                </tr>
                <tr>
                    <td>Poor</td>
                    <td>2 sp</td>
                </tr>
                <tr>
                    <td>Modest</td>
                    <td>1 gp</td>
                </tr>
                <tr>
                    <td>Comfortable</td>
                    <td>2 gp</td>
                </tr>
                <tr>
                    <td>Wealthy</td>
                    <td>4 gp</td>
                </tr>
                <tr>
                    <td>Aristocratic</td>
                    <td>10+ gp</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
  }
}

export default LifestyleTable;
