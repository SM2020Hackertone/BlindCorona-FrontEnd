import { GET_STATUS, DARK_MODE, GET_NEWS, GET_CONTENT } from "./ActionTypes";
import { request } from "../utils/axios";
const USER_URL = "";
export function GetStatus(Params, Data) {
    const data = request("GET", USER_URL + "/corona-status",Params,Data);
    return {
      type: GET_STATUS,
      payload: data,
    };
}
export function GetNews(Params, Data){
  const data = request("GET", USER_URL + "/news", Params, Data);
  return{
    type: GET_NEWS,
    payload: data
  }
}
export function GetContent(Params, Data){
  const data = request("POST", USER_URL + "/news", Params, Data);
  return{
    type: GET_CONTENT,
    payload: data
  }
}
export function GetInfo(Params, Data){
  const data = request("GET", USER_URL + "/corona-info", Params, Data);
  return{
    type: GET_CONTENT,
    payload: data
  }
}
export function DarkMode(state){
  return{
    type: DARK_MODE,
    payload: state,
  }
  
}
