import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY } from "./actions";



const reducer = (state, action) => {
    if(action.type === CLEAR_CART){
        return {...state, cart:new Map()}
    }
    if (action.type === REMOVE) {
        let updatedArrays = 
    }

    
    
    
    throw new Error (`no matching action type : ${action.type}`)
    
}
export default reducer