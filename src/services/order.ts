import { GET, POST } from '@/utils/fetch'
import dayjs from 'dayjs'
interface repairItem {
  serviceId: number
  detail: string
}
interface IPostOrder {
  clientId: number
  companyId: number
  houseId: number
  createDate: string
  deposit: number
  price: number
  status: number
  items: repairItem[]
}
export const postOrder =
(data: {
  clientId: number,
  companyId: number,
  houseId: number,
  itemList: repairItem[]
}) => {
  const date = dayjs().format('YYYY-MM-DD');
  const postParam: IPostOrder = {
    clientId: data.clientId,
    companyId: data.companyId,
    houseId: data.houseId,
    deposit: 100,
    createDate: date,
    price: 500,
    status: 0,
    items: data.itemList,
  }
  console.log(postParam);
  return POST('order/upload', {
    params: {
      ...postParam,
    }
  })
}

export const getOrders = (clientId: number) => {
  return GET(`order/get?clientId=${clientId}`);
}