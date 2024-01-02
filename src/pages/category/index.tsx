import React, { useEffect } from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData, getGoodsList } from '@/redux/actions/category';

export default function Category() {
  const dispatch: any = useDispatch();
  const categoryList = useSelector((state) => {
    return state.category.categoryList;
  });

  useEffect(() => {
    dispatch(getCategoryData());
  }, []);

  return (
    <div>category</div>
  );
}
