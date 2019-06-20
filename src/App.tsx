import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React from 'react'
import DivHome from './components/DivHome'
import { createTheme } from './helpers/createTheme'

const App = () => {
  return (
    <StylesProvider>
      <ThemeProvider theme={createTheme()}>
        <DivHome />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
