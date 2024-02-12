import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  // Add other user details as needed
}

const initialState: UserState = {
  name: '',
  // Initialize other user details here
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    // Define other actions to manage user details
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
