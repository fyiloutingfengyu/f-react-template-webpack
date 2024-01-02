import { GET_CATEGORY_LIST, GET_GOODS_LIST } from '@/redux/action-types/category';

export const setCategoryData = (data) => {
  return {
    type: GET_CATEGORY_LIST,
    data
  };
};

export const setGoodsList = (data) => {
  return {
    type: GET_GOODS_LIST,
    data
  };
};

// 获取分类列表
export const getCategoryData = () => {
  return dispatch => {
    setTimeout(() => {
      const list = [
        {
          categoryId: 1,
          categoryName: 'category 1'
        },
        {
          categoryId: 2,
          categoryName: 'category 2'
        }
      ];

      dispatch(setCategoryData(list));
    }, 1000);
  };
};

// 获取分类下面的商品列表
export const getGoodsList = (options) => {
  return dispatch => {
    setTimeout(() => {
      const list = [
        {
          goodsId: 11,
          goodsName: 'goodsName 1'
        },
        {
          goodsId: 12,
          goodsName: 'goodsName 2'
        }
      ];

      dispatch(setGoodsList(list));
    }, 1000);
  };
};
