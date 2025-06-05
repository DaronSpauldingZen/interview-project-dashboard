import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TaskList from './TaskList'
import { useQuery } from '../../hooks'

// Mock the useQuery hook
vi.mock('../../hooks', () => ({
  useQuery: vi.fn()
}))

describe('TaskList', () => {
  const mockTasks = [
    {
      id: '1',
      title: 'Fix task status update mutation',
      description: 'Investigate and fix the issue with task status updates',
      status: 'TODO'
    },
    {
      id: '2',
      title: 'Implement task creation form',
      description: 'Create a new form component for adding tasks',
      status: 'IN_PROGRESS'
    }
  ]

  const renderTaskList = () => {
    return render(<TaskList />)
  }

  it('renders task cards with correct data', () => {
    useQuery.mockReturnValue({
      data: { tasks: mockTasks },
      isLoading: false,
      error: null
    })

    renderTaskList()
    
    // Use role-based queries to find elements
    expect(screen.getByRole('heading', { name: mockTasks[0].title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: mockTasks[1].title })).toBeInTheDocument()
    
    // Verify task descriptions are present
    expect(screen.getByText(mockTasks[0].description)).toBeInTheDocument()
    expect(screen.getByText(mockTasks[1].description)).toBeInTheDocument()
  })

  it('shows loading state while fetching tasks', () => {
    useQuery.mockReturnValue({
      data: null,
      isLoading: true,
      error: null
    })

    renderTaskList()
    expect(screen.getByText('Loading tasks...')).toBeInTheDocument()
  })

  it('shows error state when query fails', () => {
    const errorMessage = 'Failed to fetch tasks'
    useQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error(errorMessage)
    })

    renderTaskList()
    expect(screen.getByText(`Error loading tasks: ${errorMessage}`)).toBeInTheDocument()
  })
}) 