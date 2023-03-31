import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  userId: string | null | number;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      // state.token = action.payload;
      state.userId = action.payload;
    },
    loginFailure(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.userId = null;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.userId = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
