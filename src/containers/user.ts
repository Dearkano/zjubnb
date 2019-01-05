import { Container } from '@/hooks/useContainer'

import { GET } from '@/utils/fetch'
import { logIn, logOut, isLogIn } from '@/utils/logIn'
import { login } from '@/services/login'
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/storage'

interface State {
  /**
   * 是否登录
   */
  isLogIn: boolean
  /**
   * 个人账户信息
   */
  myInfo: any
}

class UserContainer extends Container<State> {
  constructor() {
    super()

    this.state = {
      isLogIn: isLogIn(),
      myInfo: null,
    }

    this.FRESH_INFO()
  }

  LOG_IN = (token: string) => {
    setLocalStorage('access_token', token)
    this.setState(
      {
        isLogIn: true,
      },
      this.FRESH_INFO
    )
    // this.FRESH_INFO
  }

  LOG_OUT = () => {
    logOut()

    this.setState({
      isLogIn: false,
      myInfo: null,
    })
  }

  FRESH_INFO = async () => {
    if (!this.state.isLogIn) {
      return
    }

    const myInfo = await GET('get_information')
    myInfo.fail().succeed((myInfo:any) => {
      this.setState({
        myInfo: myInfo.data.client_information
      })
    })
  }
}

export default new UserContainer()
