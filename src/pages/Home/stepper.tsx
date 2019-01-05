import React, { useState } from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const car1 = require('@/assets/car1.jpg')
const car2 = require('@/assets/car2.jpg')
const car3 = require('@/assets/car3.jpg')
const car4 = require('@/assets/car4.jpg')

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: car1,
  },
  {
    label: 'Bird',
    imgPath: car2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath: car3,
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath: car4,
  },
]

const Img = styled.img`
  display: block;
  max-width: 400px;
  overflow: hidden;
  width: 100%;
  border-radius: 15px;
`

const Div = styled.div`
  margin-top: -80px;
  margin-right: 15px;
  margin-left: 15px;
`

export default () => {
  const height = 90
  const width = '100%'
  const url = './weather/ads.html'
  return <iframe height={height} width={width} frameBorder="0" src={url} />
}
