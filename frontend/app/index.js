import React, { Component } from 'react'
import store from './store'
import router from './router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import styles from './main.css'

import MusicPlayer from './containers/MusicPlayer'

ReactDOM.render(
  <Provider store = { store } >
    <MusicPlayer />
  </Provider>,
  document.getElementById('root')
)
