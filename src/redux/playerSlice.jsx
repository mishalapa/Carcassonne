import { createSlice } from "@reduxjs/toolkit"


const playerSlice = createSlice({
	name: 'users',
	initialState: {
		player: [],
		color: [],
		point: 0,
		winner: '?',
		traders: false,
		base: true,
		dragon: false,
	},
	reducers: {
		addPlayer: (state, action) => {
			if(!state.player.includes(action.payload)) {
				state.player = [...state.player, action.payload]
			} else {
				return
			}
		},
		changeBase:(state, action) => {
			state.base = action.payload
		},
		changeDragon:(state, action) => {
			state.dragon = action.payload
		},
		changeTraders:(state, action) => {
			state.traders = action.payload
		},
		addPoint: (state, action) => {
			state.point = action.payload
		},
		addWinner:  (state, action) => {
			state.winner = action.payload
		},
		deletePlayer: (state, action) => {
			state.player = state.player.filter((user) => user !== action.payload)
		},
		addColor: (state, action) => {
			if(!state.color.includes(action.payload)) {
				state.color = [...state.color, action.payload]
			} else {
				return
			}
		},
		deleteColor: (state, action) => {
			state.color = state.color.filter((color) => color !== action.payload)
		},
		clearColor: (state) => {
			state.color = []
		}
	},
})

export default playerSlice.reducer
export const { addPlayer, deletePlayer, addColor, deleteColor, clearColor, addPoint, addWinner, addGame, changeBase, changeDragon, changeTraders, } = playerSlice.actions
