import { takeLatest, all } from 'redux-saga/effects'
//import API from '../Services/Api'
/* ------------- Types ------------- */

import { LoginTypes } from '../Redux/LoginRedux'

// /* ------------- Sagas ------------- */

 import { loginRequest } from './LoginSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = API()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
  //   takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest),
   ])
}
