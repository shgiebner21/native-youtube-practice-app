import React, {Component} from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Link } from 'react-router-native'
import { wrap } from 'react-native-style-tachyons'
import { WebBrowser } from 'expo'
import {find, propEq, pathOr} from 'ramda'

const getVideo = id => (dispatch, getState) => {
  const value = getState().value
  return fetch (`https://www.youtube-search-api.now.sh/?id=${id}`, {
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0OTIzOTIyNTQsImV4cCI6MTUyMzkyODI1NCwiYXVkIjoieW91dHViZS1hcGkubm93LnNoIiwic3ViIjoiZ3Vlc3QifQ.FSMS3Bx3Adsx65IJc_svUO6wuc2oYW_8wN4TwBcBOT8'
    }
  }).then(res => res.json())
    .then(results => {
      dispatch: ({ type: 'SET_VIDEO', payload: results[0] })
    })
}


class Show extends Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.dispatch(getVideo(id))
  }
  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(this.props.video.link)
  }

  render () {
    const { props } = this
    console.log('value of props - ', props)
    return (
      <View cls='flx-i'>
        <View cls='flx-i hg' >
          <Text>{props.video.id}</Text>
          <Text>{props.video.title}</Text>
          <Image cls='rm-stretch h5'
                 source={{
                   uri: pathOr('', [ 'video', 'thumbnails', 'high', 'url'], props)
                 }}
            />
        </View>
        <View cls='flx-i h2 bg-lightblue'>
          <TouchableOpacity onPress={this._handlePressButtonAsync}>
            <Text cls='ba pv2 ph3 br2 bg-white blue'>Play Video</Text>
          </TouchableOpacity>
          <Link to='/'>
            <Text cls='ba pv2 ph3 br2 bg-white blue'>Back to Search</Text>
          </Link>
        </View>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Show))
