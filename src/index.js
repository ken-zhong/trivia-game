import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore()
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
})

registerServiceWorker()
