import gamesData from './gamesData'

const defaultState = {
  teams: gamesData.teams,
  randomThing: "Hi Sammy",
  selectedPlayer: null
}

const reducer = (state = defaultState, actions = {}) => {
  switch(actions.type){
    case "SELECT_PLAYER":
      return {...state, selectedPlayer: actions.payload}
    default:
      return state
  }
}

export default reducer
