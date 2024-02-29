import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slice';

const store = configureStore({
	reducer: {
		themeSlice: themeSlice,
	},
});

export default store;
