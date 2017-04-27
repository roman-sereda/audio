import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAudio } from '../actions/audio'

class AudioForm extends Component{

  render(){
    return(
      <form onSubmit = { (e) => this.props.handleAudioFile(e) }>
        <input id = 'file' type = 'file' name = 'audio' />
        <input type = 'submit' />
      </form>
    )
  }
}

const mapStateToProps = store => ({

})

const mapDispatchToProps = dispatch => ({
  handleAudioFile( e ){
    e.preventDefault()

    var data = new FormData()
    data.append('audio', document.getElementById('file').files[0])
    console.log( data )
    dispatch(addAudio( data ))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioForm)
