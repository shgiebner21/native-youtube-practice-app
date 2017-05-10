import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


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
    videos: (state=[], action) => {
      switch (action.type) {
        case 'SET_VIDEOS':
          console.log(action.payload)
          return action.payload
        default:
          return state
      }
    },
    dataSource: () => null,
    video: () => null
  }),
  applyMiddleware(thunk)
)

export default store
