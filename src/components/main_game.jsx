import React from 'react'
import Axios from 'axios'

class Game extends React.Component {
  constructor (props) {
    super(props)
    Axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
      .then(res => console.log(res.data.results))
  }

  render () {
    return (
      <div>
        <div>
          GAME COMPONENT
        </div>
      </div>
    )
  }
}

export default Game
