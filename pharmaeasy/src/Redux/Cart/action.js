import axios from "axios"

//Action types
export const cartActions={
    POST_CART_REQUEST: 'POST_CART_REQUEST',
    POST_CART_SUCCESS: 'POST_CART_SUCCESS',
    POST_CART_FAILURE: 'POST_CART_FAILURE',

    GET_CART_REQUEST: 'GET_CART_REQUEST',
    GET_CART_SUCCESS: 'GET_CART_SUCCESS',
    GET_CART_FAILURE: 'GET_CART_FAILURE',

    REMOVE_CART_REQUEST: 'REMOVE_CART_REQUEST',
    REMOVE_CART_SUCCESS: 'REMOVE_CART_SUCCESS',
    REMOVE_CART_FAILURE: 'REMOVE_CART_FAILURE',

    EMPTY_CART_REQUEST: 'EMPTY_CART_REQUEST',
    EMPTY_CART_SUCCESS: 'EMPTY_CART_SUCCESS',
    EMPTY_CART_FAILURE: 'EMPTY_CART_FAILURE'
}

//POST Actions

export const postCartRequest=()=>{
    return {
        type: cartActions.POST_CART_REQUEST,
    }
}
export const postCartSuccess=(data)=>{
    return {
        type: cartActions.POST_CART_SUCCESS,
        payload: data
    }
}
export const postCartFailure=()=>{
    return {
        type: cartActions.POST_CART_FAILURE,
    }
}

export const addToCart=(elemId,toast)=>(dispatch, getState)=>{
    dispatch(postCartRequest());
const id= getState().auth.id
    axios({
        url: `https://pharmeasy-sumangiri.herokuapp.com/cart/${id}/${elemId}`,
        method: 'GET',
    }).then(res=>{
        console.log(res,"cart")
        dispatch(postCartSuccess())
        toast({
            title: 'Item got added to the cart',
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        
    }).then(()=>{
        dispatch(getCartItems())
    })
    .catch(err=>{
        dispatch(postCartFailure())
        toast({
            title: "We couldn't add the item to the cart try again later",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
    })
}
//GET Actions

export const getCartRequest=()=> {
    return {
        type: cartActions.GET_CART_REQUEST,
    }
}
export const getCartSuccess=(data)=> {
    return {
        type: cartActions.GET_CART_SUCCESS,
        payload: data
    }
}
export const getCartFailure=()=> {
    return {
        type: cartActions.GET_CART_FAILURE,
    }
}

export const getCartItems=()=>(dispatch, getState)=>{
    dispatch(getCartRequest());
    const id= getState().auth.id
    axios({
        url: `https://pharmeasy-sumangiri.herokuapp.com/cart/product/products/${id}`,
        method: 'GET',
    }).then(res=>{
console.log(res.data,"getcart")
        dispatch(getCartSuccess(res.data))
        console.log(res,"cartData")
    }).catch(err=>{
        dispatch(getCartFailure())
    })
}

// Remove Actions

export const removeCartRequest=()=> {
    return {
        type: cartActions.REMOVE_CART_REQUEST,
    }
}
export const removeCartSuccess=()=> {
    return {
        type: cartActions.REMOVE_CART_SUCCESS,
    }
}
export const removeCartFailure=()=> {
    return {
        type: cartActions.REMOVE_CART_FAILURE,
    }
}

export const removeCartItems=(id,toast)=>(dispatch, getState)=>{
    dispatch(removeCartRequest());
    const userid= getState().auth.id
    axios({
        url: `https://pharmeasy-sumangiri.herokuapp.com/cart/cartitemdelete/${userid}/${id}`,
        method: 'DELETE',
    }).then(res=>{
        dispatch(removeCartSuccess())
        toast({
            title: 'Item got removed from the cart',
            status: "success",
            duration: 3000,
            isClosable: true,
          });
    }).then(()=>{
        dispatch(getCartItems(userid))
    }).catch(err=>{
        dispatch(removeCartFailure())
        toast({
            title: 'Try again later!',
            status: "error",
            duration: 3000,
            isClosable: true,
          });
    })
}


// EMPTY cart Actions

export const emptyCartRequest=()=> {
    return {
        type: cartActions.EMPTY_CART_REQUEST,
    }
}
export const emptyCartSuccess=()=> {
    return {
        type: cartActions.EMPTY_CART_SUCCESS,
    }
}
export const emptyCartFailure=()=> {
    return {
        type: cartActions.EMPTY_CART_FAILURE,
    }
}

export const emptyCartItems=(data)=>(dispatch, getState)=>{
    dispatch(emptyCartRequest());
    
    const emptyCartData=[];

    for(let products of data){

        let temp= dispatch(removeCartItems(products.id))
        emptyCartData.push(temp)
    }
    Promise.all(emptyCartData)
    .then((res)=>{
        dispatch(emptyCartSuccess());
    })
    .catch((err)=>{
        dispatch(emptyCartFailure());
    })
}