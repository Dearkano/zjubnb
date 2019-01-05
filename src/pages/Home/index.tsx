import React from 'react'
import styled from 'styled-components'
import Air from './air'
import Message from './message'
import Stepper from './stepper'

const BackGround = styled.div`
  background-color: #F9F7F3;
`

export default () => {
  return (
    <BackGround>
      <Air />
      <Stepper />
      <Message />
    </BackGround>
  )
}
