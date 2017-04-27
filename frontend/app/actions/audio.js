import axios from 'axios'

export function addAudio( audio_file ){
  console.log(audio_file)
  return  dispatch => {
    return axios.post('/audios/', { audio_file })
      .then(response => {
        dispatch(sendAudio())})
      .catch(error => console.log('12'))
}}

export const sendAudio = () => ({ type: types.SEND_AUDIO })
