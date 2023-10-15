import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY } from "./actions";



const reducer = (state, action) => {
    if(action.type === CLEAR_CART){
        return {...state, cart:new Map()}
    }
    if (action.type === REMOVE) {
        const newCart = new Map(state.cart)
        newCart.delete(action.payload.id)
        return {...state, cart:newCart}
    }
    if (action.type === INCREASE) {
        const newCart = new Map(state.cart)
        const itemId = (action.payload.id)
        const item  = newCart.get(itemId)
        const newItem = {...item, amount:item.amount + 1}
        newCart.set(itemId,newItem)
        return {...state, cart:newCart}
    }
    
    if (action.type === DECREASE) {
        const newCart = new Map(state.cart)
        const itemId = (action.payload.id)
        const item  = newCart.get(itemId)
        
        
        /* Check for the value first  */
        if(item.amount === 1){
            newCart.delete(itemId)
            return {...state, cart:newCart}
        }
        const newItem = {...item, amount:item.amount - 1}
            newCart.set(itemId,newItem)
        return {...state, cart:newCart}
    }

{/* seems like we are using class methods like get and set to retrieve and set values */}
    
    
    
    throw new Error (`no matching action type : ${action.type}`)
    
}
export default reducer