import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Menu } from 'semantic-ui-react'

class SongsList extends Component{

  chooseTrack(e, index){
    e.preventDefault()
    this.props.handleUpdateAudioList(index)
  }

  render(){
    return(
      <span>
        { this.props.songs[0] ?
          this.props.songs.map((song, index) => {
            return(
              <p onClick = { (e) => this.chooseTrack(e, index)}>{ this.props.current_song == index ? <span style = {{backgroundColor: 'rgb(230,230,255)'}}>Now playing</span> : null }{ song.uri.url }</p>
            )
        }) : null }
      </span>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.audios,
  current_song: state.current_song
})

const mapDispatchToProps = dispatch => ({
  handleUpdateAudioList: ( id ) => {
    console.log(id)
    dispatch({ type: 'CURRENT_TRACK_TO', track_num: id })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsList)
