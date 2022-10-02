import axios from "axios"
import { emptyCartItems } from "../Cart/action"

//Action types
export const orderActions={
    POST_ORDER_REQUEST: 'POST_ORDER_REQUEST',
    POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS',
    POST_ORDER_FAILURE: 'POST_ORDER_FAILURE',

    GET_ORDER_REQUEST: 'GET_ORDER_REQUEST',
    GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS',
    GET_ORDER_FAILURE: 'GET_ORDER_FAILURE',

    REMOVE_ORDER_REQUEST: 'REMOVE_ORDER_REQUEST',
    REMOVE_ORDER_SUCCESS: 'REMOVE_ORDER_SUCCESS',
    REMOVE_ORDER_FAILURE: 'REMOVE_ORDER_FAILURE'
}

//POST Actions

export const postOrderRequest=()=>{
    return {
        type: orderActions.POST_ORDER_REQUEST,
    }
}
export const postOrderSuccess=(data)=>{
    return {
        type: orderActions.POST_ORDER_SUCCESS,
        payload: data
    }
}
export const postOrderFailure=()=>{
    return {
        type: orderActions.POST_ORDER_FAILURE,
    }
}

export const addToOrder=(data)=>(dispatch, getState)=>{
    dispatch(postOrderRequest());

    const ordersDataArray= [];

    for(let products of data){
      products && ordersDataArray.push(axios.post("http://localhost:8080/orders",products))
    }

    Promise.all(ordersDataArray)
    .then((res)=>{
        console.log(res,"rest in peace")
        dispatch(postOrderSuccess(res.data))
    }).then(()=>{
        dispatch(emptyCartItems(data))
    })
    .catch(res=>{
        dispatch(postOrderFailure())
    })

}
//GET Actions

export const getOrderRequest=()=> {
    return {
        type: orderActions.GET_ORDER_REQUEST,
    }
}
export const getOrderSuccess=(data)=> {
    return {
        type: orderActions.GET_ORDER_SUCCESS,
        payload: data
    }
}
export const getOrderFailure=()=> {
    return {
        type: orderActions.GET_ORDER_FAILURE,
    }
}

export const getOrderItems=()=>(dispatch, getState)=>{
    dispatch(getOrderRequest());
    axios({
        url: ' http://localhost:8080/orders',
        method: 'GET',
    }).then(res=>{
        dispatch(getOrderSuccess(res.data))
    }).catch(err=>{
        dispatch(getOrderFailure())
    })
}

// Remove Actions

export const removeOrderRequest=()=> {
    return {
        type: orderActions.REMOVE_ORDER_REQUEST,
    }
}
export const removeOrderSuccess=()=> {
    return {
        type: orderActions.REMOVE_ORDER_SUCCESS,
    }
}
export const removeOrderFailure=()=> {
    return {
        type: orderActions.REMOVE_ORDER_FAILURE,
    }
}

export const removeOrderItems=(id)=>(dispatch, getState)=>{
    dispatch(removeOrderRequest());
    axios({
        url: `http://localhost:8080/orders/${id}`,
        method: 'DELETE',
    }).then(res=>{
        dispatch(removeOrderSuccess())
        dispatch(getOrderItems())
    }).catch(err=>{
        dispatch(removeOrderFailure())
    })
}