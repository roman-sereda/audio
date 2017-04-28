import React, { Component } from 'react'

export default class AddSongForm extends Component{

  render(){
    return(
      <form onSubmit = {(e) => this.props.handleAudioFile(e)}>
        <input id = 'file' type = 'file' name = 'audio' />
        <input type = 'submit' />
      </form>
    )
  }
}
