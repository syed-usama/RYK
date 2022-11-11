const initialState = {
  cart: [],
  storeCart: [],
  store_products:[],
  shops:[],
  food_products:[],
  food_shops:[],
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
      case 'Set_Food_Products':
      return {
        ...state,
        food_products: action.payload,
      };
      case 'Set_Food_Shops':
      return {
        ...state,
        food_shops: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
