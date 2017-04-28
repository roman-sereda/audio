import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import SongsList from './containers/SongsList'
import SongsBar from './containers/SongsBar'
import MusicPlayer from './containers/MusicPlayer'

import AddSongForm from './components/AddSongForm'

export default (
  <Router history={hashHistory}>
    <Route path = '/' component = { MusicPlayer } >
      <Route path = '/songs_list' component = { SongsList } />
      <Route path = '/song_form' component = { AddSongForm } />
    </Route>
  </Router>
)
