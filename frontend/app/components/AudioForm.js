import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAudio, getAudios } from '../actions/audio'

class AudioForm extends Component{

  render(){
    return(
      <div>
        <form onSubmit = {(e) => this.props.handleAudioFile(e)}>
          <input id = 'file' type = 'file' name = 'audio' />
          <input type = 'submit' />
        </form>
        <input type = 'button' onClick = {(e) => this.props.handleUpdateAudioList(e)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  audios:  state.audios
})

const mapDispatchToProps = dispatch => ({
  handleAudioFile: (e) => {
    e.preventDefault()

    var data = new FormData()
    data.append('audio', document.getElementById('file').files[0])
    console.log( data )
    dispatch(addAudio( data ))
  },
  handleUpdateAudioList: (e) => {
    e.preventDefault()
    dispatch(getAudios())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioForm)
