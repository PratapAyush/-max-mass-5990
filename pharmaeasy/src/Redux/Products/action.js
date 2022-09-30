import axios from "axios"

//Action types
export const productActions={
    GET_PRODUCT_REQUEST: 'GET_PRODUCT_REQUEST',
    GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_FAILURE: 'GET_PRODUCT_FAILURE',

    GET_INDIVISUALPRODUCT_REQUEST: 'GET_INDIVISUALPRODUCT_REQUEST',
    GET_INDIVISUALPRODUCT_SUCCESS: 'GET_INDIVISUALPRODUCT_SUCCESS',
    GET_INDIVISUALPRODUCT_FAILURE: 'GET_INDIVISUALPRODUCT_FAILURE',
}

//GET Products Actions

export const getProductRequest=()=> {
    return {
        type: productActions.GET_PRODUCT_REQUEST,
    }
}
export const getProductSuccess=(data)=> {
    return {
        type: productActions.GET_PRODUCT_SUCCESS,
        payload: data
    }
}
export const getProductFailure=()=> {
    return {
        type: productActions.GET_PRODUCT_FAILURE,
    }
}


export const getProducts= () => (dispatch, getState) => {

    dispatch(getProductRequest());

    axios({
        url: `https://pharmeasy-sumangiri.herokuapp.com/products`,
        method: 'GET',
        params:{

        }
    }).then((res)=>{

        dispatch(getProductSuccess(res.data));

    }).catch((err)=>{

        dispatch(getProductFailure())
    })
}

//GET IndivisualProducts Actions

export const getIndivisualProductRequest=()=> {
    return {
        type: productActions.GET_INDIVISUALPRODUCT_REQUEST,
    }
}
export const getIndivisualProductSuccess=(data)=> {
    return {
        type: productActions.GET_INDIVISUALPRODUCT_SUCCESS,
        payload: data
    }
}
export const getIndivisualProductFailure=()=> {
    return {
        type: productActions.GET_INDIVISUALPRODUCT_FAILURE,
    }
}

export const getIndivisualProducts= ({id}) => (dispatch, getState) => {

    dispatch(getIndivisualProductRequest());

    axios({
        url: `https://pharmeasy-sumangiri.herokuapp.com/products/${id}`,
        method: 'GET',
        params:{

        }
    }).then((res)=>{
console.log(res,"indP")
        dispatch(getIndivisualProductSuccess(res.data));

    }).catch((err)=>{

        dispatch(getIndivisualProductFailure())
    })
}