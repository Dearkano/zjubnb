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
import PayMentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import SettingsIcon from '@material-ui/icons/Settings'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import styled from 'styled-components';
import { getMoney } from '@/utils/wallet'
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import CheveronRightIcon from '@material-ui/icons/ChevronRight';
const ListSubheaderS = styled(ListSubheader).attrs({
  component: 'div',
})`
` 
const LeftDiv = styled.div`
`
const RightDiv = styled.div`
`
const CardS = styled(Card)`
&& {
  margin: auto;
  background: linear-gradient(#94b0db6b,#94B0DB);
  margin-bottom: 20px;
  padding-bottom: 24px;
  padding-top: 10px;
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
const RightIcon = () => (
<ListItemSecondaryAction>
<IconButton aria-label="Comments" color="secondary">
  <CheveronRightIcon />
</IconButton>
</ListItemSecondaryAction>
)
export default () => {
const money = getMoney();
return (
<>
  <CardS>
    <CardContentS>
      <LeftDiv>
        <Typography component="h5">balance</Typography>
        <Typography variant="h4">$ {money}</Typography>
      </LeftDiv>
      <RightDiv>
        <Button variant="outlined" size="medium" color="secondary">
          Recharge
        </Button>
      </RightDiv>
    </CardContentS>
  </CardS>
  <MainCard>
  <CardContentS>
  <ListS
    component="nav"
    subheader={<ListSubheaderS>Assets</ListSubheaderS>}
  >
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Coupon" />
      <RightIcon />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Bill & Promotion" />
      <RightIcon />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PayMentIcon />
      </ListItemIcon>
      <ListItemText primary="Loan Center" />
      <ListItemSecondaryAction>
        <IconButton aria-label="Comments" color="secondary">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </ListS>
  </CardContentS>
  </MainCard>
  <MainCard>
  <CardContentS>
  <ListS
    component="nav"
    subheader={<ListSubheaderS>Payment method</ListSubheaderS>}
  >
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="PayPal" />
      <RightIcon />
    </ListItem>
  </ListS>
  </CardContentS>
  </MainCard>
  <MainCard>
  <CardContentS>
  <ListS
    component="nav"
    subheader={<ListSubheaderS>Setting</ListSubheaderS>}
  >
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Pay Without Password" />
      <RightIcon />
    </ListItem>
  </ListS>
  </CardContentS>
  </MainCard>
</>)
}