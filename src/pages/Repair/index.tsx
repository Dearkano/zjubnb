import React from 'react'

import styled from 'styled-components'

import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'

const DoorIcon = require('@/assets/repair/door.png')
const DeskIcon = require('@/assets/repair/desk.png')
const ElectronicIcon = require('@/assets/repair/electronic.png')
const WashingMachineIcon = require('@/assets/repair/washingmachine.png')
const LandscapeIcon = require('@/assets/repair/landscape.png')
const GarageIcon = require('@/assets/repair/garage.png')
const CarpetIcon = require('@/assets/repair/carpet.png')
const FirePlaceIcon = require('@/assets/repair/fireplace.png')
const AirConditionIcon = require('@/assets/repair/aircondition.png')
const HouseIcon = require('@/assets/repair/house.png')
const FencesIcon = require('@/assets/repair/fences.png')
const TreeServiceIcon = require('@/assets/repair/treeservice.png')
const HandymanIcon = require('@/assets/repair/handyman.png')
const RoofIcon = require('@/assets/repair/roof.png')
const WindowIcon = require('@/assets/repair/window.png')
const PlumbingIcon = require('@/assets/repair/plumbing.png')

const Div = styled.div`
  padding-top: 20px;
  border-bottom: #eaeaea solid 2px;
  background-color: #FFFFF0;
`

const TypographyS = styled(Typography)`
  && {
    padding-left: 15px;
    margin-top: 20px;
    margin-bottom:20px;
  }
`

export default () => (
  <>
    <Div>
      <Typography variant="h6" align="center">
        Find a top-rated pro
      </Typography>
      <Typography variant="h6" align="center">
        for your project
      </Typography>
      <TypographyS variant="subtitle2">POPULAR CATEGORIES</TypographyS>
    </Div>
    <List>
      <IconItem title="Additions & Remodeling" src={HouseIcon} />
      <IconItem title="Air Conditioning" src={AirConditionIcon} />
      <IconItem title="Appliances" src={WashingMachineIcon} />
      <IconItem title="Carpet & Upholstery Cleaning" src={CarpetIcon} />
      <IconItem title="Contertops" src={DeskIcon} />
      <IconItem title="Doors" src={DoorIcon} />
      <IconItem title="Electrical" src={ElectronicIcon} />
      <IconItem title="Fireplace & Wood Stoves" src={FirePlaceIcon} />
      <IconItem title="Garage & Garage Doors" src={GarageIcon} />
      <IconItem title="Landscaping" src={LandscapeIcon} />
      <IconItem title="Windows" src={WindowIcon} />
      <IconItem title="Roof" src={RoofIcon} />
      <IconItem title="Plumbing" src={PlumbingIcon} />
      <IconItem title="Fences" src={FencesIcon} />
      <IconItem title="Handyman Service" src={HandymanIcon} />
      <IconItem title="Tree Service" src={TreeServiceIcon} />
    </List>
  </>
)

interface Props {
  title: string
  src: string
}
const Img = styled.img`
  width: 25px;
  height: 25px;
`
const IconItem = ({ title, src }: Props) => (
  <ListItem>
    <ListItemIcon>
      <Img src={src} />
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
)
