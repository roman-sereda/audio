import React, { Component } from 'react'
import store from './store'
import router from './router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

class App extends Component {

  render(){
    var audio = new Audio('http://htmlka.com/wp-content/uploads/2009/06/webplayer.swf')
    return(
      audio.play()
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
