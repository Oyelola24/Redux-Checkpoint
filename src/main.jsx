// Application Entry Point - Main.jsx
// This file is the entry point of the React application and sets up Redux

import { StrictMode } from 'react' // React's StrictMode for development checks
import { createRoot } from 'react-dom/client' // React 18's createRoot API
import { Provider } from 'react-redux' // Redux Provider to make store available to all components
import { store } from './store/store' // Import the configured Redux store
import './index.css' // Import global styles
import App from './App.jsx' // Import the main App component

// Create the root element and render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Redux Provider makes the store available to all child components */}
    <Provider store={store}>
      {/* Main App component */}
      <App />
    </Provider>
  </StrictMode>,
)
