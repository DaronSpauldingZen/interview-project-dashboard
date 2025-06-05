import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TaskCard from './TaskCard'
import { useMutation } from '../../hooks'

// Mock the useMutation hook
vi.mock('../../hooks', () => ({
  useMutation: vi.fn()
}))

describe('TaskCard', () => {
  const mockTask = {
    id: '1',
    title: 'Fix task status update mutation',
    description: 'Investigate and fix the issue with task status updates',
    status: 'TODO'
  }

  const renderTaskCard = (props = {}) => {
    return render(<TaskCard task={mockTask} {...props} />)
  }

  it('renders task information correctly', () => {
    useMutation.mockReturnValue({
      mutate: vi.fn(),
      isLoading: false,
      error: null
    })

    renderTaskCard()
    
    // Use more specific queries that match how users interact with the UI
    expect(screen.getByRole('heading', { name: mockTask.title })).toBeInTheDocument()
    expect(screen.getByText(mockTask.description)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: mockTask.status })).toBeInTheDocument()
  })

  it('calls mutation when status chip is clicked', async () => {
    const mockMutate = vi.fn()
    useMutation.mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      error: null
    })

    renderTaskCard()
    
    // Use getByRole to find the button by its accessible name
    const statusChip = screen.getByRole('button', { name: mockTask.status })
    fireEvent.click(statusChip)
    
    expect(mockMutate).toHaveBeenCalledWith({
      id: mockTask.id,
      status: 'IN_PROGRESS'
    })
  })

  it('disables status chip during mutation', () => {
    useMutation.mockReturnValue({
      mutate: vi.fn(),
      isLoading: true,
      error: null
    })

    renderTaskCard()
    
    const statusChip = screen.getByRole('button', { name: mockTask.status })
    expect(statusChip).toBeDisabled()
  })

  it('handles mutation errors', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const mockError = new Error('Failed to update status')
    
    useMutation.mockReturnValue({
      mutate: vi.fn().mockRejectedValue(mockError),
      isLoading: false,
      error: mockError
    })

    renderTaskCard()
    
    const statusChip = screen.getByRole('button', { name: mockTask.status })
    fireEvent.click(statusChip)
    
    expect(consoleSpy).toHaveBeenCalledWith('Error updating task status:', mockError)
    consoleSpy.mockRestore()
  })
}) 