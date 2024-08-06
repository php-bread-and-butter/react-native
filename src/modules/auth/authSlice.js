import { createSlice } from "@reduxjs/toolkit";
import { setItem, removeItem } from "../../utils/storage";

const initialState = {
	isAuthenticated: false,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authenticate(state, action) {
			state.isAuthenticated = true;
			state.token = action.payload;
			setItem("token", action.payload);
		},
		logout(state) {
			state.isAuthenticated = false;
			state.token = null;
			removeItem("token");
		},
	},
});

export const { authenticate, logout } = authSlice.actions;

export default authSlice.reducer;
