import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['userName', 'password'],
  loginSuccess: ['companyId']
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userName: '',
  password: '',
  fetching: false,
  companyId:''
})

/* ------------- Reducers ------------- */

export const loginRequest = (state, { userName, password }) => state.merge({ fetching: true})

export const loginSuccess = (state, { companyId }) => state.merge({ fetching: false, companyId })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess
})
