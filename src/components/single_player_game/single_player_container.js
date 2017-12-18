import { connect } from 'react-redux'
import SinglePlayerGame from './single_player'
import { fetchNewQuestions } from '../../actions/trivia_actions'

const mapStateToProps = (state = {}, ownProps) => ({
  showTitleScreen: state.ui.showTitleScreen,
  questions: state.game.questions
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchNewQuestions: () => dispatch(fetchNewQuestions())
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayerGame)
