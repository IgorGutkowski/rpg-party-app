// src/components/PlayerForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../partySlice';

const PlayerForm = () => {
    const [newPlayer, setNewPlayer] = useState('');
    const dispatch = useDispatch();

    const handleAddPlayer = () => {
        if (newPlayer) {
            dispatch(addPlayer(newPlayer));
            setNewPlayer('');
        }
    };

    return (
        <div>
            <h2>Add Player</h2>
            <input
                type="text"
                value={newPlayer}
                onChange={(e) => setNewPlayer(e.target.value)}
                placeholder="Player Name"
            />
            <button onClick={handleAddPlayer}>Add Player</button>
        </div>
    );
};

export default PlayerForm;