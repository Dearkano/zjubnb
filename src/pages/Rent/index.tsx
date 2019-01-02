import React from 'react'
import styled from 'styled-components'

import { List, ListItem } from '@material-ui/core'

import Item from './item'

import { IRent } from '@zjubnb'

const room1 = require('@/assets/room1.png')
const room2 = require('@/assets/room2.png')
const room3 = require('@/assets/room3.png')
const room4 = require('@/assets/room4.png')
const room5 = require('@/assets/room5.png')

const ListS = styled(List)`
    width: 100%;
`

export default () => (
  <ListS>
    {data.map(item => (
      <ListItem key={item.id}>
        <Item data={item} />
      </ListItem>
    ))}
  </ListS>
)

const data: IRent[] = [
  {
    id: 1,
    title: 'Manhutton Lux',
    description: 'Loft.Like.Love.Lots.Look',
    price: 99,
    bed: 2,
    rateAmount: 487,
    rate: 5,
    type: 'PRIVATE ROOM',
    src: room1,
  },
  {
    id: 2,
    title: 'Soho loft with massive coach for extra sleepers',
    description: '',
    price: 80,
    bed: 2,
    rateAmount: 113,
    rate: 4.5,
    type: 'PRIVATE ROOM',
    src: room2,
  },
  {
    id: 3,
    title: 'Studio Apartment Minutes',
    description: 'Away from Time Square',
    price: 95,
    bed: 1,
    rateAmount: 94,
    rate: 5,
    type: 'ENTIRE APARTMENT',
    src: room3,
  },
  {
    id: 4,
    title: 'Penthouse Sudio East 50s',
    description: 'Terrace',
    price: 135,
    bed: 1,
    rateAmount: 284,
    rate: 4.5,
    type: 'ENTIRE APARTMENT',
    src: room4,
  },
  {
    id: 5,
    title: 'Times Square luxury Place',
    description: '',
    price: 110,
    bed: 0,
    rateAmount: 253,
    rate: 4.5,
    type: 'ENTIRE APARTMENT',
    src: room5,
  },
]
