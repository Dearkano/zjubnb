import React from 'react'
import styled from 'styled-components'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardActionArea,
  CardMedia,
  Chip,
  Typography,
} from '@material-ui/core'
import { ICompany } from '@zjubnb'
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import StarComponent from 'rc-rate'
import 'rc-rate/assets/index.css'
import { Link } from '@reach/router';

interface Props {
  data: ICompany;
  label?: string;
}

const CardMediaS = styled.img`
  height: 150px;
  width: 150px;
`
const CardS = styled(Card)`
  && {
    width: 90%;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 5px;
  }
`
const CardActionsS = styled(CardActions)`
  && {
    padding-left: 15px;
    padding-right: 15px;
    display:flex;
    justify-content: space-between;
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
const TypographyS = styled(Typography)`
  line-height: 28px;
`

const StarDiv = styled.div`
  display: flex;
`

export default ({ data, label }: Props) => {
  const { name, rate, intro, src } = data;
  console.log(label);
  return (
    <Link to={`/company/${data.id}`}>
    <CardS>
      <CardActionAreaS>
        <CardMediaS src={src} />
        <CardContent>
          <Typography variant="h4">{name}</Typography>
          <Typography component="h5">{intro}</Typography>
        </CardContent>
      </CardActionAreaS>
      <CardActionsS>
      {label &&
        <Chip
          label={label}
          color="secondary"
          deleteIcon={<DoneIcon />}
          avatar={<Avatar><FaceIcon /></Avatar>}
          variant="outlined"
        />
      }
        <StarDiv>
          <StarComponent allowHalf disabled={true} defaultValue={rate} />
          <TypographyS variant="inherit">{rate}</TypographyS>
        </StarDiv>
      </CardActionsS>
    </CardS>
    </Link>
  )
}
