import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { predicateNote } from '../helpers/predicateNote'
import { Note } from '../types/note'
import CardPayer from './CardPayer'
import DivKeyboard from './DivKeyboard'

const DivHome = () => {
  const classes = useStyles()

  const [notes, setNotes] = useState<Note[]>([])

  const onAddNote = (key: string | null, octave: number) => {
    if (key === null) return
    const index = notes.findIndex(predicateNote([key, octave]))
    if (index === -1) {
      setNotes(_notes => [..._notes, [key, octave]])
      return
    }
    onDeleteNote([key, octave])
  }

  const onDeleteAll = () => {
    setNotes([])
  }

  const onDeleteNote = (note: Note) => {
    const index = notes.findIndex(predicateNote(note))
    setNotes(_notes => {
      _notes.splice(index, 1)
      return [..._notes]
    })
  }

  const octaves = [0, 1, 2]

  return (
    <div className={classes.root}>
      <DivKeyboard
        notes={notes}
        octaves={octaves}
        onAddNote={onAddNote}
        rootOctave={2}
      />
      <CardPayer
        onDeleteAllNote={onDeleteAll}
        onDeleteNote={onDeleteNote}
        notes={notes}
      />
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      display: 'grid',
      gridGap: spacing(4),
      margin: '0 auto',
      maxWidth: breakpoints.values.lg,
      minWidth: breakpoints.values.md,
      width: '100%'
    }
  }
})

export default DivHome
