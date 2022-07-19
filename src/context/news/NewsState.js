import React, { useReducer } from 'react'
import axios from 'axios';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';

import {
  SEARCH_NEWS,
  GET_SINGLE_NEWS,
  CLEAR_NEWS,
  SET_LOADING,
  QUERY_MISMATCH
} from '../types'

const NewsState = (props) => {
  const initialState = {
    news: [],
    singleNews: {},
    loading: false
  }
  const [state, dispatch] = useReducer(NewsReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getSingleNews = async (objectId) => {
    setLoading();

    const res = await axios.get(`http://hn.algolia.com/api/v1/items/${objectId}`);

    dispatch({
      type: GET_SINGLE_NEWS,
      payload: res.data
    });
  }

  const searchNews = async (text) => {
    setLoading();

    const res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${text}`);


    dispatch({
      type: SEARCH_NEWS,
      payload: res.data.hits,
    });
  }

  const clearNews = () => dispatch({ type: CLEAR_NEWS });

  return (
    <NewsContext.Provider value={
      {
        news: state.news,
        singleNews: state.singleNews,
        loading: state.loading,
        searchNews,
        clearNews,
        getSingleNews
      }
    } >
      {props.children}
    </NewsContext.Provider>
  )

}
export default NewsState;