import {
  SEARCH_NEWS,
  GET_SINGLE_NEWS,
  CLEAR_NEWS,
  SET_LOADING,
  QUERY_MISMATCH
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case SEARCH_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false
      }
    case CLEAR_NEWS:
      return {
        ...state,
        news: [],
        loading: false
      }
    case GET_SINGLE_NEWS:
      return {
        ...state,
        singleNews: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}