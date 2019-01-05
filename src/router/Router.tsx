import React from 'react'
import styled from 'styled-components'
import { Router, RouteComponentProps, WindowLocation } from '@reach/router'

import Company from '@/pages/Repair/CompanyDetail';
import Home from '@/pages/Home'
import LogIn from '@/pages/Login'
import Rent from '@/pages/Rent'
import Repair from '@/pages/Repair'
import Register from '@/pages/Register'

import CreateOrder from '@/pages/Repair/CreateOrder';
import Wallet from '@/pages/Wallet';
import SmartHome from '@/pages/SmartHome'
export const Route: React.FunctionComponent<
  RouteComponentProps & {
    // @types/react 里 createElement 签名很混乱
    // tslint:disable-next-line:no-any
    component: any
    // component: React.FunctionComponent<any>
  }
> = props => {
  const { path, component, ...otherProps } = props

  return React.createElement(component, otherProps)
}

export interface ILocation {
  location: WindowLocation
}

const MyRouter: React.FunctionComponent<ILocation> = ({ location }) => (
  <Router location={location}>
    <Route path="/" component={Home} />
    <Route path="logIn" component={LogIn} />
    <Route path="rent" component={Rent} />
    <Route path="repair" component={Repair} />
    <Route path="register" component={Register} />
    <Route path="company/:id" component={Company} />
    <Route path="create_order" component={CreateOrder} />
    <Route path="wallet" component={Wallet} />
    <Route path="smartHome" component={SmartHome} />
  </Router>
)

export default React.memo(({ location }: ILocation) => <MyRouter location={location} />)
