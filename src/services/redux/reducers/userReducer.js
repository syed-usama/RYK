const initialState = {
  cart: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_To_Cart':
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
