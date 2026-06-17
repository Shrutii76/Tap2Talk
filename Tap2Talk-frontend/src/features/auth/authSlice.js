import { createSlice } from "@reduxjs/toolkit";

// 🔹 Load user from localStorage (persist login)
const storedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: storedUser,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ Set user after login/signup
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;

      // save in localStorage
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    // ✅ Logout
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },

    // ✅ Optional loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // ✅ Optional error handling
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// 🔹 Export actions
export const { setUser, logout, setLoading, setError } = authSlice.actions;

// 🔹 Export reducer
export default authSlice.reducer;
