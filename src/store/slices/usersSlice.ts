import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  company: {
    department: string;
    name: string;
    title: string;
  };
}

interface UsersState {
  users: UserProps[];
  currentUser: UserProps | null;
}

// Define the initial state using that type
const initialState: UsersState = {
  users: [],
  currentUser: null,
};

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<UserProps>) {
      // Update current user in state
      state.currentUser = action.payload;
    },
    setUsers(state, action: PayloadAction<UserProps[]>) {
      // Update users in state
      state.users = [...action.payload];
    },
  },
});

export const { setCurrentUser } = counterSlice.actions;

export default counterSlice.reducer;
