import React from 'react';
import {
  Avatar,
  Tab,
  Tabs,
  Fab,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import EmailIcon from '@material-ui/icons/Email';
import AssignIcon from '@material-ui/icons/Assignment';
import styled from 'styled-components'
import StarComponent from 'rc-rate'
import 'rc-rate/assets/index.css'
import { Link } from '@reach/router';
const MyAvatar = styled(Avatar)`
  && {
  margin: auto;
  width: 150px;
  height: 150px;
  position: relative;
}
`
const TopImg = styled.div`
  && {
    height: 150px;
    width: 100%;
    background-color: black;
  }
`
const Intro = styled(Typography).attrs({
  variant: 'h5',
})`
  && {
    margin-top:15px;
    text-align: center;
    padding: 0 50px 0 50px;
  }
`
const MyPaper = styled(Paper)`
  && {
  margin: auto;
  margin-top: 100px;
  width: 90%;
  display: flex;
  padding-bottom: 15px;
  flex-direction: column;
}
`
const FixFab = styled(Fab)`
  && {
  position: fixed;
  z-index: 20;
  width: 200px;
  bottom: 15px;
  right: 15px;
  }
`
const TabContainer = styled.div`
  width: 100%;
`
const CardContentS = styled(CardContent)`
&& {
  padding-left: 70px;
}
`
const IconDiv = styled.div`
&& {
  display: flex;
  width: 30%;
  justify-content: space-around;
  margin: auto;
  margin-top: 30px;
}
`
const DetailPic = styled.img`
&& {
  width:100%;
}
`
const HouseIcon = require('@/assets/repair/house.png')
const LongPic = require('@/assets/longpic.png')
export default () => {
  const data = {
    src: HouseIcon,
    name: 'company name',
    intro: 'sasdajdsaknjka jqiwoejcqowe ajksd neq',
  }
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const commentsRender = comments.map(e => (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" src={e.src && e.src}>
            {e.name.charAt(0)}
          </Avatar>}
        title={e.name}
        subheader={e.time}
      />
      <CardContentS>
        <Typography component="p">
          {e.content}
        </Typography>
        <StarComponent allowHalf disabled={true} defaultValue={e.rate} />
      </CardContentS>
    </Card>
  ))

  return (
    <>
      <MyPaper>
        <div style={{ position: 'relative', top: '-70px' }}>
        <MyAvatar alt="Remy Sharp" src={data.src} />
        <IconDiv>
          <EmailIcon />
          <AssignIcon />
          <PhoneIcon />
        </IconDiv>
        <Intro>
          {data.intro}
        </Intro>
        </div>
      </MyPaper>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab icon={<PhoneIcon />} label="服务详情" />
        <Tab icon={<FavoriteIcon />} label="客户评价" />
      </Tabs>
      {value === 0 &&
        <TabContainer>
          <DetailPic src={LongPic}/>
        </TabContainer>}
      {value === 1 &&
        <TabContainer>
          {commentsRender}
        </TabContainer>
      }
      <Link to="/create_order">
        <FixFab variant="extended" aria-label="snd">
          <NavigationIcon />
          立即预约
        </FixFab>
      </Link>
    </>
  )
}

const comments = [
  {
    name: 'qc',
    time: '2012-12-12',
    content: '123123',
    rate: 1,
  },
  {
    src: HouseIcon,
    name: 'qc',
    time: '2012-12-12',
    content: '12312asdfsdafasdf3',
    rate: 1,
  },
  {
    name: 'qc',
    time: '2012-12-12',
    content: '1231asdfasdfasd23',
    rate: 1,
  },
  {
    name: 'qc',
    time: '2012-12-12',
    content: '123asdfasdfsda123',
    rate: 1,
  },
]
