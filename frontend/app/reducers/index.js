import { combineReducers } from 'redux'

import user from './user.js'
import audio from './audio.js'

const rootReducer = combineReducers({
  user, audio
})

export default rootReducer
