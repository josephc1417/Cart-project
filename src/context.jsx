import { useContext,useReducer,useEffect, createContext } from "react";
import reducer from "./reducer";


import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY } from "./actions";



//useContext has been imported from react
//We initialized the context(AppContext) with an empty object
// ● AppContext is a React Context API object. ● 
const AppContext = createContext();


//setting up initial state as an object
//we can add and remove more properties 
//we're not locked into working out of the one array
const initialState = {
    loading: false,
    cart: [],
};

// ● Converting cart to an array ● 
const cartItems = cart.map((item) => [item.id, item]);  
const cart = new Map(cartItems)
const cartArray = Array.from(cart.entries())    

// ● Functional Component (AppProvider) that returns JSX  ● 
export const AppProvider = ({ children }) => {

     //looking for reducer function (returns new updated state) and (initial state)
     // ● useReducer Hook returns an array containing the initial state and a dispatch function ● 
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
    <AppContext.Provider value={{...state}} >
    {children}
    </AppContext.Provider>
    ) 
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}