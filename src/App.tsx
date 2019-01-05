import React from 'react'

import useContainer from '@/hooks/useContainer'

import { MuiThemeProvider } from '@material-ui/core/styles'
import TopBar from '@/components/TopBar'
import DrawerMenu from '@/components/DrawerMenu'
import BackGround from '@/components/BackGround'
import Router from './router'
import { myTheme } from './theme'
import { install } from '@material-ui/styles'

const App = () => (
  <BackGround>
    <TopBar />
    <DrawerMenu />
    <Router />
  </BackGround>
)

const Root = () => {
  install()
  return (
    <MuiThemeProvider theme={myTheme}>
      <App />
    </MuiThemeProvider>
  )
}

export default Root
