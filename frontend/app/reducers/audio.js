import * as types from '../constants/action-types'

export default function( state = {}, action ){

  switch(action.type){

    case types.GET_AUDIOS:
    return action.audios

    default:
      return state
    }
}
