import { createMuiTheme } from '@material-ui/core/styles'

import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'

export const myTheme = createMuiTheme({
  palette: {
    primary: { main: '#F9F7F3' },
    secondary: { main: '#4596ec' },
  },
  typography: {
    useNextVariants: true,
  },
})
