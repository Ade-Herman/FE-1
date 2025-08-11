import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find((u) => u.email === email);

    if (!user) {
      return rejectWithValue("No user found with this email.");
    }
    if (user.password !== password) {
      return rejectWithValue("Incorrect password.");
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return user;
  }
);

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("loggedInUser");
    },
    loadUserFromStorage: (state) => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (user) {
        state.user = user;
        state.status = "succeeded";
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout, loadUserFromStorage } = authSlice.actions;

export default authSlice.reducer;
