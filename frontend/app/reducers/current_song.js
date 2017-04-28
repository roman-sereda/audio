import * as types from '../constants/action-types'

export default function( state = 2 , action ){

  switch(action.type){

    case types.CURRENT_SONG:
    return state + 1

    case types.CURRENT_TRACK_TO:
    return action.track_num

    default:
      return state
    }
}
