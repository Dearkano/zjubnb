interface IHost {
  oauth: string
  api: string
}

const host: IHost = {
  oauth: process.env.oauth || 'https://119.23.226.114:8080',
  api: process.env.api || 'https://119.23.226.114:8080',
}

export default host
