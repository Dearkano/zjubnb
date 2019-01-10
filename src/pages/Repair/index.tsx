import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import {
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar
} from '@material-ui/core'
import ServiceItem from './item';
import { render } from 'react-dom';
import InfiniteList from '@/components/InfiniteList';
import { getServiceList } from '@/services/company'
import { ICompany } from '@zjubnb';

import Services from '@/resources/services';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
const FixFab = styled(Fab).attrs({
  size: 'small',
  color: 'primary',
})`
  && {
    position: fixed;
    top: 60px;
    left: 15px;
    z-index: 20;
  }
`
const GarageIcon = require('@/assets/repair/garage.png')

const Div = styled.div`
  padding-top: 20px;
  border-bottom: #eaeaea solid 2px;
  background-color: #F9F7F3;
`
const MyAvatar = styled(Avatar)`
  && {
  margin: auto;
  width: 100px;
  height: 100px;
}
`
const TypographyS = styled(Typography)`
  && {
    padding-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
interface CompanyItem {
  address: string
  avg_attitude: number
  avg_quality: number
  avg_speed: number
  company_id: number
  company_name: string
  email: string
  head_image: string
  phone: string
  quality_image: string
  service_id: number
  service_introduction: string
  tax_number: string
  type: number
}
export default () => {
  const [typeSelected, setTypeSelected] = useState<string | undefined>(undefined);
  const [companyList, setCompanyList] = useState<ICompany[]>([]);
  // @ts-ignore
  const switchCompany = (imgUrl: string) => {
    setTypeSelected(imgUrl)
  }
  console.log(companyList);
  const IconItem = ({ title, src, id }: Props) => (
    <ListItem
      onClick={async () => {
        switchCompany(src);
        const res = await getServiceList(id)
        res
          .fail()
          .succeed(e => {
            console.log(e)
            setCompanyList(e.data.service_list);
          })
      }}
    >
      <ListItemIcon>
        <Img src={src} />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  )

  const ListSelect = () => (
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
        {Services.map(e => (
          <IconItem title={e.name} src={e.imgUrl} id={e.id}/>
        ))}
      </List>
    </>
  )
  const CompanySelect = () => (
    <>
      <FixFab onClick={() => { setTypeSelected(undefined) }}>
      <ArrowBackIcon/>
      </FixFab>
      <Div>
        <MyAvatar alt="Remy Sharp" src={typeSelected} />
        <Typography variant="h6" align="center">
          for your project
        </Typography>
      </Div>
      {
        companyList.map(e => (
          <ServiceItem
            key={e.id}
            data={e}
            label="in TWO minutes"
          />
        ))
      }
    </>
  )

  return typeSelected ?
    <CompanySelect />
  : <ListSelect />;
}

interface Props {
  title: string
  src: string
  id: string
}
const Img = styled.img`
  width: 25px;
  height: 25px;
`
