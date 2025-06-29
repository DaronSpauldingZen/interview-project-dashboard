import { AppBar, Toolbar, Typography, Container } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project Management Dashboard
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar 