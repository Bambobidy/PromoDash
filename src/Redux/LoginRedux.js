import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ["userName", "password"],
  loginSuccess: ["companyId", "displayName"]
});

export const LoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userName: "",
  password: "",
  fetching: false,
  companyId: "",
  displayName: "DairyMaid",
  incorrect: false
});

/* ------------- Reducers ------------- */

export const loginRequest = (state, { userName, password }) =>
  state.merge({ userName, fetching: true });

export const loginSuccess = (state, { companyId }) =>
  state.merge({ fetching: false, companyId });

export const loginFailure = (state) =>
  state.merge({ fetching: false, incorrect: true, });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess
});
