import { createSlice } from '@reduxjs/toolkit/react';
import { RootState } from '@/redux/store';

type ModalSliceType = {
	signUpModalOpen: boolean;
};

const initialState: ModalSliceType = {
	signUpModalOpen: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleSignUpModal(state, action) {
			state.signUpModalOpen = action.payload;
		},
	},
});

export const { toggleSignUpModal } = modalSlice.actions;

export const selectCount = (state: RootState) => state.modal.signUpModalOpen;

export const modalReducer = modalSlice.reducer;
