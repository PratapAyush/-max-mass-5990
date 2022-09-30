import { productActions } from "./action"


const initState={
    isLoading: true,
    products: [],
    indivisualProduct:null,
    isError: false,
}

export const ProductsReducer= (state= initState, action)=>{

    switch(action.type){
        
        case productActions.GET_PRODUCT_REQUEST:{
            return(
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case productActions.GET_PRODUCT_SUCCESS:{
            return(
                {
                    ...state,
                    isLoading: false,
                    products: action.payload,
                    isError: false,
                }
                )
            }
            case productActions.GET_PRODUCT_FAILURE:{
                return(
                    {
                        ...state,
                        isLoading: false,
                        isError: true,
                    }
                )
            }
            case productActions.GET_INDIVISUALPRODUCT_REQUEST:{
                return(
                    {
                        ...state,
                        isLoading: true,
                        isError: false,
                    }
                )
            }
            case productActions.GET_INDIVISUALPRODUCT_SUCCESS:{
                return(
                    {
                        ...state,
                        isLoading: false,
                        indivisualProduct: action.payload,
                        isError: false,
                    }
                    )
            }
            case productActions.GET_INDIVISUALPRODUCT_FAILURE:{
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