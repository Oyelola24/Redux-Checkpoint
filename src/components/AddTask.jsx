// AddTask Component - Form for adding new todos
// This component handles the creation of new todo items

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTask = () => {
  // Local state for managing the input field value
  const [taskDescription, setTaskDescription] = useState('');
  
  // Get the dispatch function from Redux to send actions
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Only add task if description is not empty (after trimming whitespace)
    if (taskDescription.trim()) {
      // Dispatch the addTodo action with the task description
      dispatch(addTodo(taskDescription.trim()));
      
      // Clear the input field after adding the task
      setTaskDescription('');
    }
  };

  return (
    <div className="add-task">
      <h2>Add New Task</h2>
      
      {/* Form for adding new tasks */}
      <form onSubmit={handleSubmit}>
        {/* Input field for task description */}
        <input
          type="text"
          value={taskDescription} // Controlled input - value comes from state
          onChange={(e) => setTaskDescription(e.target.value)} // Update state on change
          placeholder="Enter task description..."
          className="task-input"
        />
        
        {/* Submit button to add the task */}
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
