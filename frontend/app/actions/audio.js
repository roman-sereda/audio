import axios from 'axios'
import * as types from '../constants/action-types'

export function addAudio( audio_file ){
  console.log( audio_file )
  return  dispatch => {
    return axios.post('/audios/', audio_file )
      .then(response => {
        dispatch(sendAudio())})
}}

export function getAudios(){
  return  dispatch => {
    return axios.get('/audios/')
      .then(response => {
        dispatch(receiveAudios( response.data.audios ))})
}}

export const sendAudio = () => ({ type: types.SEND_AUDIO })
export const receiveAudios = data => ({ type: types.GET_AUDIOS, audios: data })
