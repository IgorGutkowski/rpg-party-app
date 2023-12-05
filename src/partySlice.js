// src/partySlice.js
import { createSlice } from '@reduxjs/toolkit';

const partySlice = createSlice({
    name: 'party',
    initialState: {
        players: [],
    },
    reducers: {
        addPlayer: (state, action) => {
            state.players.push(action.payload);
        },
        removePlayer: (state, action) => {
            state.players = state.players.filter((player) => player !== action.payload);
        },
    },
});

export const { addPlayer, removePlayer } = partySlice.actions;
export const selectPlayers = (state) => state.party.players;
export default partySlice.reducer;
