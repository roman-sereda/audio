import React, { Component } from 'react'
import store from './store'
import router from './router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AudioForm from './components/AudioForm'


ReactDOM.render(
  <Provider store = { store } >
    <AudioForm />
  </Provider>,
  document.getElementById('root')
)
