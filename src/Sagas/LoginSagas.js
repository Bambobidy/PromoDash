import { call, put, select }from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

export function* loginRequest(api, { userName, password }) {
  try {
    const response = yield call(api, {
      "userName": userName,
      "password": password
    })
    if (response.data.token) {
      yield put(LoginActions.loginSuccess(response.data.companyId))
    }
  } catch (err) {
    alert("you entered the wrong information")
  }
}