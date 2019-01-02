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
  display: 'block';
  max-width: 400px;
  overflow: 'hidden';
  width: '100%';
`

const Div = styled.div`
  margin-top: -80px;
  margin-right: 15px;
  margin-left: 15px;
`

export default () => {
  const [activeStep, setActiveStep] = useState(0)
  const [rtl, setRtl] = useState(false)

  const handleNext = () => setActiveStep(activeStep + 1)

  const handleBack = () => setActiveStep(activeStep - 1)

  const handleStepChange = (nextActiveStep: number) => setActiveStep(nextActiveStep)

  const maxSteps = tutorialSteps.length

  return (
    <Div>
      <AutoPlaySwipeableViews
        axis={rtl ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? <Img src={step.imgPath} alt={step.label} /> : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Div>
  )
}
