import { combineReducers } from 'redux'

import user from './user.js'
import audios from './audios.js'
import current_song from './current_song.js'

const rootReducer = combineReducers({
  user, audios, current_song
})

export default rootReducer
