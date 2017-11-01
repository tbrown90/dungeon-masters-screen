import React, { Component } from 'react';

class RestingTable extends Component {
  render() {
    return (
        <div className="dm-container">
            <div className="dm-container-name">Resting</div>
            <table className="dm-container-table width-100">
                <thead>
                    <tr>
                        <th>Short Rest</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>A period of downtime lasting at least one hour, during which you can do nothing more strenuous than eating, drinking, reading, or tending to wounds. The following effects resolve at the end of a short rest.</p>
                            <ul>
                                <li>You regain the use of abilities, features, and resources that are refreshed by taking a short rest.</li>
                                <li>You are allowed to expend one of your accumulated Hit Dice by rolling a die of the corresponding type. You regain hit points equal to the rolled value + your constitution modifier. Afterwards you may choose to spend another Hit Die.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="dm-container-table width-100">
                <thead>
                    <tr>
                        <th>Long Rest</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>A period of extended downtime lasting at least eight hours, during which time you must either sleep or perform only light activities such as talking, eating, or standing watch. These activities can occupy no more than 2 hours of your Long Rest. Performing more than an hour of strenuous activity such as walking or fighting will also interrupt your Long Rest. You may only benefit from one Long Rest in a 24-hour period and you must begin the rest with at least one hit point. The following effects resolve at the end of a Long Rest:</p>
                            <ul>
                                <li>You regain the use of abilities, features, and resources that are refreshed by taking a Long Rest.</li>
                                <li>You regain all of your lost hit points unless otherwise indicated.</li>
                                <li>You regain a number of Hit Die equal to up to half your total possible Hit Die.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default RestingTable;
