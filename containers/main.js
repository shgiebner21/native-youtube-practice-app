import React, {Component} from 'react'
import { View, ListView } from 'react-native'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'
import Row from '../components/row'

const Main = (props) => {
  return (
    <View>
      <ListView enableEmptySections
                dataSource={props.videos}
                renderRow={({id, ...video}) => <Row key={id} id={id} {...video} /> }
      />
    </View>
  )
}

const connector = connect(state => state)

export default connector(wrap(Main))
