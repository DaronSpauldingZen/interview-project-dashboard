import { Card, CardContent, Typography, Chip, Box } from '@mui/material'
import { useMutation } from '../../hooks'

const UPDATE_TASK_STATUS = `
  mutation UpdateTaskStatus($id: ID!, $status: TaskStatus!) {
    updateTaskStatus(id: $id, status: $status) {
      id
      status
    }
  }
`

const statusColors = {
  TODO: 'warning',
  IN_PROGRESS: 'info',
  DONE: 'success'
}

/**
 * TaskCard component displays a single task with status management
 * @param {Object} props - Component props
 * @param {Object} props.task - The task data
 * @returns {JSX.Element} The TaskCard component
 */
const TaskCard = ({ task }) => {
  const { mutate, isLoading } = useMutation(UPDATE_TASK_STATUS)

  const handleStatusChange = async (newStatus) => {
    try {
      await mutate({
        id: task.id,
        status: newStatus
      })
    } catch (error) {
      console.error('Error updating task status:', error)
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {task.title}
        </Typography>
        <Typography color="text.secondary" paragraph>
          {task.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={task.status}
            color={statusColors[task.status]}
            onClick={() => handleStatusChange(task.status === 'TODO' ? 'IN_PROGRESS' : 'DONE')}
            disabled={isLoading}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default TaskCard 