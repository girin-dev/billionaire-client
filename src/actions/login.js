import * as types from './actionTypes';
import axios from 'axios';

export const kakaoAuthorizeWaiting = () => ({
  type: types.KAKAO_AUTHORIZE_WAITING
});

export const kakaoAuthorizeSuccess = (authObj) => ({
  type: types.KAKAO_AUTHORIZE_SUCCESS,
  authObj,
});

export const kakaoAuthorizeFailure = (err) => ({
  type: types.KAKAO_AUTHORIZE_FAILURE,
  err,
});

export const kakaoAuthorizeRequest = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(kakaoAuthorizeWaiting());
    window.Kakao.Auth.login({
      success: function (authObj) {
        dispatch(kakaoAuthorizeSuccess(authObj));
        resolve();
      },
      fail: function (err) {
        dispatch(kakaoAuthorizeFailure(err));
        reject();
      }
    });
  });
}

export const authWaiting = () => ({
  type: types.AUTH_WAITING,
});

export const authSuccess = (response) => ({
  type: types.AUTH_SUCCESS,
  response,
});

export const authFailure = (err) => ({
  type: types.AUTH_FAILURE,
  err,
});

export const authRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(authWaiting());
  return axios.post('/api/members', {
    token: state.loginReducer.kakaoAuthorize.token,
  }).then((response) => {
    dispatch(authSuccess(response));
  }).catch((err) => {
    dispatch(authFailure(err));
  })
}