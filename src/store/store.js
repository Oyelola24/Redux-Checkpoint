// Redux Store Configuration
// This file sets up the main Redux store using Redux Toolkit

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// Configure the Redux store with Redux Toolkit
// configureStore provides good defaults for development and production
export const store = configureStore({
  reducer: {
    // Map the 'todos' slice to the store
    // This creates state.todos in the Redux store
    todos: todoReducer,
  },
  // Redux Toolkit automatically includes:
  // - Redux DevTools Extension
  // - Redux Thunk middleware for async actions
  // - Development checks for common mistakes
});

// Export the store as default for easy importing
export default store;
