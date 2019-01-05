import { POST } from '@/utils/fetch'

export const login = (username: string, password: string) => {
  return POST('login', {
    params: {
      password,
      type: 1,
      email: username,
    },
  })
}
