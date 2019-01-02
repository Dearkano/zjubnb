import React from 'react'
import styled from 'styled-components'
import Air from './air'
import Message from './message'

const BackGround = styled.div`
  background-color: #FFFFF0;
`

export default () => {
  return (
    <BackGround>
      <Air />
      <Message />
    </BackGround>
  )
}
