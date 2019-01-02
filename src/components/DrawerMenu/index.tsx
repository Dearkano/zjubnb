import React from 'react'
import { navigate } from '@/utils/history'
import styled from 'styled-components'

import useContainer from '@/hooks/useContainer'
import userInstance from '@/containers/user'
import stateInstance from '@/containers/state'

import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import ListIcon from '@material-ui/icons/List'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ExitToApp from '@material-ui/icons/ExitToApp'
import BuildIcon from '@material-ui/icons/Build'
import HomeIcon from '@material-ui/icons/Home'
import PaymentIcon from '@material-ui/icons/Payment'
import Settings from '@material-ui/icons/Settings'
import Help from '@material-ui/icons/Help'
import SpeakerNotes from '@material-ui/icons/SpeakerNotes'
import Whatshot from '@material-ui/icons/Whatshot'
import Event from '@material-ui/icons/Event'

import UserInfo from './UserInfo'

interface ItemProps {
  /**
   * 图标
   */
  // tslint:disable-next-line:no-any
  icon: React.ReactElement<any>
  /**
   * 文字
   */
  text: string
  /**
   * 单击回调
   */
  onClick: () => void
}

const Item: React.FunctionComponent<ItemProps> = ({ icon, text, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
)

const ListS = styled(List)`
  && {
    width: 190px;
  }
`

const DividerS = styled(Divider)`
  && {
    margin: 0 16px;
    height: 1.5px;
  }
`

const jump = (link: string) => () => navigate(link)

const DrawerMenu: React.FunctionComponent = () => {
  const { state: user, LOG_OUT } = useContainer(userInstance)
  const { state, CLOSE_DRAWER } = useContainer(stateInstance)

  return (
    <Drawer open={state.isDrawerOpen} onClose={CLOSE_DRAWER}>
      <ListS onClick={CLOSE_DRAWER}>
        <UserInfo isLogIn={user.isLogIn} info={user.myInfo} />
        <DividerS />
        <Item icon={<HomeIcon />} text="Home" onClick={jump('/')} />
        <Item icon={<AttachMoneyIcon />} text="Rent" onClick={jump('/rent')} />
        <Item icon={<BuildIcon />} text="Repair" onClick={jump('/repair')} />
        {user.isLogIn && (
          <>
            <Item icon={<ListIcon />} text="Order" onClick={jump('/order')} />
            <Item icon={<PaymentIcon />} text="Wallet" onClick={jump('/wallet')} />
          </>
        )}
        <Item icon={<Settings />} text="Setting" onClick={jump('/setting')} />
        <Item icon={<Help />} text="Help" onClick={jump('/help')} />
        {user.isLogIn && (
          <>
            <Item icon={<ExitToApp />} text="Logout" onClick={LOG_OUT} />
          </>
        )}
      </ListS>
    </Drawer>
  )
}

export default DrawerMenu
