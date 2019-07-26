import React from 'react'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

export default function TimeGo(props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

