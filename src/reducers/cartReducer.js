import { ADD_TO_CART, REMOVE_ITEM, REMOVE_ALL, SUB_QUANTITY, ADD_QUANTITY, } from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {id:1, title: "Vin 1", field: "Presentation du vignoble", wine: "Presentation du vin", producer: "Presentation du producteur", price: 110, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 19/04"},
    {id:2, title: "Vin 2", field: "Presentation du vignoble", wine: "Presentation du vin", producer: "Presentation du producteur", price: 200, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 20/04"},
    {id:3, title: "Vin 3", field: "Presentation du vignoble", wine: "Presentation du vin", producer: "Presentation du producteur", price: 120, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 21/04"},
    {id:4, title: "Vin 4", field: "Presentation du vignoble", wine: "Presentation du vin", producer: "Presentation du producteur", price: 260, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 09/04"},
    {id:5, title: "Vin 5", field: "Presentation du vignoble", wine: "Presentation du vin", producer: "Presentation du producteur", price: 160, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 10/04"},
    {id:6, title: "Vin 6", field: "Presentation du vignoble", wine: "Presentation du vin", producer: "Presentation du producteur", price: 90, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 15/04"}
  ],
  addedItems:[],
  total: 0
}

const cartReducer= (state = initState, action) => {
    
  //INSIDE LISTOFFER COMPONENT
  if(action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item=> item.id === action.id)

    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item=> action.id === item.id)
    if(existed_item) {
      addedItem.quantity += 1 
        return {
          ...state,
            total: state.total + addedItem.price 
        }
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price 
      
      return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : newTotal
        }
      
    }
  }
  if(action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)
    
    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return {
        ...state,
        addedItems: new_items,
        total: newTotal
    }
  }

  //INSIDE CART COMPONENT
  if(action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item=> item.id === action.id)
    addedItem.quantity += 1 
    let newTotal = state.total + addedItem.price
    return {
        ...state,
        total: newTotal
    }
  }
  if(action.type === SUB_QUANTITY) {  
    let addedItem = state.items.find(item=> item.id === action.id) 
    //if the qt == 0 then it should be removed
    if(addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item=>item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
          ...state,
          addedItems: new_items,
          total: newTotal
      }
    }
    else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
          ...state,
          total: newTotal
      }
    }
  }

  if(action.type === REMOVE_ALL) {
    return {
        ...state,
        addedItems: [],
        total: 0
    }
  }

  return state

}
export default cartReducer;