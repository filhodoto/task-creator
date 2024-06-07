import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface TaskProps {
  id: number;
  name: string;
  description: string;
}

interface TasksState {
  tasks: TaskProps[];
}

// Define the initial state using that type
const initialState: TasksState = {
  tasks: [],
};

export const counterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<TaskProps>) {
      state.tasks = [...state.tasks, action.payload];
    },
    editTask(state, action: PayloadAction<TaskProps>) {
      // Find task index
      const index = state.tasks.findIndex(
        (user) => user.id === action.payload.id
      );

      // If task exists, update it with payload
      if (index !== -1) state.tasks[index] = action.payload;
    },
    deleteTask(state, action: PayloadAction<TaskProps['id']>) {
      state.tasks = state.tasks.filter((user) => user.id !== action.payload);
    },
  },
});

export const { createTask, editTask, deleteTask } = counterSlice.actions;

export default counterSlice.reducer;
