import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import ReduxPersistConfig from '../Config/ReduxPersistConfig'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const appReducer = combineReducers({
    // basicInfo: require('./BasicInfoRedux').reducer,
    // specificInfo: require('./SpecificInfoRedux').reducer,
    // loan: require('./LoanRedux').reducer,
    // stage: require('./StageRedux').reducer,
    // login: require('./LoginRedux').reducer,
    // callmeback: require('./PhoneBackRedux').reducer
  })

  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS') {
      state = undefined
    } else if (action.type === 'CLEAR_DATA') {
      state = {
        ...appReducer({}, {}),
        login: (state && state.login) || {},
        app: (state && state.app) || {}
      }
    }
    return appReducer(state, action)
  }

  const persistedReducer = persistReducer(ReduxPersistConfig.storeConfig, rootReducer)

  return configureStore(persistedReducer, rootSaga)
}
