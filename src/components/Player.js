// src/components/Player.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DiceRoller from './DiceRoller';
import { removePlayer } from '../partySlice';

const Player = ({ playerName }) => {
    const [rolls, setRolls] = useState([]);
    const dispatch = useDispatch();

    const handleRemovePlayer = () => {
        dispatch(removePlayer(playerName));
    };

    const handleDiceRoll = (result, diceType) => {
        const timestamp = new Date();
        const newRoll = { result, diceType, timestamp };

        // Update the state with the previous rolls and the new roll
        setRolls((prevRolls) => [...prevRolls, newRoll].slice(-3));
    };

    return (
        <div className="player-container">
            <div className="player-header">
                <h2>{playerName}</h2>
                <button onClick={handleRemovePlayer}>Remove</button>
            </div>
            <DiceRoller onDiceRoll={handleDiceRoll} />
            <ul>
                {rolls.map((roll, index) => (
                    <li key={index} className={index === rolls.length - 1 ? 'newest-result' : ''}>
                        {formatTimestamp(roll.timestamp)} Result: {roll.result} ({roll.diceType})
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Helper function to format timestamp for display
const formatTimestamp = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
};

export default Player;
