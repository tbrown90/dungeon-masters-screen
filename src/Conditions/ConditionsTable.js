import React, { Component } from 'react';

class ConditionsTable extends Component {
  render() {
    return (
        <div className="dm-container">
            <div className="dm-container-name">Conditions</div>
            <table className="dm-container-table width-100">
                <tbody>
                    <tr>
                        <td>Blinded</td>
                        <td>Automatically fail any check requiring sight. Disadvantage on attack rolls. Attackers have advantage.</td>
                    </tr>
                    <tr>
                        <td>Charmed</td>
                        <td>Cannot attack the charmer or target them with harmful abilities or effects. Charmer has advantage on interracting socially with the charmed creature.</td>
                    </tr>
                    <tr>
                        <td>Deafened</td>
                        <td>Automatically fail any ability check that requires hearing.</td>
                    </tr>
                    <tr>
                        <td>Dead</td>
                        <td>You are dead. Sorry. You've got a couple of options: Activate plot armor, come back to life through magical means, or roll a new character.</td>
                    </tr>
                    <tr>
                        <td>Exhausted</td>
                        <td>See Exhaustion Table</td>
                    </tr>
                    <tr>
                        <td>Falling</td>
                        <td>At the end of a fall a creature takes 1d6 bludgeoning damage for every 10 feet they fell (max 20d6). A creature who takes damage this way is knocked prone.</td>
                    </tr>
                    <tr>
                        <td>Frightened</td>
                        <td>Disadvantage on ability checks and attack rolls while the source of the fear is within sight. Cannot willingly move towards the source of the fear.</td>
                    </tr>
                    <tr>
                        <td>Grappled</td>
                        <td>Speed reduced to 0. Ends when grappler is incapacitated, is no longer within reach, or fails a skill contest.</td>
                    </tr>
                    <tr>
                        <td>Incapacitated</td>
                        <td>Cannot take actions or reactions.</td>
                    </tr>
                    <tr>
                        <td>Incorporeal</td>
                        <td>Resistance against nonmagical damage; targets are resistant against non magical damage from an incorporeal source. Can move through objects and other creatures but must end movement in an empty space.</td>
                    </tr>
                    <tr>
                        <td>Invisible</td>
                        <td>Considered heavily obscured for the purposes of hiding. Advantage on attack rolls, Attackers have disadvantage.</td>
                    </tr>
                    <tr>
                        <td>Paralyzed</td>
                        <td>Incapacitated and cannot move or speak. Automatically fails Strength and Dexterity saving throws. Attackers have advantage and any attack that hits and is made from within 5 feet is a crit.</td>
                    </tr>
                    <tr>
                        <td>Petrified</td>
                        <td>Weight increases by a factor of 10 and no longer age. Incapacitated cannot move or speak, and unaware of surroundings. Automatically fail Strength an Dexterity saving throws. Attackers have advantage. Resistance to all damage. Any poison or disease already afflicting the target is suspended and the targe becomes immune to poison and disease.</td>
                    </tr>
                    <tr>
                        <td>Poisoned</td>
                        <td>Disadvantage on attack rolls and ability checks.</td>
                    </tr>
                    <tr>
                        <td>Prone</td>
                        <td>Only movement option is crawl until standing up. Disadvantage on attack rolls. Attackers within 5 feet have advantage, otherwise they have disadvantage. Can stand up using half of your total movement speed.</td>
                    </tr>
                    <tr>
                        <td>Restrained</td>
                        <td>Speed reduced to 0. Disadvantage on attack rolls and Dexterity saving throws. Attackers have advantage.</td>
                    </tr>
                    <tr>
                        <td>Squeezing</td>
                        <td>Considered one size category smaller for the purposes of movement through tight areas. Every foot of movement costs an extra foot. Disadvantage on attack rolls and Dexterity saving throws. Attackers have advantage.</td>
                    </tr>
                    <tr>
                        <td>Stable</td>
                        <td>0 hit points and unconcious but don't need to make Death saving throws. Any damage taken causes the creature to stop being stable and to resume making Death saving throws. The Stable condition ends when the creature is no longer at 0 hit points. If still at 0 hit points after 1d4 hours, regain 1 hit point.</td>
                    </tr>
                    <tr>
                        <td>Stunned</td>
                        <td>Incapacitated and cannot move. Ability to speak is impaired but not lost. Automatically fail Strength and Dexterity saving throws. Attackers have advantage.</td>
                    </tr>
                    <tr>
                        <td>Unconscious</td>
                        <td>Incapacitated, cannot move or speak, and unaware of surroundings. Drop any held items and fall prone. Automatically fail Strength and Dexterity saving throws. Attackers have advantage and any attack that hits from within 5 feet is a crit.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default ConditionsTable;
