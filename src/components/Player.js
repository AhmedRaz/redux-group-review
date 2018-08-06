import React from 'react'
import { connect } from 'react-redux'
import { selectThisPlayer } from '../actions'

const Player = ({ player, random, selectPlayer }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    random: state.randomThing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPlayer: (player) => {
      dispatch(selectThisPlayer(player))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
