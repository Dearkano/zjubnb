import React from 'react'
import styled from 'styled-components'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardActionArea,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { IRent } from '@zjubnb'
import StarComponent from 'rc-rate'
import 'rc-rate/assets/index.css'

interface Props {
  data: IRent
}

const CardMediaS = styled.img`
  width: 100%;
`
const CardS = styled(Card)`
  && {
    width: 100%;
  }
`
const CardActionsS = styled(CardActions)`
  && {
    padding-left: 15px;
  }
`

export default ({ data }: Props) => {
  const { title, src, description, rate, bed, type, price, rateAmount } = data
  const starProps = {
    emptyColor: '#aaa',
    fillColor: '#ffa500',
    fullStars: true,
    size: '5em',
    stars: 3.5, // <-- the most important property: it sets the number of filled stars
    strokeWidth: 3,
  }
  return (
    <CardS>
      <CardActionArea>
        <CardMediaS src={src} />
        <CardContent>
          <Typography variant="subtitle1">
            {type} · {bed}BEDS
          </Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography component="h5">{description}</Typography>
          <Typography variant="subtitle2">${price} per night · Free cancellation</Typography>
        </CardContent>
      </CardActionArea>
      <CardActionsS>
        <StarComponent allowHalf disabled={true} defaultValue={rate} />
        <Typography variant="inherit">{rateAmount}</Typography>
      </CardActionsS>
    </CardS>
  )
}
