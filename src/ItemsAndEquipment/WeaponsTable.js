import React, { Component } from 'react';

class WeaponsTable extends Component {
  render() {
    return (
        <div className="dm-container">
          <div className="dm-container-name">Weapons</div>    
          <table className="dm-container-table">
            <thead>
                <tr>
                    <th>Weapon</th>
                    <th>Cost</th>
                    <th>Damage</th>
                    <th>Weight</th>
                    <th>Properties</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colspan="5">Simple Melee Weapons</th>
                </tr>
                <tr>
                    <td>Club</td>
                    <td>1sp</td>
                    <td>1d4 Bludgeoning</td>
                    <td>2 lb.</td>
                    <td>Light</td>
                </tr>
                <tr>
                    <td>Dagger</td>
                    <td>2gp</td>
                    <td>1d4 Piercing</td>
                    <td>1 lb.</td>
                    <td>Finesse, Light, Thrown (20/60)</td>
                </tr>
                <tr>
                    <td>Greatclub</td>
                    <td>2sp</td>
                    <td>1d8 Bludgeoning</td>
                    <td>10 lb.</td>
                    <td>Two-handed</td>
                </tr>
                <tr>
                    <td>Handaxe</td>
                    <td>5gp</td>
                    <td>1d6 Slashing</td>
                    <td>2 lb.</td>
                    <td>Light, Thrown (20/60)</td>
                </tr>
                <tr>
                    <td>Javelin</td>
                    <td>5sp</td>
                    <td>1d6 Slashing</td>
                    <td>2 lb.</td>
                    <td>Thrown (30/120)</td>
                </tr>
                <tr>
                    <td>Light Hammer</td>
                    <td>2gp</td>
                    <td>1d4 Bludgeoning</td>
                    <td>2 lb.</td>
                    <td>Light, Thrown (20/60)</td>
                </tr>
                <tr>
                    <td>Mace</td>
                    <td>5gp</td>
                    <td>1d6 Bludgeoning</td>
                    <td>4 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Quarterstaff</td>
                    <td>2sp</td>
                    <td>1d6 Bludgeoning</td>
                    <td>4 lb.</td>
                    <td>Versatile (1d8)</td>
                </tr>
                <tr>
                    <td>Sickle</td>
                    <td>1gp</td>
                    <td>1d4 Slashing</td>
                    <td>2 lb.</td>
                    <td>Light</td>
                </tr>
                <tr>
                    <td>Spear</td>
                    <td>1gp</td>
                    <td>1d6 Piercing</td>
                    <td>3 lb.</td>
                    <td>Thrown (20/60), Versatile (1d8)</td>
                </tr>
                <tr>
                    <td>Unarmed Strike</td>
                    <td>-</td>
                    <td>1 Bludgeoning</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th colspan="5">Simple Ranged Weapons</th>
                </tr>  
                <tr>
                    <td>Crossbow, Light</td>
                    <td>25gp</td>
                    <td>1d8 Piercing</td>
                    <td>5 lb.</td>
                    <td>Ammunition (80/320), Loading, Two-Handed</td>
                </tr>
                <tr>
                    <td>Dart</td>
                    <td>5cp</td>
                    <td>1d4 Piercing</td>
                    <td>1/4 lb.</td>
                    <td>Finesse, Thrown (20/60)</td>
                </tr>
                <tr>
                    <td>Shortbow</td>
                    <td>25gp</td>
                    <td>1d6 Piercing</td>
                    <td>2 lb.</td>
                    <td>Ammunition (80/320), Two-Handed</td>
                </tr>
                <tr>
                    <td>Sling</td>
                    <td>1sp</td>
                    <td>1d4 Bludgeoning</td>
                    <td>-</td>
                    <td>Ammunition (30/120)</td>
                </tr>
                <tr>
                    <th colspan="5">Martial Melee Weapons</th>
                </tr>
                <tr>
                    <td>Battleaxe</td>
                    <td>10gp</td>
                    <td>1d8 Slashing</td>
                    <td>4 lb.</td>
                    <td>Versatile (1d10)</td>
                </tr>
                <tr>
                    <td>Flail</td>
                    <td>10gp</td>
                    <td>1d8 Bludgeoning</td>
                    <td>2 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Glaive</td>
                    <td>20gp</td>
                    <td>1d10 Slashing</td>
                    <td>6 lb.</td>
                    <td>Heavy, Reach, Two-handed</td>
                </tr>
                <tr>
                    <td>Greataxe</td>
                    <td>30gp</td>
                    <td>1d12 Slashing</td>
                    <td>7 lb.</td>
                    <td>Heavy, Two-handed</td>
                </tr>
                <tr>
                    <td>Greatsword</td>
                    <td>50gp</td>
                    <td>2d6 Slashing</td>
                    <td>6 lb.</td>
                    <td>Heavy, Two-handed</td>
                </tr>
                <tr>
                    <td>Halberd</td>
                    <td>20gp</td>
                    <td>1d10 Slashing</td>
                    <td>6 lb.</td>
                    <td>Heavy, Reach, Two-handed</td>
                </tr>
                <tr>
                    <td>Lance</td>
                    <td>10gp</td>
                    <td>1d12 Piercing</td>
                    <td>6 lb.</td>
                    <td>Reach, Special</td>
                </tr>
                <tr>
                    <td>Longsword</td>
                    <td>15gp</td>
                    <td>1d8 Slashing</td>
                    <td>3 lb.</td>
                    <td>Versatile (1d10)</td>
                </tr>
                <tr>
                    <td>Maul</td>
                    <td>10gp</td>
                    <td>2d6 Bludgeoning</td>
                    <td>10 lb.</td>
                    <td>Heavy, Two-handed</td>
                </tr>
                <tr>
                    <td>Morningstar</td>
                    <td>15gp</td>
                    <td>1d8 Piercing</td>
                    <td>4 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Pike</td>
                    <td>5gp</td>
                    <td>1d10 Piercing</td>
                    <td>18 lb.</td>
                    <td>Heavy, Reach, Two-handed</td>
                </tr>
                <tr>
                    <td>Rapier</td>
                    <td>25gp</td>
                    <td>1d8 Piercing</td>
                    <td>2 lb.</td>
                    <td>Finesse</td>
                </tr>
                <tr>
                    <td>Scimitar</td>
                    <td>25gp</td>
                    <td>1d6 Slashing</td>
                    <td>3 lb.</td>
                    <td>Finesse, Light</td>
                </tr>
                <tr>
                    <td>Shortsword</td>
                    <td>10gp</td>
                    <td>1d6 Piercing</td>
                    <td>2 lb.</td>
                    <td>Finesse, Light</td>
                </tr>
                <tr>
                    <td>Trident</td>
                    <td>5gp</td>
                    <td>1d6 Piercing</td>
                    <td>4 lb.</td>
                    <td>Thrown (20/60), Versatile (1d8)</td>
                </tr>
                <tr>
                    <td>War Pick</td>
                    <td>5gp</td>
                    <td>1d8 Piercing</td>
                    <td>2 lb.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Warhammer</td>
                    <td>15gp</td>
                    <td>1d8 Bludgeoning</td>
                    <td>2 lb.</td>
                    <td>Versatile (1d10)</td>
                </tr>
                <tr>
                    <td>Whip</td>
                    <td>2gp</td>
                    <td>1d4 Slashing</td>
                    <td>3 lb.</td>
                    <td>Finesse, Reach</td>
                </tr>
                <tr>
                    <th colspan="5">Martial Ranged Weapons</th>
                </tr>
                <tr>
                    <td>Blowgun</td>
                    <td>10gp</td>
                    <td>1 Piercing</td>
                    <td>1 lb.</td>
                    <td>Ammunition (25/100), Loading</td>
                </tr>
                <tr>
                    <td>Crossbow, hand</td>
                    <td>75gp</td>
                    <td>1d6 Piercing</td>
                    <td>3 lb.</td>
                    <td>Ammunition (30/120), Light, Loading</td>
                </tr>
                <tr>
                    <td>Crossbow, heavy</td>
                    <td>50gp</td>
                    <td>1d10 Piercing</td>
                    <td>18 lb.</td>
                    <td>Ammunition (100/400), Heavy, Loading, Two-handed</td>
                </tr>
                <tr>
                    <td>Longbow</td>
                    <td>50gp</td>
                    <td>1d10 Piercing</td>
                    <td>2 lb.</td>
                    <td>Ammunition (150/600), Heavy, Two-handed</td>
                </tr>
                <tr>
                    <td>Net</td>
                    <td>1gp</td>
                    <td>-</td>
                    <td>3 lb.</td>
                    <td>Special, Thrown (5/15)</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
  }
}

export default WeaponsTable;
