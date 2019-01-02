import React from 'react'
import styled from 'styled-components'
import Air from './air'

const BackGround = styled.div`
  background-color: #FFFFF0;
`

export default () => {
  return (
    <BackGround>
      <Air />
    </BackGround>
  )
}
