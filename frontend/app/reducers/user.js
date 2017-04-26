import * as types from '../constants/action-types'

export default function( state = {}, action ){

  switch(action.type){
    case types.RECEIVE_USER:
      return Object.assign( {}, state, action.user )

    default:
      return state
    }
}
