import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React from 'react'
import DivHome from './components/DivHome'
import { createTheme } from './helpers/createTheme'

const App = () => {
  return (
    <StylesProvider>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <DivHome />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
