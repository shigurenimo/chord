import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Note } from '../types/note'
import { DivKeyboardOctave } from './DivKeyboardOctave'

type Props = {
  notes: Note[]
  octaves: number[]
  onAddNote: (note: string | null, octave: number) => void
  rootOctave: number
}

export const DivKeyboard: FunctionComponent<Props> = ({
  notes,
  octaves,
  onAddNote,
  rootOctave
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {octaves.map(octave => (
        <DivKeyboardOctave
          key={octave}
          notes={notes}
          octave={rootOctave + octave}
          onAddNote={onAddNote}
        />
      ))}
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(0.5),
      height: spacing(40)
    }
  }
})

export default DivKeyboard
