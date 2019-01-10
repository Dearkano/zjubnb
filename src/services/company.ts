import { GET } from '@/utils/fetch'

export const getServiceList = (type: string) => {
  return GET(`get_service_list/${type}`, {
    params: {
    },
  })
}

export const getComments = (id: string) => {
  return GET(`comment/${id}/comments`, {
    params: {
    },
  })
}
