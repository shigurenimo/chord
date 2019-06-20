import { ButtonBase, Paper, Theme, Typography } from '@material-ui/core'
import { grey, red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'

type Props = {
  active: boolean
  note: string | null
  onClick: () => void
}

export const ButtonKeyboardNote: FunctionComponent<Props> = ({
  active,
  note,
  onClick
}) => {
  const classes = useStyles()

  // some note doesn't have black
  if (note === null) return <div />

  // black key has #
  const isBlack = note.includes('#')

  return (
    <Paper className={classes.root} elevation={active ? 1 : 8}>
      <ButtonBase
        className={classes.button}
        style={{ background: isBlack ? grey[900] : grey[50] }}
        onClick={onClick}
      >
        <Typography
          className={classes.name}
          component={'span'}
          style={{
            color: active ? red[500] : isBlack ? grey[50] : grey[900]
          }}
        >
          {note}
        </Typography>
      </ButtonBase>
    </Paper>
  )
}

const useStyles = makeStyles<Theme>(({ shape, spacing }) => {
  return {
    button: { height: '100%', width: '100%' },
    name: {
      bottom: spacing(2),
      left: 0,
      margin: 'auto',
      position: 'absolute',
      right: 0,
      width: '50%'
    },
    root: { borderRadius: shape.borderRadius, overflow: 'hidden' }
  }
})

export default ButtonKeyboardNote
