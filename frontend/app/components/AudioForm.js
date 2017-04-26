import React, { Component } from 'react'

export default class AudioForm extends Component{

  handleAudio(e){
    e.preventDefault()
    console.log(e.target)
  }

  render(){
    return(
      <form>
        <input name = 'audio' type = 'file' name = 'pic' accept = 'image/*' onChange = { (e) => this.handleAudio(e) } />
        <input type = 'submit' />
      </form>
    )
  }
}
