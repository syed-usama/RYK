const initialState = {
  cart: [],
  storeCart: [],
  store_products:[],
  shops:[],
  food_Products:[],
  resturants:[],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_To_Cart':
      return {
        ...state,
        cart: action.payload,
      };
      case 'Add_To_Store':
      return {
        ...state,
        storeCart: action.payload,
      };
      case 'Set_Shops':
      return {
        ...state,
        shops: action.payload,
      };
      case 'Set_Store_Products':
      return {
        ...state,
        store_products: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
