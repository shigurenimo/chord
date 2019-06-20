import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { predicateNote } from '../helpers/predicateNote'
import { Note } from '../types/note'
import ButtonKeyboardNote from './ButtonKeyboardNote'

type Props = {
  notes: Note[]
  octave: number
  onAddNote: (note: string | null, octave: number) => void
}

export const DivKeyboardOctave: FunctionComponent<Props> = ({
  notes,
  octave,
  onAddNote
}) => {
  const classes = useStyles()

  const blackKeys = ['C#', 'D#', null, 'F#', 'G#', 'A#', null]

  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

  const hasNote = (key: string | null) => {
    return key !== null && !!notes.find(predicateNote([key, octave]))
  }

  return (
    <div className={classes.root}>
      <div className={classes.whiteKeys}>
        {whiteKeys.map((key, index) => (
          <ButtonKeyboardNote
            onClick={() => onAddNote(key, octave)}
            key={index}
            note={key}
            active={hasNote(key)}
          />
        ))}
      </div>
      <div className={classes.blackKeys}>
        {blackKeys.map((key, index) => (
          <ButtonKeyboardNote
            key={index}
            note={key}
            onClick={() => onAddNote(key, octave)}
            active={hasNote(key)}
          />
        ))}
      </div>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    blackKeys: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(0.5),
      height: '50%',
      left: 'calc(100% / 14)',
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    root: {
      height: '100%',
      position: 'relative'
    },
    whiteKeys: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(0.5),
      height: '100%',
      position: 'relative'
    }
  }
})

export default DivKeyboardOctave
