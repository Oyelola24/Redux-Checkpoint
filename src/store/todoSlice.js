// Todo Slice - Redux Toolkit Slice for Todo Management
// This file defines the state structure and actions for todo operations

import { createSlice } from '@reduxjs/toolkit';

// Initial state for the todo slice
// This defines the structure of our todo state
const initialState = {
  todos: [], // Array to store all todo items
  filter: 'all', // Current filter: 'all', 'done', or 'notDone'
};

// Create a slice using Redux Toolkit's createSlice
// This automatically generates action creators and reducers
const todoSlice = createSlice({
  name: 'todos', // Name of the slice (used in Redux DevTools)
  initialState, // Initial state object
  reducers: {
    // Action: Add a new todo to the list
    addTodo: (state, action) => {
      // Create a new todo object with required properties
      const newTodo = {
        id: Date.now().toString(), // Generate unique ID using timestamp
        description: action.payload, // Get description from action payload
        isDone: false, // New todos start as incomplete
      };
      // Add the new todo to the todos array
      // Redux Toolkit uses Immer under the hood, so we can "mutate" state
      state.todos.push(newTodo);
    },

    // Action: Toggle the completion status of a todo
    toggleTodo: (state, action) => {
      // Find the todo by ID from the action payload
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        // Toggle the isDone property
        todo.isDone = !todo.isDone;
      }
    },

    // Action: Edit the description of an existing todo
    editTodo: (state, action) => {
      // Destructure id and description from action payload
      const { id, description } = action.payload;
      // Find the todo by ID
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        // Update the description
        todo.description = description;
      }
    },

    // Action: Delete a todo from the list
    deleteTodo: (state, action) => {
      // Filter out the todo with the matching ID
      // Keep all todos except the one with the specified ID
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    // Action: Set the current filter for displaying todos
    setFilter: (state, action) => {
      // Update the filter state with the new filter value
      state.filter = action.payload;
    },
  },
});

// Export action creators for use in components
// These functions can be dispatched to trigger state changes
export const { 
  addTodo,      // Add a new todo
  toggleTodo,   // Toggle todo completion
  editTodo,     // Edit todo description
  deleteTodo,   // Delete a todo
  setFilter     // Change the filter
} = todoSlice.actions;

// Export the reducer for use in the store
export default todoSlice.reducer;
