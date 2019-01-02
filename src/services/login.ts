import { POST } from '@/utils/fetch'

export const login = (username: string, password: string) => {
  return POST('login', {
    params: {
      username,
      password,
      type: 1,
    },
  })
}
