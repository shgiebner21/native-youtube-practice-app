import React, {Component} from 'react'
import { View, Text, Button, Image , TouchableOpacity } from 'react-native'
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
    return (
      <View cls='flx-i' >
        <View cls='flx-i'>
          <Text cls='pa2 ma2 ba red tc'>{pathOr('', ['props', 'video', 'title'], this)}</Text>
          <Image cls='rm-stretch h5'
            source={{
              uri: pathOr('', ['props', 'video', 'thumbnails', 'high', 'url'], this)
            }}
          />
        </View>
        <View cls='flx-i h2 bg-lightblue jcc aic'>
          <TouchableOpacity onPress={this._handlePressButtonAsync}>
            <Text cls='ba pv2 ph3 br2 bg-white blue mb4 w5 tc'>Play Video</Text>
          </TouchableOpacity>
          <Link to='/'>
            <Text cls='ba pv2 ph3 br2 bg-white blue w5 tc'>Back to Search</Text>
          </Link>
        </View>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Show))
