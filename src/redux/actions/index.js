import { ActionTypes } from '../constants/actionTypes';
import axios from 'axios';

const key = 'AIzaSyApv-JN9oi0Kpij2hpNXq77GJaEkXuYJDo'
const cx = 'c520989f8286c4241';

export const setResults = (searchCriteria) => {
  return async (dispatch) => {
    const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${searchCriteria}`);
    console.log('>>response', response);

    dispatch({
      type: ActionTypes.SET_RESULTS,
      payload: response.data.items,
    });
  };
};

export const setProducts = () => {
  return async (dispatch) => {
    const products = await axios.get('https://fakestoreapi.com/products');

    dispatch({
      type: ActionTypes.SET_PRODUCTS,
      payload: products.data,
    })
  }
  
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  }
};
