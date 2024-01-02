import { combineReducers } from 'redux';
import common from './common';
import category from './category';

const CombineReducers = combineReducers({
  common,
  category
});

export default CombineReducers;
