interface IHost {
  oauth: string
  api: string
}

const host: IHost = {
  oauth: process.env.oauth || 'http://119.23.226.114:8080/ssm/api',
  api: process.env.api || 'http://119.23.226.114:8080/ssm/api',
}

export default host
