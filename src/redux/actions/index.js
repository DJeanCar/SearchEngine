import { ActionTypes } from '../constants/actionTypes';
import axios from 'axios';

const key = process.env['REACT_APP_GKEY'];
const cx = process.env['REACT_APP_GCX'];
const ocp = process.env['REACT_APP_OCP'];

export const setResults = (searchCriteria, engines) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_RESULTS_LOADING
    })
    let response = [];
    if (engines.includes('google')) {
      const googleResponse = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${searchCriteria}`);
      response = [...response, ...googleResponse.data.items];
    }
    if (engines.includes('bing')){
      const bingResponse = await axios.get(`https://api.bing.microsoft.com/v7.0/search?q=${searchCriteria}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': ocp
          }
        }
      );
      response = [...response, ...bingResponse.data.webPages.value];
    }

    dispatch({
      type: ActionTypes.SET_RESULTS,
      payload: response,
    });
  };
};
