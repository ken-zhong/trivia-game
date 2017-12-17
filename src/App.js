import React from 'react'
import { Provider } from 'react-redux'

import './App.css'
import Game from './components/main_game'

const App = ({ store }) => (
  <Provider store={store} >
    <Game store={store} />
  </Provider>
)

export default App
