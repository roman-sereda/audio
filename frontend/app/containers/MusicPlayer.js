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
      <span>
        <PlayerController />
        <SongsList />
      </span>
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
