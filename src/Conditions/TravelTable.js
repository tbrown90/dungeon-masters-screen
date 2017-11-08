import React, { Component } from 'react';

class TravelTable extends Component {
  render() {
    return (
        <div className="dm-container">
            <div className="dm-container-name">Traveling by Foot</div>
            <div className="dm-container-description">A group of adventurers can travel for eight hours each day. Use Passive Perception to determine if threats are noticed.</div>
            <table className="dm-container-table width-100">
                <thead>
                    <tr>
                        <th>Pace</th>
                        <th>per Minute</th>
                        <th>per Hour</th>
                        <th>per Day</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Slow</td>
                        <td>200 ft</td>
                        <td>2 miles</td>
                        <td>18 miles</td>
                        <td>Able to stealth</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>300 ft</td>
                        <td>3 miles</td>
                        <td>24 miles</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Fast</td>
                        <td>400 ft</td>
                        <td>4 miles</td>
                        <td>30 miles</td>
                        <td>-5 penalty to Passive Perception</td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
  }
}

export default TravelTable;
