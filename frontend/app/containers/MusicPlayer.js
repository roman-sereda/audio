import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAudio, getAudios } from '../actions/audio'
import PlayerController from './PlayerController.js'
import SongsList from './SongsList.js'

class MusicPlayer extends Component{
  componentWillMount(){
    this.props.handleUpdateAudioList()
  }

  render(){
    return(
      <div className = 'music-player'>
        <PlayerController />
        <SongsList />
        <form onSubmit = {(e) => this.props.handleAudioFile(e)}>
          <input id = 'file' type = 'file' name = 'audio' />
          <input type = 'submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  handleAudioFile: (e) => {
    e.preventDefault()
    var data = new FormData()
    data.append('audio', document.getElementById('file').files[0])
    console.log( data )
    dispatch(addAudio( data ))
  },
  handleUpdateAudioList: () => {
    dispatch(getAudios())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)
