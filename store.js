import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { ListView } from 'react-native'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

const store = createStore (
  combineReducers({
    value: (state= '', action) => {
      switch (action.type) {
        case 'SET_TEXT':
          return action.payload
        default:
          return state
      }
    },
    loading: (state=false, action) => {
      switch (action.type) {
        case 'FETCHING_VIDEOS':
          return true
        default:
          return state
      }
    },
    videoItems: (state=[], action) => {
      switch (action.type) {
        case 'SET_VIDEOS':
          return action.payload
        default:
          return state
      }
    },
    dataSource: (state=ds.cloneWithRows([]), action) => {
      switch (action.type) {
        case 'SET_VIDEOS':
          return ds.cloneWithRows(action.payload)
        default:
          return state
      }
    },
    video: (state=null, action) => {
      switch (action.type) {
        case 'SET_VIDEO':
          return action.payload
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)

export default store
