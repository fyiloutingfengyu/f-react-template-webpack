import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData, getGoodsList } from '@/redux/actions/category';

export default function Category() {
  const dispatch: any = useDispatch();
  const categoryList = useSelector((state: any) => {
    return state.category.categoryList;
  });

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategoryData());
  }, []);

  const toHome = () => {
    navigate('/home?id=1', {
      state: {
        from: 'category'
      }
    });
  };

  return (
    <div onClick={toHome}>home</div>
  );
}
