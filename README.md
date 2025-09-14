# 📝 ToDo Application with Redux

A modern, feature-rich ToDo application built with React and Redux Toolkit for efficient state management. This project demonstrates best practices in React development, Redux state management, and component architecture.

![ToDo App Preview](https://img.shields.io/badge/React-19.1.1-blue) ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.9.0-purple) ![Vite](https://img.shields.io/badge/Vite-7.1.2-green)

## 🚀 Features

### Core Functionality
- ✅ **Add New Tasks** - Create tasks with descriptions
- ✅ **Mark as Complete** - Toggle task completion status
- ✅ **Edit Tasks** - Inline editing with save/cancel options
- ✅ **Delete Tasks** - Remove tasks permanently
- ✅ **Filter Tasks** - View all, completed, or pending tasks

### User Experience
- 🎨 **Modern UI** - Clean, responsive design
- 📱 **Mobile Friendly** - Responsive layout for all devices
- ⚡ **Fast Performance** - Optimized with Vite and React 19
- 🔄 **Real-time Updates** - Instant state synchronization

### Technical Features
- 🏪 **Redux State Management** - Centralized state with Redux Toolkit
- 🧩 **Component Architecture** - Modular, reusable components
- 🎯 **Type Safety** - ESLint configuration for code quality
- 🔧 **Hot Module Replacement** - Fast development experience

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI Framework |
| **Redux Toolkit** | 2.9.0 | State Management |
| **React Redux** | 9.2.0 | React-Redux Integration |
| **Vite** | 7.1.2 | Build Tool & Dev Server |
| **ESLint** | 9.33.0 | Code Linting |

## 📁 Project Structure

```
src/
├── store/                    # Redux store configuration
│   ├── store.js             # Main store setup
│   └── todoSlice.js         # Todo slice with actions/reducers
├── components/              # React components
│   ├── AddTask.jsx          # Task creation form
│   ├── Task.jsx             # Individual task component
│   └── ListTask.jsx         # Task list with filtering
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
├── App.css                  # Application styles
└── index.css                # Global styles
```

## 🏗️ Architecture Overview

### Redux State Structure
```javascript
{
  todos: {
    todos: [
      {
        id: "unique_id",
        description: "Task description",
        isDone: false
      }
    ],
    filter: "all" // "all" | "done" | "notDone"
  }
}
```

### Component Hierarchy
```
App
├── AddTask (Task Creation)
└── ListTask (Task Management)
    └── Task (Individual Task)
        ├── Checkbox (Toggle Complete)
        ├── Description (Display/Edit)
        └── Actions (Edit/Delete)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-redux
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 How to Use

### Adding Tasks
1. Type your task description in the input field
2. Click "Add Task" or press Enter
3. The task appears in your list immediately

### Managing Tasks
- **Complete a task**: Check the checkbox next to the task
- **Edit a task**: Click "Edit", modify the text, then "Save"
- **Delete a task**: Click the "Delete" button
- **Filter tasks**: Use the filter buttons (All, Not Done, Done)

### Filtering Options
- **All**: Shows all tasks (default)
- **Not Done**: Shows only incomplete tasks
- **Done**: Shows only completed tasks

## 🔧 Redux Implementation Details

### Store Configuration
The Redux store is configured using Redux Toolkit's `configureStore`:

```javascript
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```

### Slice Actions
The todo slice provides these actions:

| Action | Purpose | Parameters |
|--------|---------|------------|
| `addTodo` | Add new task | `description: string` |
| `toggleTodo` | Toggle completion | `id: string` |
| `editTodo` | Update task text | `{id: string, description: string}` |
| `deleteTodo` | Remove task | `id: string` |
| `setFilter` | Change filter | `filter: 'all' \| 'done' \| 'notDone'` |

### State Management Flow
1. **User Action** → Component dispatches action
2. **Action** → Redux reducer processes the action
3. **State Update** → Store state is updated
4. **UI Update** → Components re-render with new state

## 🎨 Styling & Design

### Design Principles
- **Clean & Minimal**: Focus on functionality without clutter
- **Responsive**: Works seamlessly on desktop and mobile
- **Accessible**: Proper contrast ratios and keyboard navigation
- **Modern**: Contemporary design patterns and animations

### CSS Architecture
- **Component-based styling**: Each component has its own styles
- **CSS Variables**: Consistent color scheme and spacing
- **Flexbox Layout**: Modern, flexible layouts
- **Media Queries**: Responsive design breakpoints

## 🧪 Testing & Quality

### Code Quality
- **ESLint**: Configured for React best practices
- **Consistent Formatting**: Standardized code style
- **Component Structure**: Modular, reusable components

### Performance Optimizations
- **React 19**: Latest React features and optimizations
- **Vite**: Fast build tool and HMR
- **Redux Toolkit**: Optimized state management
- **Efficient Re-renders**: Proper state structure

## 🔮 Future Enhancements

### Potential Features
- [ ] **Task Categories** - Organize tasks by categories
- [ ] **Due Dates** - Set and track task deadlines
- [ ] **Priority Levels** - Mark tasks as high/medium/low priority
- [ ] **Search Functionality** - Find tasks quickly
- [ ] **Data Persistence** - Save tasks to localStorage
- [ ] **Drag & Drop** - Reorder tasks by dragging
- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Task Statistics** - View completion rates and trends

### Technical Improvements
- [ ] **TypeScript** - Add type safety
- [ ] **Unit Tests** - Jest and React Testing Library
- [ ] **E2E Tests** - Cypress or Playwright
- [ ] **PWA Support** - Make it installable
- [ ] **Offline Support** - Work without internet connection

## 📚 Learning Resources

### Redux Concepts
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Hooks](https://react-redux.js.org/api/hooks)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)

### React Development
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [ESLint Configuration](https://eslint.org/docs/latest/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ for learning Redux and React best practices.

---

**Happy Coding! 🚀**

*This README provides a comprehensive overview of the ToDo application. Feel free to explore the code and experiment with the features to deepen your understanding of React and Redux development.*