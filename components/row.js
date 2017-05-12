import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { wrap } from 'react-native-style-tachyons'

const Row = props => {
  return (
    <Link to={`/video/${props.id}`} >
      <View cls='pa1 bb flx-row aifs jcsb' >
        <Text cls='f5 blue' >{props.title}</Text>
      </View>
    </Link>
  )
}


export default wrap(Row)
