import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  selectStore: ['stageNumber'],
});

export const StageTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  storeId:null
});

/* ------------- Reducers ------------- */

export const navigateStage = (state, { stageNumber }) =>
  state.merge({ stageNumber });

export const createLead = (
  state,
  { name, surname, number, id, employmentStatus, email }
) => state.merge({ name, surname, number, id, employmentStatus, email });

export const saveToken = (state, { token }) => state.merge({ token });

export const getLoan = (state, { employmentStatus, id, email }) =>
  state.merge({ employmentStatus, id, email });

export const acceptTerms = (state, { accepted }) => state.merge({ accepted });

export const setBilling = (
  state,
  {
    bankName,
    bankAccount,
    bankAccountHolder,
    strikeDate,
    confirmBankDetails,
    confirmDebit
  }
) =>
  state.merge({
    bankName,
    bankAccount,
    bankAccountHolder,
    strikeDate,
    confirmBankDetails,
    confirmDebit
  });

export const sendSignature = (state, { signature }) =>
  state.merge({ signature });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NAVIGATE_STAGE]: navigateStage,
  [Types.CREATE_LEAD]: createLead,
  [Types.SAVE_TOKEN]: saveToken,
  [Types.GET_LOAN]: getLoan,
  [Types.ACCEPT_TERMS]: acceptTerms,
  [Types.SET_BILLING]: setBilling,
  [Types.SEND_SIGNATURE]: sendSignature
});
