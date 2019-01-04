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
import { ICompany } from '@zjubnb'
import StarComponent from 'rc-rate'
import 'rc-rate/assets/index.css'

interface Props {
  data: ICompany;
}

const CardMediaS = styled.img`
  height: 150px;
  width: 150px;
`
const CardS = styled(Card)`
  && {
    width: 100%;
  }
`
const CardActionsS = styled(CardActions)`
  && {
    padding-left: 15px;
    padding-right: 15px;
  }
`
const CardActionAreaS = styled(CardActionArea)`
  && {
    display:flex;
    height: 150px;
    justify-content: flex-start;
    padding-right:15px;
  }
`
export default ({ data }: Props) => {
  const { name, rate, intro, src, } = data;

  return (
    <CardS>
      <CardActionAreaS>
        <CardMediaS src={src} />
        <CardContent>
          <Typography variant="h4">{name}</Typography>
          <Typography component="h5">{intro}</Typography>
        </CardContent>
      </CardActionAreaS>
      <CardActionsS>
        <StarComponent allowHalf disabled={true} defaultValue={rate} />
        <Typography variant="inherit">{rate}</Typography>
      </CardActionsS>
    </CardS>
  )
}
