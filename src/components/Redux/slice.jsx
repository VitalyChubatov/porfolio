import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isActive: true,
};

const themeSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		theme(state, action) {
			state.isActive = action.payload;
		},
	},
});

export const { theme } = themeSlice.actions;
export default themeSlice.reducer;
