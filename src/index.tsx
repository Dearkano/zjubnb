import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// config day.js
import dayjs from 'dayjs'
import zh from 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

dayjs.locale(zh, null, false)
dayjs.extend(relativeTime)

// global style
import './style.css'
import 'typeface-roboto'

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
})
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
