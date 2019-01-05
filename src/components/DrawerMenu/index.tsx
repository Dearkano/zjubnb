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
    background-color: #f9f7f3;
    height: 100%;
  }
`

const DividerS = styled(Divider)`
  && {
    margin: 0 16px;
    height: 1.5px;
  }
`

const DrawerS = styled(Drawer)`
  && {
    background-color: #f9f7f3;
  }
`

const jump = (link: string) => () => navigate(link)

const DrawerMenu: React.FunctionComponent = () => {
  const { state: user, LOG_OUT } = useContainer(userInstance)
  const { state, CLOSE_DRAWER } = useContainer(stateInstance)
  console.log(user)

  return (
    <DrawerS open={state.isDrawerOpen} onClose={CLOSE_DRAWER}>
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
    </DrawerS>
  )
}

export default DrawerMenu

/**
 * 
 * 1. 用户注册 -> 上传用户或者公司的基本信息
 * 2. 用户登录 -> 公司登录和个人登录 返回全部个人信息
 * 
 * 1. 用户点开主页 -> 看到n个服务分类 -> 点击一个服务分类 -> 根据serviceid找到company[] -> 前端显示
 * 2. 用户点击一个company -> 显示company信息，包括n个评论 -> 点击签约 -> 弹出表单
 * 3. 用户填写表单 -> 内容包括 a. 选房子 从用户已经注册的房子里选择 b. 填写n个需求 [{service,detail},{service,detail}]
 * 4. 提交表单 后端api接受并更新
 * 
 * 1. 公司登录 -> 显示个人信息
 * 2. 公司点开订单列表，查询到所有的订单
 * 3. 公司看到待处理的订单 -> 点击接受或者拒绝 
 * 4. 公司点击接受 -> 服务开始 -> 更新进度（progress）-> 填写服务报告并上传 -> 服务结束
 * 
 * 1. 用户点击评价 -> 三个打分+一句话评论 -> 提交
 * 
 * 1. 用户更新信息
 * 2. 用户添加房屋（区分房东和租客，房屋是属于他或者属于另一个用户）
 * 3. 用户查看个人房屋
 * 
 * 1. 公司更新信息
 * 2. 公司添加服务
 * 
 */
