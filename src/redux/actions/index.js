import { ActionTypes } from '../constants/actionTypes';
import axios from 'axios';

const key = 'AIzaSyApv-JN9oi0Kpij2hpNXq77GJaEkXuYJDo'
const cx = 'c520989f8286c4241';

export const setResults = (searchCriteria, engines) => {
  return async (dispatch) => {
    let response = [];
    if (engines.includes('google')) {
      const googleResponse = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${searchCriteria}`);
      response = [...response, ...googleResponse.data.items];
    }
    if (engines.includes('bing')){
      const bingResponse = await axios.get(`https://api.bing.microsoft.com/v7.0/search?q=${searchCriteria}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': '1a2c82d8bc80436689fa9c735d193f7e'
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
