// ListTask Component - Displays and filters the todo list
// This component manages the display of todos and provides filtering functionality

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';
import Task from './Task';

const ListTask = () => {
  // Get todos and filter from Redux state using useSelector
  const { todos, filter } = useSelector((state) => state.todos);
  
  // Get dispatch function to send actions to Redux
  const dispatch = useDispatch();

  // Filter todos based on the current filter setting
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'done':
        return todo.isDone; // Show only completed tasks
      case 'notDone':
        return !todo.isDone; // Show only incomplete tasks
      default:
        return true; // Show all tasks when filter is 'all'
    }
  });

  // Handle filter button clicks
  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="list-task">
      <h2>Task List</h2>
      
      {/* Filter buttons section */}
      <div className="filter-buttons">
        {/* All tasks button */}
        <button
          className={filter === 'all' ? 'active' : ''} // Highlight active filter
          onClick={() => handleFilterChange('all')}
        >
          All ({todos.length}) {/* Show total count */}
        </button>
        
        {/* Not done tasks button */}
        <button
          className={filter === 'notDone' ? 'active' : ''}
          onClick={() => handleFilterChange('notDone')}
        >
          Not Done ({todos.filter(todo => !todo.isDone).length}) {/* Show incomplete count */}
        </button>
        
        {/* Done tasks button */}
        <button
          className={filter === 'done' ? 'active' : ''}
          onClick={() => handleFilterChange('done')}
        >
          Done ({todos.filter(todo => todo.isDone).length}) {/* Show completed count */}
        </button>
      </div>

      {/* Task list section */}
      <div className="task-list">
        {filteredTodos.length === 0 ? (
          // Show message when no tasks match the current filter
          <p className="no-tasks">
            {filter === 'all' 
              ? 'No tasks yet. Add one above!' // Message for empty list
              : `No ${filter === 'done' ? 'completed' : 'pending'} tasks.` // Message for filtered empty list
            }
          </p>
        ) : (
          // Render Task components for each filtered todo
          filteredTodos.map((todo) => (
            <Task key={todo.id} todo={todo} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListTask;
