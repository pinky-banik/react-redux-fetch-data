
import axios from 'axios';
import { API_URL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILED } from './../constants/todosConstant';


export const getALLTodos = ()=>async(dispatch)=>{
    try {
        dispatch({type: GET_TODOS_REQUEST});
        const res = await axios.get(API_URL);
        dispatch({type: GET_TODOS_SUCCESS,payload : res.data});
    } catch (error) {
        dispatch({type: GET_TODOS_FAILED,payload : error.message});
    }
}