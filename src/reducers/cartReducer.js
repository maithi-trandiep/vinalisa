import { ADD_TO_CART, REMOVE_ITEM, REMOVE_ALL, SUB_QUANTITY, ADD_QUANTITY, } from '../actions/action-types/cart-actions';

const initState = {
  items: [
    {id:1, title: "Sancerre Blanc", year: "2018", wine: "Belle maturité, délicats arômes de fleurs blanches, fruits jaunes. La finale est fraiche avec une belle acidité.", producer: "Domaine Vacheron", price: 19.50, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 19/04"},
    {id:2, title: "Sancerre Les Romains", year: "2017", wine: "Terroir Silex, notes d'agrumes confits, légère salinité avec une superbe fraicheur ! Peut se garder 8 à 10 ans sans problème ! ", producer: "Domaine Vacheron", price: 30, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 20/04"},
    {id:3, title: "Sancerre Chambrates", year: "2017", wine: "Un vin rond, la bouche est ample et longue. Nez très expresssif avec des arômes de fruits exotiques. Beau vin de garde !", producer: "Domaine Vacheron", price: 30, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 21/04"},
    {id:4, title: "Sancerre Le Paradis", year: "2018", wine: "Nez délicat aux notes florales, belle complexité avec une finale élégante légèrement iodée. 8 à 10 ans.", producer: "Domaine Vacheron", price: 30, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 09/04"},
    {id:5, title: "Sancerre Guigne-Chèvres", year: "2018", wine: "Très belle tension pour cette cuvée à la fois complexe et élégante. Très juteux et floral.", producer: "Domaine Vacheron", price: 30, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 10/04"},
    {id:6, title: "Sancerre Rouge ", year: "2017", wine: "Le nez est très fruité et gourmand avec des botes florales. Les tannins sont soyeux et la finale légèrement épicée.", producer: "Domaine Vacheron", price: 25, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 15/04"},
    {id:7, title: "Sancerre Rouge Belle Dame  ", year: "2016", wine: "Présence de fruits noirs mûrs, cerises, cassis. Délicates notes d'épices avec des tannins bien fondus, très élégant ! Se garde 10 ans facilement !", producer: "Domaine Vacheron", price: 35, imgUrl: "./assets/img/raisin_field.jpg", date: "Livraison à partir de 15/04"}
  ],
  addedItems:[],
  total: 0
}

const cartReducer = (state = initState, action) => {
    
  if(action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id)

    let existed_item = state.addedItems.find(item => action.id === item.id)
    if(existed_item) {
      addedItem.quantity += 1 
        return {
          ...state,
            total: state.total + addedItem.price 
        }
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price 
      
      return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : newTotal
        }
      
    }
  }
  if(action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return {
        ...state,
        addedItems: new_items,
        total: newTotal
    }
  }

  if(action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1 
    let newTotal = state.total + addedItem.price
    return {
        ...state,
        total: newTotal
    }
  }
  if(action.type === SUB_QUANTITY) {  
    let addedItem = state.items.find(item => item.id === action.id) 
    if(addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
          ...state,
          addedItems: new_items,
          total: newTotal
      }
    } else {
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