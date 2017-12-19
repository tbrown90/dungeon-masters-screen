import React, { Component } from 'react';

class ArmorAndShieldsTable extends Component {
  render() {
    return (
        <div className="dm-container">
          <div className="dm-container-name">Armor & Shields</div>    
          <table className="dm-container-table">
            <thead>
                <tr>
                    <th>Armor</th>
                    <th>Cost</th>
                    <th>Armor Class</th>
                    <th>Weight</th>
                    <th>Properties</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colspan="5">Light Armor</th>
                </tr>
                <tr>
                    <td>Padded</td>
                    <td>5gp</td>
                    <td>11 + Dex Mod</td>
                    <td>8 lb.</td>
                    <td>Disadvantage (Stealth)</td>
                </tr>
                <tr>
                    <td>Leather</td>
                    <td>10gp</td>
                    <td>11 + Dex Mod</td>
                    <td>10 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Studded Leather</td>
                    <td>45gp</td>
                    <td>12 + Dex Mod</td>
                    <td>13 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th colspan="5">Medium Armor</th>
                </tr>
                <tr>
                    <td>Hide</td>
                    <td>10gp</td>
                    <td>12 + Dex Mod (Max 2)</td>
                    <td>12 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Chain Shirt</td>
                    <td>50gp</td>
                    <td>13 + Dex Mod (Max 2)</td>
                    <td>20 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Scale Mail</td>
                    <td>50gp</td>
                    <td>14 + Dex Mod (Max 2)</td>
                    <td>45 lb.</td>
                    <td>Disadvantage (Stealth)</td>
                </tr>
                <tr>
                    <td>Breastplate</td>
                    <td>400gp</td>
                    <td>14 + Dex Mod (Max 2)</td>
                    <td>20 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Half Plate</td>
                    <td>750gp</td>
                    <td>15 + Dex Mod (Max 2)</td>
                    <td>40 lb.</td>
                    <td>Disadvantage (Stealth)</td>
                </tr>
                <tr>
                    <th colspan="5">Heavy Armor</th>
                </tr>
                <tr>
                    <td>Ring Mail</td>
                    <td>30gp</td>
                    <td>14</td>
                    <td>40 lb.</td>
                    <td>Disadvantage (Stealth)</td>
                </tr>
                <tr>
                    <td>Chain Mail</td>
                    <td>75gp</td>
                    <td>16</td>
                    <td>55 lb.</td>
                    <td>Disadvantage (Stealth), Strength (13)</td>
                </tr>
                <tr>
                    <td>Splint</td>
                    <td>200gp</td>
                    <td>17</td>
                    <td>60 lb.</td>
                    <td>Disadvantage (Stealth), Strength (15)</td>
                </tr>
                <tr>
                    <td>Plate</td>
                    <td>1500gp</td>
                    <td>18</td>
                    <td>65 lb.</td>
                    <td>Disadvantage (Stealth), Strength (15)</td>
                </tr>
                <tr>
                    <th colspan="5">Shield</th>
                </tr>
                <tr>
                    <td>Shield</td>
                    <td>10gp</td>
                    <td>+2</td>
                    <td>6 lb.</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
  }
}

export default ArmorAndShieldsTable;
