import React, { Component } from 'react'
import './App.css'
import TitleScreen from './components/title_screen'
import Game from './components/main_game'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showTitleScreen: true
    }
    this.startGame = this.startGame.bind(this)
  }

  startGame () {
    this.setState({showTitleScreen: false})
  }

  render () {
    return (
      <div className='App'>
        { this.state.showTitleScreen ?
          <TitleScreen startGame={this.startGame} /> : <Game /> }

      </div>
    )
  }
}

export default App
