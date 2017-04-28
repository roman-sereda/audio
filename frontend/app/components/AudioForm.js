/*import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAudio, getAudios } from '../actions/audio'

class AudioForm extends Component{

  constructor(props){
    super(props)
    this.state = {
      audio: '',
    }
  }

  initPlayer(e){
    e.preventDefault()
    this.setState({ audio: document.getElementById('audio-player') })
    this.state.audio.play()
  }

  render(){
    return(
      <div>
        <form onSubmit = {(e) => this.props.handleAudioFile(e)}>
          <input id = 'file' type = 'file' name = 'audio' />
          <input type = 'submit' />
        </form>
        <input type = 'button' onClick = {(e) => this.props.handleUpdateAudioList(e)} />
        {
          this.props.audios[0] ?
            <div>

              <ul id = 'playlist'>
              { this.props.audios.map((audio) => {
                return(
                  <li className = 'playlist-element'><span><p>{ audio.uri.name }</p>
                  <p>{ audio.uri.url }</p><br/ ></span></li>
                )
              })}
              </ul>
            </div> :
            <p>No Music</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  audios: state.audios
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
*/
