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
import companyInstance from '@/containers/company';
import useContainer from '@/hooks/useContainer';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import StarComponent from 'rc-rate'
import 'rc-rate/assets/index.css'
import { Link, navigate } from '@reach/router';
interface Props {
  data: ICompany;
  label?: string;
}

const CardMediaS = styled.img`
&& {
  width: 150px;
  max-height: 150px;
}
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
  const { company_id, company_name, service_introduction, avg_quality, head_image } = data;
  const { state } = useContainer(companyInstance)
  console.log(data);
  return (
    <CardS
      onClick={() => {
        companyInstance.SET(data);
        navigate(`/company/${company_id}`);
      }}
    >
      <CardActionAreaS>
        <CardMediaS src={head_image} />
        <CardContent>
          <Typography variant="h4">{company_name}</Typography>
          <Typography component="h5">{service_introduction}</Typography>
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
          <StarComponent allowHalf disabled={true} defaultValue={avg_quality} />
          <TypographyS variant="inherit">{avg_quality}</TypographyS>
        </StarDiv>
      </CardActionsS>
    </CardS>
  )
}
