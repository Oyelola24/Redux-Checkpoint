// Main App Component - Root component of the ToDo application
// This component serves as the main container and orchestrates all other components

import './App.css' // Import application styles
import AddTask from './components/AddTask' // Import component for adding new tasks
import ListTask from './components/ListTask' // Import component for displaying and managing tasks

function App() {
  return (
    <div className="app">
      {/* Application header with title */}
      <header className="app-header">
        <h1>ToDo Application with Redux</h1>
      </header>
      
      {/* Main content area containing the core functionality */}
      <main className="app-main">
        {/* Component for adding new tasks */}
        <AddTask />
        
        {/* Component for displaying and filtering the task lists */}
        <ListTask />
      </main>
    </div>
  )
}

export default App
