import { Container } from '@/hooks/useContainer'

import { GET } from '@/utils/fetch'
import { logIn, logOut, isLogIn } from '@/utils/logIn'
import { login } from '@/services/login'
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/storage'
import { ICompany } from '@zjubnb';
interface State {
  data: ICompany
}
const companyFake = {
  address: 'hangzhou',
  avg_attitude: 5,
  avg_quality: 5,
  avg_speed: 5,
  company_id: 5,
  company_name: 'HHB',
  email: 'c708423@163.com',
  head_image: 'https://img5.duitang.com/uploads/item/201411/07/20141107164412_v284V.jpeg',
  phone: '17367078410',
  quality_image: 'www.baidu.com',
  service_id: 0,
  service_introduction: 'deokio eckn jausv3nds adfkjoir vnzcor wkreod as qewklofd qe  qwe ewqmrop ',
  tax_number: '123456',
  type: 1,
}
class CompanyContainer extends Container<State> {
  constructor() {
    super()
    let companyData = getLocalStorage('companyCache');
    companyData = companyData ? companyData : companyFake;

    this.state = {
      data: companyData,
    }
  }
  SET = (e: ICompany) => {
    this.setState({ data: e });
    setLocalStorage('companyCache', e);
  }
}

export default new CompanyContainer()
