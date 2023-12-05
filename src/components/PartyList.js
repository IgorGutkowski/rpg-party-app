// src/components/PartyList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../partySlice';
import Player from './Player';

const PartyList = () => {
    const players = useSelector(selectPlayers);

    return (
        <div className="party-list">
            {players.map((player) => (
                <Player key={player} playerName={player} />
            ))}
        </div>
    );
};

export default PartyList;