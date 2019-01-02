import React from 'react'
import styled from 'styled-components'
import Weather from '@/utils/forecast/react-forecast.js'
const Div = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`
export default () => {
  return (
    <Div>
      <Weather latitude={34.05} longitude={118.25} name="Los Angeles" />
    </Div>
  )
}
