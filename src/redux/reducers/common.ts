import {
  LOADING_START,
  LOADING_END,
  CHECK_LOGIN_FAILURE,
  CHECK_LOGIN_SUCCESS,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
} from '@/redux/action-types/common';

const user = window.localStorage.getItem('token');
const initialState = {
  isLoading: false,
  isLogin: !!user,
  userInfo: {},
};

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case CHECK_LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    case CHECK_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        userInfo: action.userInfo
      };
    case GET_USER_INFO_FAILURE:
      return {
        userInfo: {} // todo f
      };
    default:
      return state;
  }
}

export default commonReducer;
