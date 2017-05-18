import React from 'react'
import { View, Text, Image } from 'react-native'
import { Link } from 'react-router-native'
import { wrap } from 'react-native-style-tachyons'

const Row = props => {
  return (
    <Link to={`/video/${props.id}`} >
      <View cls='flx-i pv3 ph2' >
        <Image source={{ uri: props.thumbnails.high.url }}
               cls='rm-stretch h5'
        />
        <Text cls='mt1' >{props.title}</Text>
      </View>
    </Link>
  )
}


export default wrap(Row)
