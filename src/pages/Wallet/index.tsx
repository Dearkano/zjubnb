import React from 'react';
import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
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
  width: 85%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}
`
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
  <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="优惠卷" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="发票与促销" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="设置免密支付" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="贷款中心" />
      </ListItem>
    </List>
</>)
}