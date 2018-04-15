import { call, put, select } from "redux-saga/effects";
import LoginActions from "../Redux/LoginRedux";

export function* loginRequest(api, { userName, password }) {
  try {
    const response = yield call(api, {
      userName: userName,
      password: password
    });
    if (response.data.error) {
      alert("you entered the wrong information");
    } else {
      yield put(LoginActions.loginSuccess(response.data.company));
    }
  } catch (err) {
    // alert("can't connect to server");
    
  }
}
