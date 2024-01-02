import { GET_CATEGORY_LIST, GET_GOODS_LIST } from '@/redux/action-types/category';

const initState = {
  categoryList: [],
  goodsList: []
};

export default function category(state = initState, action) {
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.data
      };
    case GET_GOODS_LIST:
      return {
        ...state,
        goodsList: action.data
      };
    default:
      return initState;
  }
}
