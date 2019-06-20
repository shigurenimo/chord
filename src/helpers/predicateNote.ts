import { Note } from '../types/note'

export const predicateNote = ([key, octave]: Note) => {
  return ([_key, _octave]: Note) => {
    return _key === key && _octave === octave
  }
}
