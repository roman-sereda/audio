import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAudio } from '../actions/audio'

class AudioForm extends Component{

  render(){
    return(
      <form onSubmit = { (e) => this.props.handleAudioFile(e, document.getElementById('audio').value) }>
        <input id = 'audio' type = 'file' name = 'pic' accept = 'image/*' />
        <input type = 'submit' />
      </form>
    )
  }
}

const mapStateToProps = store => ({

})

const mapDispatchToProps = dispatch => ({
  handleAudioFile( e, file ){
    e.preventDefault()
    console.log( file )
    dispatch(addAudio( file ))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioForm)
