import React from 'react'

class SinglePlayerGame extends React.Component {
  constructor (props) {
    super(props)
    this.game = null
    this.state = {
      questionCount: 0,
      score: 0
    }
  }

  componentDidMount () {
    this.props.fetchNewQuestions().then((res) => {
      console.log(res.questions);
    })
  }

  render () {
    // console.log(this.props)
    return (
      <div>
        <h2>Single player game!</h2>
      </div>
    )
  }
}

export default SinglePlayerGame
