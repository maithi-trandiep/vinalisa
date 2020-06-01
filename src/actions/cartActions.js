import { ADD_TO_CART, REMOVE_ITEM, REMOVE_ALL, SUB_QUANTITY, ADD_QUANTITY } from "./action-types/cart-actions";

//add cart action
export const addToCart = (id) => { 
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//remove all items action
export const removeAll = () => {
    return {
        type: REMOVE_ALL
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}