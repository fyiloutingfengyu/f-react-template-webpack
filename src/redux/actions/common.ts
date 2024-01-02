import {
  LOADING_START,
  LOADING_END,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAILURE,
  GET_USER_INFO
} from '@/redux/action-types/common';

export function startLoading() {
  return {
    type: LOADING_START
  };
}

export function endLoading() {
  return {
    type: LOADING_END,
  };
}

export function loginSuccess() {
  return {
    type: CHECK_LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: CHECK_LOGIN_FAILURE,
  };
}

// 获取用户信息
export function getUserInfo() {
  return {
    type: GET_USER_INFO
  };
}


