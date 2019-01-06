import React from 'react'
import styled from 'styled-components'
import Air from './air'
import Message from './message'
const pm = require('@/assets/pm.png')
const humidity = require('@/assets/hum.png')

const BackGround = styled.div`
  background-color: #f9f7f3;
`
const Div = styled.div`
  display: flex;
  margin-left:25px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Left = styled.div``

const Right = styled.div`
  font-size: 1.7rem;
  margin-left: 3rem;
  opacity: 0.7;
`
const Bottom = styled.div``
const Img = styled.img`
  width: 80%;
  height: 120px;
`

export default () => {
  return (
    <BackGround>
      <Air />
      <Div>
        <iframe height={'120px'} width={'100px'} frameBorder="0" src={'./soda/index.html'} />
        <Img src={humidity} />
      </Div>
      <Message />
    </BackGround>
  )
}
