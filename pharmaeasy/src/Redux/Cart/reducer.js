import { cartActions } from "./action"


const initState={
    isLoading: true,
    cart:[],
    totalPrice: 0,
    totalMRP:0,
    isError: false,
}

export const CartReducer= (state= initState, action)=>{

    switch(action.type){
        
        case cartActions.POST_CART_REQUEST:{
            return(
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case cartActions.POST_CART_SUCCESS:{
            return(
                {
                    ...state,
                    isLoading: false,
                    isError: false,
                }
                )
            }
            case cartActions.POST_CART_FAILURE:{
                return(
                    {
                        ...state,
                        isLoading: false,
                        isError: true,
                    }
                )
            }
        case cartActions.GET_CART_REQUEST:{
            return(
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case cartActions.GET_CART_SUCCESS:{
            //! to get totalAmount in cart
            const initVal = 0;
            const sumInit = action.payload.reduce(
            (prev, curr) => prev + curr.newPrice,
            initVal
            );
            const totalMRPPrice = 0;
            const totalSum = action.payload.reduce(
            (prev, curr) => prev + curr.originalPrice,
            totalMRPPrice
            );
            return(
                {
                    ...state,
                    isLoading: false,
                    cart: action.payload,
                    totalPrice: sumInit,
                    totalMRP:totalSum,
                    isError: false,
                }
                )
            }
            case cartActions.GET_CART_FAILURE:{
                return(
                    {
                        ...state,
                        isLoading: false,
                        isError: true,
                    }
                )
            }
        case cartActions.REMOVE_CART_REQUEST:{
            return(
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case cartActions.REMOVE_CART_SUCCESS:{
            return(
                {
                    ...state,
                    isLoading: false,
                    isError: false,
                }
                )
            }
            case cartActions.REMOVE_CART_FAILURE:{
                return(
                    {
                        ...state,
                        isLoading: false,
                        isError: true,
                    }
                )
            }
            default: 
                return state;
    }
}