import React from 'react';
import styled from 'styled-components'
import { Typography, Button, Fab } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import { navigate } from "@reach/router";
const Root = styled.div`
&&{
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 100px;

}
`
const Icon = styled(CheckCircleIcon).attrs({
  color: 'secondary',
})`
&&{
  width: 200px;
    height: 200px;
}
`
const RedirectButton = styled(Fab).attrs({
  variant: 'extended',
  color: 'secondary',
})`
&&{
}
`
const SubTitle = styled.p`
  && {
    margin-top: 30px;
    margin-bottom:30px;
  }
`
export default () => (
  <Root>
    <Icon />
    <SubTitle>Check Orders Process</SubTitle>
    <RedirectButton>Click To Redirect</RedirectButton>
  </Root>
)