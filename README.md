# Project Management Dashboard Challenge

## Overview
This is a 45-minute technical challenge for a senior fullstack JavaScript developer position. The challenge focuses on building a Project Management Dashboard using React and GraphQL.

## Tech Stack
- Frontend: React with Material-UI (MUI)
- Backend: Node.js with Fastify and GraphQL
- State Management: React Hooks
- Testing: Vitest and React Testing Library

## Challenge Tasks

### 1. Server-Side Bug Fix (10 minutes)
- [ ] Identify and fix the issue in the task status update mutation
- [ ] Ensure proper error handling in the GraphQL resolver
- [ ] Verify the fix works with the frontend implementation

### 2. Task Management Implementation (20 minutes)
- [ ] Implement the GraphQL mutation for updating task status
- [ ] Add error handling for failed status updates
- [ ] Implement optimistic updates for better UX
- [ ] Add loading states during status updates

### 3. Task Creation Feature (15 minutes)
- [ ] Create a new task form component
- [ ] Implement the GraphQL mutation for creating tasks
- [ ] Add form validation
- [ ] Add loading state during task creation

## Project Structure
```
client/
  ├── src/
  │   ├── components/
  │   │   ├── TaskList/        # Task list component
  │   │   ├── TaskCard/        # Individual task card
  │   │   ├── TaskForm/        # Task creation form
  │   │   └── ErrorBoundary/   # Error handling component
  │   ├── App.jsx
  │   └── main.jsx
server/
  ├── src/
  │   ├── schema/             # GraphQL schema
  │   ├── resolvers/          # GraphQL resolvers
  │   └── index.js           # Server entry point
```

## Getting Started
Start both servers in development mode (in separate terminal windows):
```bash
# Terminal 1 - Start the client (runs on http://localhost:5173)
cd client
npm run dev

# Terminal 2 - Start the server (runs on http://localhost:3000)
cd server
npm run dev
```

## GraphQL Schema
```graphql
type Task {
  id: ID!
  title: String!
  description: String
  status: TaskStatus!
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  DONE
}

type Mutation {
  updateTaskStatus(id: ID!, status: TaskStatus!): Task
  createTask(title: String!, description: String): Task
}

type Query {
  tasks: [Task!]!
}
```

## Notes
- The challenge is designed to be completed in 45 minutes
- Focus on implementing core functionality first
- Follow the existing code patterns and conventions
- Use Material-UI components for consistent styling
- Pay attention to both frontend and backend code

## Available Components
- `TaskList`: Displays a grid of tasks with status management
- `TaskCard`: Individual task display with status updates
- `ErrorBoundary`: Handles component errors gracefully
- `TaskForm`: Task creation form (to be implemented)

# Interview Project Dashboard

This is a full-stack application with a React frontend and Fastify backend.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Project Structure

- `client/` - React frontend application
- `server/` - Fastify backend server

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The server will start on http://localhost:3000

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will start on http://localhost:5173

## Development

- The frontend is built with React and uses Vite as the build tool
- The backend uses Fastify with GraphQL (Mercurius)
- Material-UI is used for the frontend components

## Available Scripts

### Frontend (in client directory)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (in server directory)
- `npm start` - Start the server

## Environment Variables

Make sure to set up any required environment variables in both client and server directories. Check the respective `.env.example` files (if available) for required variables.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

ISC 