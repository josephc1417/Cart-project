import {createContext, useContext, useEffect, useReducer} from "react";
import cartItems from "./data";
import reducer from "./reducer";


import {CLEAR_CART, DECREASE, INCREASE, REMOVE} from "./actions";
import {getTotals} from "./util";


const AppContext = createContext();


const initialState = {
    loading: false ,
    cart: new Map(cartItems.map((item) => [item.id, item])),
};

    export const AppProvider = ({ children }) => {
        const [state,dispatch] = useReducer(reducer,initialState)

        const {total,amount} = getTotals(state.cart);
        const clearCart = () => {
        dispatch({type:CLEAR_CART})
        }
        const remove = (id) => {
        dispatch({type:REMOVE,payload:{id}})
        console.log(id);
        }

        const increase = (id) => {
        dispatch({type:INCREASE,payload:{id}})
        }

        const decrease = (id) => {
        dispatch({type:DECREASE,payload:{id}})
        }

        const fetchData = async () => {
        const response = await fetch (url)
        const cart = await response.json()
        }
        // we still have 2 more actions that we want to dispatch
        useEffect(() => {
            fetchData();
        },[])
    return(
        <AppContext.Provider value={{...state,clearCart, remove,increase,decrease,total,amount}} >
            {children}
        </AppContext.Provider>
    ) 
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}