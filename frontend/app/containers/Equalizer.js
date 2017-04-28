import React, { Component } from 'react'

export default class Equalizer extends Component {
  constructor(props){
    super(props)
    this.state = {
      ctx: '',
      analyser: '',
      width: 1200,
      height: 200,
      equalizer: ''
    }
  }

  componentDidMount(){
    var audio = document.querySelector('audio'),
        ctx_temp = document.querySelector('canvas').getContext('2d'),
        audioContext = new AudioContext(),
        analyser_temp = audioContext.createAnalyser(),
        source = audioContext.createMediaElementSource(audio)

    source.connect(analyser_temp);
    analyser_temp.connect(audioContext.destination);

    this.setState({
      ctx: ctx_temp,
      analyser: analyser_temp
    })
  }

  componentWillReceiveProps( nextProps ){
    if( this.props.status != nextProps.status ){
      nextProps.status == 'playing' ? this.start() : this.stop()
    }
  }

  start(){
    const { ctx, analyser, width, height } = this.state

    this.setState({equaliser: setInterval(function(){
      var freqData = new Uint8Array(analyser.frequencyBinCount);

          analyser.getByteFrequencyData(freqData);
          ctx.clearRect(0, 0, width, height);
          ctx.fillStyle = '#d3d3d3'
          for (var i = 0; i < freqData.length; i+=16 ) {
            ctx.fillRect((i / 16)*6, height, 5, -(freqData[i] / 2));
          }
     }, 33)})
  }

  stop(){
    clearInterval(this.state.equaliser)
  }

  render(){
    return(
      <canvas id = 'eqv' width = '1024'height = '200'></canvas>
    )
  }
}
