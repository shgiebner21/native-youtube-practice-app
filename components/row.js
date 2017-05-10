import React from 'react'
import { View, Text } from 'react-native'
import { wrap } from 'react-native-style-tachyons'

const Row = props => {
  return (
    <View cls='pa1 flx-row aifs jcsb' >
      <Text cls='f5 red' >{props.title}</Text>
    </View>
  )
}


export default wrap(Row)
