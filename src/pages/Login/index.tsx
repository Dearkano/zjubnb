import React, { useState } from 'react'
import { navigate } from '@/utils/history'
import styled from 'styled-components'

import {
  Button,
  CircularProgress,
  FormControl,
  // FormHelperText,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core'

import userInstance from '@/containers/user'

const logo = require('@/assets/logo.png')

import LayoutCenter from '@/components/LayoutCenter'

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoImg = styled.img`
  width: 300px;
  margin-bottom: 30px;
`

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 105px;
`

const LogInButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})`
  && {
    margin-top: 35px;
  }
`

const ButtonProgress = styled(CircularProgress).attrs({
  size: 20,
  color: 'secondary',
})`
  && {
    margin-left: 15px;
  }
`

interface FormField {
  username: string
  password: string
}

interface LogInState {
  loading: boolean
  logInFail: boolean
}

const LogIn: React.FunctionComponent = () => {
  const [formField, setFormField] = useState<FormField>({
    username: '',
    password: '',
  })

  const [logInState, setLogInState] = useState<LogInState>({
    loading: false,
    logInFail: false,
  })

  const handleChange = (field: keyof FormField) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormField({
      ...formField,
      [field]: event.target.value,
    })
  }

  const logIn = async () => {
    const { username, password } = formField

    setLogInState({
      loading: true,
      logInFail: false,
    })

    const token = await userInstance.LOG_IN(username, password)

    token
      .fail(err => {
        setTimeout(() => {
          setLogInState({
            loading: false,
            logInFail: true,
          })
          // tslint:disable-next-line:align
        }, 2000)
      })
      .succeed(_ => {
        setTimeout(() => navigate('/'), 1500)
      })
  }

  const { logInFail, loading } = logInState

  return (
    <LayoutCenter>
      <WrapperDiv>
        <LogoImg src={logo} />

        <Typography variant="h6">Login</Typography>

        <FormDiv>
          <FormControl fullWidth>
            <InputLabel htmlFor="username">username</InputLabel>
            <Input id="username" value={formField.username} onChange={handleChange('username')} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">password</InputLabel>
            <Input
              id="password"
              type="password"
              value={formField.password}
              onChange={handleChange('password')}
            />
          </FormControl>
        </FormDiv>

        <LogInButton disabled={loading} onClick={logIn}>
          {logInFail ? 'Retry' : 'Login'}
          {loading && <ButtonProgress />}
        </LogInButton>
      </WrapperDiv>
    </LayoutCenter>
  )
}

export default LogIn
