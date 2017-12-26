import React from 'react'
import Game from '../../game_src/game'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

class SinglePlayerGame extends React.Component {
  constructor (props) {
    super(props)
    this.game = null
    this.state = {
      questionCount: 0,
      score: 0,
      currentQuestion: '',
      answerChoices: []
    }
  }

  componentDidMount () {
    this.props.fetchNewQuestions().then((res) => {
      console.log(res.questions)
      this.game = new Game(res.questions)
      this.setState({
        currentQuestion: this.game.getQuestion().questionText,
        answerChoices: this.game.getQuestion().answerChoices
      })
    })
  }

  renderAnswerChoices () {
    return this.state.answerChoices.map((ac, idx) => {
      return (
        <li key={idx}>
          <button>{ac}</button>
        </li>
      )
    })
  }

  render () {
    // console.log(this.props)
    return (
      <div>
        <h2>Single player game!</h2>
        <h3>{this.state.currentQuestion}</h3>
        <ul>
          { this.renderAnswerChoices() }
        </ul>
      </div>
    )
  }
}

export default SinglePlayerGame
