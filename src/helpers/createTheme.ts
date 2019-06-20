import { createMuiTheme } from '@material-ui/core'

export const createTheme = () => {
  return createMuiTheme({
    overrides: {},
    palette: {},
    props: { MuiCardActions: { style: { justifyContent: 'flex-end' } } },
    typography: { fontFamily: ['Helvetica', 'sans-serif'].join(',') }
  })
}
