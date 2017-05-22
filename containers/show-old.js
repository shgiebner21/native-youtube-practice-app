import React, {Component} from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { WebBrowser } from 'expo'
import { connect } from 'react-redux'
import { Link } from 'react-router-native'
import { wrap } from 'react-native-style-tachyons'
import {find, propEq, pathOr} from 'ramda'

class Show extends Component {
  componentDidMount () {
      this.props.dispatch({ type: 'SET_VIDEO',
                       payload: find(propEq('id', this.props.match.params.id), this.props.videoItems)
      })
  }
  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      `https://www.youtube.com/watch?v=${this.props.video.id}`
    )
  }

  render () {
console.log('value of pathOr(title) is', pathOr('', ['props', 'video', 'title'], this))
    return (
      <View cls='flx-i' >
        <View cls='flx-i hg'>
          <Text>{pathOr('', ['props', 'video', 'title'], this)}</Text>
          <Image cls='rm-stretch h5'
            source={{
              uri: pathOr('', ['video', 'thumbnails', 'high', 'url'], this.props)
            }}
          />
        </View>
        <View cls='flx-i h2 bg-lightblue'>
          <TouchableOpacity onPress={this._handlePressButtonAsync}>
            <Text cls='ba pv2 ph3br2 gh-white blue'>Play Video</Text>
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
