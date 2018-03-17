import { takeLatest, all } from 'redux-saga/effects'
// import API from '../Services/Api'
/* ------------- Types ------------- */

// import { StartupTypes } from '../Redux/StartupRedux'
// import { StageTypes } from '../Redux/StageRedux'
// import { LoanTypes } from '../Redux/LoanRedux'
// import { LoginTypes } from '../Redux/LoginRedux'
// import { PhoneBackTypes } from '../Redux/PhoneBackRedux'

// /* ------------- Sagas ------------- */

// import { startup } from './StartupSagas'
// import { creatLead, selectLoans, acceptTerms, setBilling, sendSignature, getLoan } from './StageSagas'
// import { requestLogin, dashboard, getLead } from './LoginSagas'
// import { phoneBack } from './PhoneBackSagas'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = API()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
  //   takeLatest(StartupTypes.STARTUP, startup),
  //   takeLatest(StageTypes.CREATE_LEAD, creatLead, api.start),
  //   takeLatest(StageTypes.GET_LOAN, getLoan, api.policy),
  //   takeLatest(LoanTypes.SELECT_LOANS, selectLoans, api.select),
  //   takeLatest(StageTypes.ACCEPT_TERMS, acceptTerms, api.acceptTerms),
  //   takeLatest(StageTypes.SET_BILLING, setBilling, api.setBilling),
  //   takeLatest(StageTypes.SEND_SIGNATURE, sendSignature, api.sendSignature),

  //   //Login sagas
  //   takeLatest(LoginTypes.LOGIN_REQUEST, requestLogin, api.login),
  //   takeLatest(LoginTypes.DASHBOARD_REQUEST, dashboard, api.dashboard),
  //   takeLatest(LoginTypes.GET_LEAD, getLead, api.getLead),

  //   //CallBack Sagas
  //   takeLatest(PhoneBackTypes.PHONEBACK_REQUEST, phoneBack, api.getCallBack)
   ])
}
