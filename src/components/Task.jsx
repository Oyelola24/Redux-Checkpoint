// Task Component - Individual todo item with edit/delete functionality
// This component represents a single todo item and handles its interactions

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo, deleteTodo } from '../store/todoSlice';

const Task = ({ todo }) => {
  // Local state for managing edit mode
  const [isEditing, setIsEditing] = useState(false);
  
  // Local state for the description being edited
  const [editDescription, setEditDescription] = useState(todo.description);
  
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Handle toggling the completion status of the todo
  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  // Handle edit functionality - toggles between edit and save modes
  const handleEdit = () => {
    // If currently editing and description is not empty, save the changes
    if (isEditing && editDescription.trim()) {
      dispatch(editTodo({ id: todo.id, description: editDescription.trim() }));
    }
    // Toggle edit mode
    setIsEditing(!isEditing);
  };

  // Handle deleting the todo
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  // Handle canceling the edit operation
  const handleCancelEdit = () => {
    // Reset the edit description to original value
    setEditDescription(todo.description);
    // Exit edit mode
    setIsEditing(false);
  };

  return (
    <div className={`task ${todo.isDone ? 'completed' : ''}`}>
      {/* Checkbox to toggle completion status */}
      <input
        type="checkbox"
        checked={todo.isDone} // Reflects the current completion status
        onChange={handleToggle} // Toggle completion when clicked
        className="task-checkbox"
      />
      
      {/* Conditional rendering: show input field when editing, otherwise show description */}
      {isEditing ? (
        <input
          type="text"
          value={editDescription} // Controlled input for editing
          onChange={(e) => setEditDescription(e.target.value)} // Update edit state
          className="edit-input"
          autoFocus // Automatically focus the input when entering edit mode
        />
      ) : (
        <span className="task-description">{todo.description}</span>
      )}
      
      {/* Action buttons - different buttons based on edit mode */}
      <div className="task-actions">
        {isEditing ? (
          // Show Save and Cancel buttons when editing
          <>
            <button onClick={handleEdit} className="save-button">
              Save
            </button>
            <button onClick={handleCancelEdit} className="cancel-button">
              Cancel
            </button>
          </>
        ) : (
          // Show Edit and Delete buttons when not editing
          <>
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
            <button onClick={handleDelete} className="delete-button">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
