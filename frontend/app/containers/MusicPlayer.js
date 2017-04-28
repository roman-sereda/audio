import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAudio, getAudios } from '../actions/audio'
import PlayerController from './PlayerController.js'
import SongsBar from './SongsBar.js'

import { Grid } from 'semantic-ui-react'

class MusicPlayer extends Component{
  componentWillMount(){
    this.props.handleUpdateAudioList()
  }

  render(){
    return(
      <Grid columns = '2' centered >
        <Grid.Column widescreen = '6' >
          <PlayerController />
        </Grid.Column>
        <Grid.Column widescreen = '6' >
          <SongsBar />
          { this.props.children }
        </Grid.Column>
      </Grid>
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
