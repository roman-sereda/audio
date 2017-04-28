import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu } from 'semantic-ui-react'

export default class SongsBar extends Component{

  render(){
    return(
      <span>
        <Menu pointing secondary>
          <Link to = '/songs_list'><Menu.Item name = 'Songs List' link></Menu.Item></Link>
          <Link to = '/song_form'><Menu.Item name = 'Add song' link></Menu.Item></Link>
        </Menu>
      </span>
    )
  }
}
