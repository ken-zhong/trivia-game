import React from 'react'

class TitleScreen extends React.Component {
  render () {
    return (
      <div>
        <div>
          <h2>Trivia!</h2>
          <button onClick={this.props.startGame} >Start Game!</button>
        </div>
      </div>
    )
  }
}

export default TitleScreen
