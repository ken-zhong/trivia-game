import React from 'react'
import { connect } from 'react-redux'

import TitleScreen from './title_screen'
import { startGame } from '../actions/ui_actions'

class Game extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='App'>
        { this.props.showTitleScreen ? <TitleScreen startGame={this.props.startGame} />
          : null }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  showTitleScreen: state.ui.showTitleScreen
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  startGame: () => dispatch(startGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
