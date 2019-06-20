import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Theme
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import Tone from 'tone'
import { Note } from '../types/note'

type Props = {
  notes: Note[]
  onDeleteAllNote: () => void
  onDeleteNote: (note: Note) => void
}

const CardPayer: FunctionComponent<Props> = ({
  notes,
  onDeleteAllNote,
  onDeleteNote
}) => {
  const classes = useStyles()

  const onClick = () => {
    const synth = new Tone.PolySynth(6, Tone.Synth).toMaster()
    if (notes.length === 0) {
      synth.triggerAttackRelease('C4', '4n')
    }
    notes
      .map(([key, octave]) => key + octave)
      .forEach(_note => {
        synth.triggerAttackRelease(_note, '4n')
      })
  }

  const disabled = notes.length === 0

  const toLabel = (note: Note) => note.join('')

  return (
    <Card>
      <CardContent>
        <div className={classes.chips}>
          {disabled && <Chip label={'C4'} variant={'outlined'} />}
          {notes.map(note => (
            <Chip
              color={'primary'}
              key={note.toString()}
              label={toLabel(note)}
              onDelete={() => onDeleteNote(note)}
              variant={'outlined'}
            />
          ))}
        </div>
      </CardContent>
      <CardActions>
        <Button
          color={'primary'}
          disabled={disabled}
          onClick={onDeleteAllNote}
          variant={'outlined'}
        >
          {'Reset'}
        </Button>
        <Button color={'primary'} onClick={onClick} variant={'contained'}>
          {'Play'}
        </Button>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    chips: {
      display: 'grid',
      gridAutoColumns: 'min-content',
      gridAutoFlow: 'column',
      gridGap: spacing(1)
    }
  }
})

export default CardPayer
