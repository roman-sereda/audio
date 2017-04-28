import React, { Component } from 'react'
import { connect } from 'react-redux'

import Equalizer from './Equalizer.js'

class PlayerController extends Component{
  constructor(props){
    super(props)
    this.state = {
      status: 'stopped'
    }
  }

  hadlePlayButton(e){
    e.preventDefault()
    var audio = document.getElementById('audio-player')
    this.setState({ status: 'stop' })
    audio.pause()
  }

  hadleRightButton(e){
    e.preventDefault()
    this.props.nextTrack()
  }

  handleNameChange(e){
    e.preventDefault()
    e.target.play()
    this.setState({ status: 'playing' })
    document.getElementById('play-name').innerHTML = e.target.src
  }

  handleTimeChange(e){
    e.preventDefault()
    document.getElementById('play-time').innerHTML = e.target.currentTime
  }

  handleVolumeChange(e){
    e.preventDefault()
    document.getElementById('play-volume').innerHTML = e.target.volume

  }

  render(){
    return(
      <div>
        <button onClick = { (e) => this.hadleLeftButton(e) } id = 'left' />
        <button onClick = { (e) => this.hadleRightButton(e) } id = 'right' />
        <button onClick = { (e) => this.hadlePlayButton(e) } id = 'play' />

        {this.props.songs[0] ?
          <p>Sheeeit
            <audio
              id = 'audio-player'
              controls
              onPlay = { (e) => this.handleNameChange(e) }
              onCanPlay = { (e) => this.handleNameChange(e) }
              onTimeUpdate = { (e) => this.handleTimeChange(e) }
              onEnded = { (e) => this.hadleRightButton(e) }
              onVolumeChange = { (e) => this.handleVolumeChange(e) }
              src = { this.props.songs[this.props.current_song].uri.url }>Fuck You
            </audio>
            Time: <span id = 'play-time'> </span><br />
            Name: <span id = 'play-name'> </span><br />
            Volume: <span id = 'play-volume'> </span><br />
            <Equalizer status = { this.state.status } />
          </p> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.audios,
  current_song: state.current_song
})

const mapDispatchToProps = dispatch => ({
  nextTrack: () => {
    dispatch({ type: 'CURRENT_SONG' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerController)
