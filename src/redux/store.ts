import { configureStore } from '@reduxjs/toolkit';
import { modalReducer, modalSlice } from '@/redux/slices/modalSlice';

export const store = configureStore({
	reducer: {
		[modalSlice.name]: modalReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
