import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './slices/tasksSlice';
import { usersApi } from '@/services/users';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice, // Add the generated reducer as a specific top-level slice
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
