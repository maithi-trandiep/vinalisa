import { ADD_TO_CART, REMOVE_ITEM, REMOVE_ALL, SUB_QUANTITY, ADD_QUANTITY, } from '../actions/action-types/cart-actions';

const initState = {
  items: [
    {id:1, title:'Vin 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, imgUrl: './assets/img/raisin_field.jpg'},
    {id:2, title:'Vin 2', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, imgUrl: './assets/img/raisin_field.jpg'},
    {id:3, title:'Vin 3', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, imgUrl: './assets/img/raisin_field.jpg'},
    {id:4, title:'Vin 4', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, imgUrl: './assets/img/raisin_field.jpg'},
    {id:5, title:'Vin 5', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, imgUrl: './assets/img/raisin_field.jpg'},
    {id:6, title:'Vin 6', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, imgUrl: './assets/img/raisin_field.jpg'}
  ],
  addedItems:[],
  total: 0
}

const cartReducer= (state = initState, action) => {
    
  //INSIDE LISTOFFER COMPONENT
  if(action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item=> item.id === action.id)

    //check if the action id exists in the addedItems
    let existed_item= state.addedItems.find(item=> action.id === item.id)
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
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
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
  if(action.type=== ADD_QUANTITY) {
    let addedItem = state.items.find(item=> item.id === action.id)
    addedItem.quantity += 1 
    let newTotal = state.total + addedItem.price
    return {
        ...state,
        total: newTotal
    }
  }
  if(action.type=== SUB_QUANTITY) {  
    let addedItem = state.items.find(item=> item.id === action.id) 
    //if the qt == 0 then it should be removed
    if(addedItem.quantity === 1){
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

  if(action.type=== REMOVE_ALL){
    return {
        ...state,
        addedItems: [],
        total: 0
    }
  }

  return state

}
export default cartReducer;