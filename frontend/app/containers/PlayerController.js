import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayerController extends Component{

  hadlePlayButton(e){
    e.preventDefault()
    var audio = document.getElementById('audio-player')
    audio.pause()
  }

  hadleRightButton(e){
    e.preventDefault()
    this.props.nextTrack()
  }

  handleNameChange(e){
    e.preventDefault()
    e.target.play()
    document.getElementById('play-name').innerHTML = e.target.src

    var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');
    var width = 1024, height = 200

    var audio = document.querySelector('audio'),
        audioContext = new AudioContext(),
        source = audioContext.createMediaElementSource(audio),
        analyser = audioContext.createAnalyser();

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    setInterval(function(){
      var freqData = new Uint8Array(analyser.frequencyBinCount);

          analyser.getByteFrequencyData(freqData);
          ctx.clearRect(0, 0, width, height);
          ctx.fillStyle = '#d3d3d3'
          for (var i = 0; i < freqData.length; i+=16 ) {
            ctx.fillRect((i / 16)*6, height, 5, -(freqData[i] / 2));
          }
     }, 33);
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
              onCanPlay = { (e) => this.handleNameChange(e) }
              onTimeUpdate = { (e) => this.handleTimeChange(e) }
              onEnded = { (e) => this.hadleRightButton(e) }
              onVolumeChange = { (e) => this.handleVolumeChange(e) }
              src = { this.props.songs[this.props.current_song].uri.url }>Fuck You
            </audio>
            Time: <span id = 'play-time'> </span><br />
            Name: <span id = 'play-name'> </span><br />
            Volume: <span id = 'play-volume'> </span><br />
            <canvas id = 'eqv' width = '1024'height = '200'></canvas>
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
