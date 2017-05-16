import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import { WebBrowser } from 'expo'
import { connect } from 'react-redux'
import { Link } from 'react-router-native'
import {find, propEq, pathOr} from 'ramda'

class Show extends Component {
  componentDidMount () {
      this.props.dispatch({ type: 'SET_VIDEO',
                       payload: find(propEq('id', this.props.match.params.id), this.props.videoItems)
      })
  }

  render () {
    return (
      <View cls='pa2' >
        <Text>{pathOr('', ['props', 'video', 'title'], this)}</Text>
          <Button
            title="Open Video"
            onPress={() => {
              WebBrowser.openBrowserAsync(
                `https://www.youtube.com/watch?v=${this.props.video.id}`)
            }}
          />
        <Link to='/'>
          <Text>Back to Search</Text>
        </Link>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(Show)
