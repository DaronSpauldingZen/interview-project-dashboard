import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <TaskList />
    </ThemeProvider>
  )
}

export default App
