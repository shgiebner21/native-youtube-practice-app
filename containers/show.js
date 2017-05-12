import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const Show = props => {
  const id = props.match.params.id
  if (!props.video) {
    props.dispatch({ type: 'SET_VIDEO_BY_ID', payload: id })
  }

  return (
    <View cls='pa2' >
      <Text>{props.video.title}</Text>
    </View>
  )
}

const connector = connect(state => state)

export default connector(Show)
