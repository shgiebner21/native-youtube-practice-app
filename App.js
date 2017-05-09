import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import store from './store'
import { StyleSheet, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'
import Header from './containers/header'

NativeTachyons.build({ rem: 16 }, StyleSheet)

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}
