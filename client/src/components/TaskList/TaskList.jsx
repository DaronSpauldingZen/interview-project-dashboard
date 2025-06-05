import { Grid, Container, Typography } from '@mui/material'
import TaskCard from '../TaskCard'
import { useQuery } from '../../hooks'

const GET_TASKS = `
  query {
    tasks {
      id
      title
      description
      status
    }
  }
`

const TaskList = () => {
  const { data, isLoading, error } = useQuery(GET_TASKS)

  if (isLoading) return <Typography>Loading tasks...</Typography>
  if (error) return <Typography color="error">Error loading tasks: {error.message}</Typography>

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {data?.tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskCard task={task} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default TaskList