import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Actions Creators */

const { Types, Creators } = createActions({
  // actionType: ['dataPassed'],
  // vai chamar o saga, fazer a requisição de login
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: false, // se o usuario esta logado ou não
  token: null,
});

/* Reducers */
export const success = (state, { token }) => {
  console.log(token);
  return state.merge({ signedIn: true, token });
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
