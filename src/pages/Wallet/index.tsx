import React from 'react';
import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Typography,
  CardHeader
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import styled from 'styled-components';
import { getMoney } from '@/utils/wallet'
const LeftDiv = styled.div`
`
const RightDiv = styled.div`
`
const CardS = styled(Card)`
&& {
  width: 75%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}
`
const ListS = styled(List)`
&& {
  flex-grow: 1;
}`
const MainCard = styled(Card)`
&& {
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}`
const CardContentS = styled(CardContent)`
&& {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`

export default () => {
const money = getMoney();
return (
<>
  <CardS>
    <CardContentS>
      <LeftDiv>
        <Typography component="h5">余额</Typography>
        <Typography variant="h4">¥{money}</Typography>
      </LeftDiv>
      <RightDiv>
        <Button variant="outlined" size="medium" color="secondary">
          充值
        </Button>
      </RightDiv>
    </CardContentS>
  </CardS>
  <MainCard>
  <CardContentS>
  <ListS
    component="nav"
    subheader={<ListSubheader component="div">Assets</ListSubheader>}
  >
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Coupon" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Bill & Promotion" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Loan Center" />
    </ListItem>
  </ListS>
  </CardContentS>
  </MainCard>
  <MainCard>
  <CardContentS>
  <ListS
    component="nav"
    subheader={<ListSubheader component="div">Payment method</ListSubheader>}
  >
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="PayPal" />
    </ListItem>
  </ListS>
  </CardContentS>
  </MainCard>
  <MainCard>
  <CardContentS>
  <ListS
    component="nav"
    subheader={<ListSubheader component="div">Setting</ListSubheader>}
  >
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Pay Without Password" />
    </ListItem>
  </ListS>
  </CardContentS>
  </MainCard>
</>)
}