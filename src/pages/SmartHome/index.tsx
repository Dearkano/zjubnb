import React from 'react'
import styled from 'styled-components'
const image = require('@/assets/temperature.png')
const Div = styled.div`
  background: #f9f7f3;
  height: 100vh;
  padding-top: 50px;
`
export default () => (
  <Div>
    <iframe height={260} width={'100%'} frameBorder="0" src={'./light/index.html'} />
    <img src={image} style={{ width: '100%', marginTop: '50px' }} />
  </Div>
)
