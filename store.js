import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const store = createStore (
  combineReducers({
    value: () => null,
    videos: () => null,
    dataSource: () => null,
    video: () => null
  }),
  applyMiddleware(thunk)
)

export default store
