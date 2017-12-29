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
      answerChoices: [],
      showFlash: false,
      gameover: false
    }
  }

  componentDidMount () {
    this.props.fetchNewQuestions().then((res) => {
      console.log(res.questions)
      this.game = new Game(res.questions)
      this.setState({
        currentQuestion: ReactHtmlParser(this.game.getQuestion().questionText),
        answerChoices: this.game.getQuestion().answerChoices
      })
    })
  }

  handleInput (ac) {
    if (this.game.checkAnswer(ac)) {
      this.game.score++
      this.setState({
        showFlash: 'Correct answer!'
      })
    } else {
      this.setState({
        showFlash: 'Incorrect answer!'
      })
    }
    setTimeout(() => {
      this.setState({showFlash: false})
      this.updateGame()
    }, 1000)
  }

  updateGame () {
    if (this.game.indexNumber < 9) {
      this.game.indexNumber++
      this.setState({
        currentQuestion: ReactHtmlParser(this.game.getQuestion().questionText),
        answerChoices: this.game.getQuestion().answerChoices,
        score: this.game.score
      })
    } else {
      this.setState({gameover: true})
    }
  }

  renderAnswerChoices () {
    return this.state.answerChoices.map((ac, idx) => {
      return (
        <li key={idx} onClick={(e) => this.handleInput(ac)}>
          <span className='ac-button'>{ReactHtmlParser(ac)}</span>
        </li>
      )
    })
  }

  renderFlash () {
    return (
      <div className='ac-flash'>{this.state.showFlash}</div>
    )
  }

  render () {
    if (this.state.gameover) {
      return (
        <div>
          <h2>Game Over!</h2>
          <h2>Your final score is: {this.state.score} of 10</h2>
        </div>
      )
    }
    return (
      <div>
        <h2>Single player game!</h2>
        <h2>Score: {this.state.score} of 10</h2>
        <h3>{this.state.currentQuestion}</h3>
        <ul>
          { this.state.showFlash ? this.renderFlash() : this.renderAnswerChoices() }
        </ul>
      </div>
    )
  }
}

export default SinglePlayerGame
