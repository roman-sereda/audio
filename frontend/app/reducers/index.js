import { combineReducers } from 'redux'

import user from './user.js'
import audios from './audios.js'

const rootReducer = combineReducers({
  user, audios
})

export default rootReducer
