// src/App.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPlayers } from './partySlice';
import PlayerForm from './components/PlayerForm';
import PartyList from './components/PartyList';
import './App.css';

function App() {
    const players = useSelector(selectPlayers);

    return (
        <div className="container fantasy">
            <h1>RPG Party App</h1>
            <PlayerForm />
            <PartyList />
        </div>
    );
}

export default App;
