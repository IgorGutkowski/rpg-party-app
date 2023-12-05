// src/components/DiceRoller.js
import React, { useState } from 'react';

const DiceRoller = ({ onDiceRoll }) => {
    const [result, setResult] = useState(null);
    const [diceType, setDiceType] = useState(null);

    const handleRollDice = (sides) => {
        const randomResult = Math.floor(Math.random() * sides) + 1;
        setResult(randomResult);
        setDiceType(`d${sides}`);
        onDiceRoll(randomResult, `d${sides}`); // Pass the result and dice type to the parent component
    };

    return (
        <div>
            <div className="dice-buttons">
                <button onClick={() => handleRollDice(6)}>Roll d6</button>
                <button onClick={() => handleRollDice(10)}>Roll d10</button>
                <button onClick={() => handleRollDice(20)}>Roll d20</button>
            </div>
        </div>
    );
};

export default DiceRoller;
