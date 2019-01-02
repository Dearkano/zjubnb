import React from 'react'
import styled from 'styled-components'

import stateInstance from '@/containers/state'

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import version from '@/version'

const logo = require('@/assets/primaryLogo.png')

const IconButtonS = styled(IconButton).attrs({
  color: 'inherit',
})`
  && {
    margin-left: -12px;
    margin-right: 5px;
  }
`

const MainText = styled(Typography).attrs({
  color: 'inherit',
})`
  && {
    flex-grow: 1;
  }
`
const Img = styled.img`
  width: 100px;
`
const Version = styled(Button).attrs({
  color: 'inherit',
  size: 'small',
})`
  && {
    margin-right: -12px;
  }
`

const TopBar: React.FunctionComponent = () => (
  <AppBar position="fixed">
    <Toolbar>
      <IconButtonS onClick={stateInstance.OPEN_DRAWER}>
        <MenuIcon />
      </IconButtonS>

      <MainText><Img src={logo} /></MainText>
      <Version>{version}</Version>
    </Toolbar>
  </AppBar>
)

export default TopBar
