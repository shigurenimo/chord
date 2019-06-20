import { makeStyles } from '@material-ui/styles'
import React from 'react'

const App = () => {
  const classes = useStyles()

  return <div className={classes.root}></div>
}

const useStyles = makeStyles(theme => {
  return {
    root: {}
  }
})

export default App
