const fs = require('fs').promises
const path = require('path')

const TASKS_FILE = path.join(__dirname, '../data/tasks.json')

// Helper functions for file operations
async function readTasks() {
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading tasks:', error)
    return []
  }
}

async function writeTasks(tasks) {
  try {
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2))
  } catch (error) {
    console.error('Error writing tasks:', error)
    throw new Error('Failed to save tasks')
  }
}

const resolvers = {
  Query: {
    tasks: async () => {
      return await readTasks()
    }
  },
  Mutation: {
    updateTaskStatus: async (_, { id, status }) => {
      const tasks = await readTasks()
      const taskToUpdate = tasks.find(t => t.id === id)
      
      const task = {
        id,
        title: taskToUpdate?.title,
        description: taskToUpdate?.description,
        status,
        updatedAt: new Date().toISOString()
      }   
 
      filteredTasks.push(task)
      await writeTasks(filteredTasks)
      
      return task
    },
    createTask: async (_, { title, description }) => {
      const tasks = await readTasks()
      const task = {
        id: String(tasks.length + 1),
        title,
        description,
        status: 'TODO'
      }
      tasks.push(task)
      await writeTasks(tasks)
      return task
    }
  }
}

module.exports = { resolvers } 