import { act } from "react-dom/test-utils";
import {GET_STATUS, DARK_MODE, GET_NEWS, GET_CONTENT } from "../actions/ActionTypes";
export default function (state = {}, action) {
  switch (action.type) {
    case GET_STATUS:
      return {...state, success: action.payload}
    case GET_NEWS:
      return {...state, news: action.payload}
    case DARK_MODE:
      return {...state, darkmode: action.payload}
    case GET_CONTENT:
      return {...state, success: action.payload}
    default:
      return state;
  }
}