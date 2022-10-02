import { orderActions } from "./action"


const initState={
    isLoading: true,
    order:[],
    isError: false,
}

export const OrderReducer= (state= initState, action)=>{

    switch(action.type){
        
        case orderActions.POST_ORDER_REQUEST:{
            return(
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case orderActions.POST_ORDER_SUCCESS:{
            return(
                {
                    ...state,
                    isLoading: false,
                    isError: false,
                }
                )
            }
            case orderActions.POST_ORDER_FAILURE:{
                return(
                    {
                        ...state,
                        isLoading: false,
                        isError: true,
                    }
                )
            }
        case orderActions.GET_ORDER_REQUEST:{
            return(
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case orderActions.GET_ORDER_SUCCESS:{

            return(
                {
                    ...state,
                    isLoading: false,
                    order: action.payload,
                    isError: false,
                }
                )
            }
            case orderActions.GET_ORDER_FAILURE:{
                return(
                    {
                        ...state,
                        isLoading: false,
                        isError: true,
                    }
                )
            }
        case orderActions.REMOVE_ORDER_REQUEST:{
            return(
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case orderActions.REMOVE_ORDER_SUCCESS:{
            return(
                {
                    ...state,
                    isLoading: false,
                    isError: false,
                }
                )
            }
            case orderActions.REMOVE_ORDER_FAILURE:{
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