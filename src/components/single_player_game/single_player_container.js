import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  showTitleScreen: state.ui.showTitleScreen
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  startGame: () => dispatch()
  })

export default connect(mapStateToProps, mapDispatchToProps)(Game)
