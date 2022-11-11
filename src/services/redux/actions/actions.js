import axios from "axios";

export const addCart = cart => ({
  type: 'Add_To_Cart',
  payload: cart,
});
export const addtoStore = cart => ({
  type: 'Add_To_Store',
  payload: cart,
});
export const get_store_products = (from,limit,feedback) => {
  return (dispatch) => {
      let url = 'https://mallofryk.com/api/Items/store/'+limit+'/'+from;
    axios.get(url)
      .then(response => {
        let data = response.data;
        if (data.length > 0) {
          feedback(true)
          dispatch({ type: "Set_Store_Products", payload: data})
        }
      })
      .catch(error => {
        console.log('Error>>>', error);
        feedback(false)
      });
  }
}
export const get_store_shops = (from,limit,feedback) => {
  return (dispatch) => {
    let url = 'https://mallofryk.com/api/Items/shops/'+limit+'/'+from;
    axios.get(url)
      .then(response => {
        let data = response.data;
        if (data.length > 0) {
          feedback(true)
          dispatch({ type: "Set_Shops", payload: data})
        }
      })
      .catch(error => {
        console.log('Error>>>', error);
        feedback(false)
      });
  }
}
export const get_food_products = (feedback) => {
  return (dispatch) => {
    let url = 'https://mallofryk.com/api/Items/foodies/18/18';
    axios.get(url)
      .then(response => {
        let data = response.data;
        // console.log('data',data)
        if (data.length > 0) {
          feedback(true)
          dispatch({ type: "Set_Food_Products", payload: data})
        }
      })
      .catch(error => {
        console.log('Error>>>', error);
        feedback(false)
      });
  }
}
export const get_food_shops = (limit,feedback) => {
  return (dispatch) => {
    let url = 'https://mallofryk.com/api/Items/resturants/'+limit+'/0';
    axios.get(url)
      .then(response => {
        let data = response.data;
        if (data.length > 0) {
          feedback(true)
          dispatch({ type: "Set_Food_Shops", payload: data})
        }
      })
      .catch(error => {
        console.log('Error>>>', error);
        feedback(false)
      });
  }
}