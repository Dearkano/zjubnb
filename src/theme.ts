import { createMuiTheme } from '@material-ui/core/styles'

import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'

export const myTheme = createMuiTheme({
  palette: {
    primary: { main: '#FFFFF0' },
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
})
