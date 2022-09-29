import axios from "axios"
import { getCartItems } from "../Cart/action"

//Action types
export const authActions={
    REGISTER_AUTH_REQUEST: 'REGISTER_AUTH_REQUEST',
    REGISTER_AUTH_SUCCESS: 'REGISTER_AUTH_SUCCESS',
    REGISTER_AUTH_FAILURE: 'REGISTER_AUTH_FAILURE',

    LOGIN_AUTH_REQUEST: 'LOGIN_AUTH_REQUEST',
    LOGIN_AUTH_SUCCESS: 'LOGIN_AUTH_SUCCESS',
    LOGIN_AUTH_FAILURE: 'LOGIN_AUTH_FAILURE',

    GET_AUTH_REQUEST: 'GET_AUTH_REQUEST',
    GET_AUTH_SUCCESS: 'GET_AUTH_SUCCESS',
    GET_AUTH_FAILURE: 'GET_AUTH_FAILURE'
}

//POST Actions

export const registerAuthRequest=()=>{
    return {
        type: authActions.REGISTER_AUTH_REQUEST,
    }
}
export const registerAuthSuccess=()=>{
    return {
        type: authActions.REGISTER_AUTH_SUCCESS,
    }
}
export const registerAuthFailure=()=>{
    return {
        type: authActions.REGISTER_AUTH_FAILURE,
    }
}

export const registerAuthUser= (userData,toast)=>(dispatch,getState)=>{

    dispatch(registerAuthRequest())
    axios({
        url: 'https://pharmeasy-sumangiri.herokuapp.com/register', 
        method:"POST",
        data: userData
    }).then((res)=>{

        dispatch(registerAuthSuccess())

        toast({
            title: 'User registered successfully',
            status: "success",
            duration: 5000,
            isClosable: true,
          });
    }).catch((err)=>{
        dispatch(registerAuthFailure())
        toast({
            title: 'Our server is slow please try again later!',
            status: "error",
            duration: 4000,
            isClosable: true,
          });
    })
}
export const loginAuthRequest=()=>{
    return {
        type: authActions.LOGIN_AUTH_REQUEST,
    }
}
export const loginAuthSuccess=(data)=>{
    return {
        type: authActions.LOGIN_AUTH_SUCCESS,
        payload: data
    }
}
export const loginAuthFailure=()=>{
    return {
        type: authActions.LOGIN_AUTH_FAILURE,
    }
}

export const loginAuthUser= (userData,toast)=>(dispatch,getState)=>{

    dispatch(loginAuthRequest())
    axios({
        url: 'https://pharmeasy-sumangiri.herokuapp.com/login', 
        method:"POST",
        data: userData
    }).then((res)=>{
        console.log(res,"userdt login")
        dispatch(loginAuthSuccess(res.data.user))
        toast({
            title: `${res.data.message}`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
    }).then((res)=>{
    dispatch(getCartItems(res.data.user._id)) })
    .catch((err)=>{
        dispatch(loginAuthFailure())
       
    })
}
//GET Actions

export const getAuthRequest=()=> {
    return {
        type: authActions.GET_AUTH_REQUEST,
    }
}
export const getAuthSuccess=(data)=> {
    return {
        type: authActions.GET_AUTH_SUCCESS,
        payload: data
    }
}
export const getAuthFailure=()=> {
    return {
        type: authActions.GET_AUTH_FAILURE,
    }
}