import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'

const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0OTIzOTIyNTQsImV4cCI6MTUyMzkyODI1NCwiYXVkIjoieW91dHViZS1hcGkubm93LnNoIiwic3ViIjoiZ3Vlc3QifQ.FSMS3Bx3Adsx65IJc_svUO6wuc2oYW_8wN4TwBcBOT8'

const Header = props => {
  return (
    <View cls='flx-row aic jcc h2 bg-red'>
      <TextInput cls='flx-i ph3 bg-white red ba b--red br2 mh3'
        value={props.value}
        placeholder='YouTube Search'
        onChangeText={ (value) => props.dispatch({ type: 'SET_TEXT', payload: value }) }
        onSubmitEditing={ () => props.dispatch( dispatch => {
          dispatch({ type: 'FETCHING_VIDEOS' })
          return fetch(`https://youtube-search-api.now.sh/?q=${encodeURI(props.value)}`,
            { headers: { Authorization: 'Bearer ' + jwt } }
          ).then(res => res.json())
           .then(results => dispatch({ type: 'SET_VIDEOS', payload: results}))
        })}
        placeholder='Name of video to search'
      />
    </View>
  )
}

const connector = connect(state => state)

export default connector(wrap(Header))
