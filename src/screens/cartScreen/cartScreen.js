import React, { useContext, useEffect,useState } from 'react';
import {View, Text, SafeAreaView, Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../services/firebase/authProvider';
import styles from './cartScreen.style';
import HomeSwiper from '../../components/homeSwiper/homeSwiper';
import colors from '../../assets/colors/colors';
import { addCart } from '../../services/redux/actions/actions';
import {useIsFocused} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CartScreen = ({navigation}) => {
  const cartDetail = useSelector(state => state.cart.cart);
  const [products, setProducts] = useState(cartDetail);
  const [total, setTotal] = useState(0);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const addCartDetail = cart => {
    let result = cartDetail;
    result.push(cart);
    dispatch(addCart(result));
    setCart(cartDetail.length)
  };
  const setQuantity = (id,quantity) =>{
    if (quantity == 0){
      remove(id)
    }else{
    var filtered = products.filter(product => {
      if (id == product.id){
        product.quantity = quantity;
      }
      return product;
    });
    setProducts(filtered);
    checkTotal();
  }
  };
  const remove = (id) =>{
    var filtered = products.filter(product => {
      if (id != product.id){
        return product;
      }
    });
    setProducts(filtered);
    checkTotal();
    dispatch(addCart(filtered));
  }
  const checkTotal = () => {
    if (products){
    var total = 0;
    const filterd = products.filter(item => {
      let price = parseInt(item.price) * parseInt(item.quantity);
      total = parseInt(total) + price;
    });
    setTotal(total);
  }else{
    setTotal(0);
    }
  }
  useEffect(()=>{
    checkTotal();
  },[isFocused])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
          <Icon
            name="bars"
            size={27}
            color={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.titleText}>Cart</Text>
          {/* <Icon name="search" size={25} color={colors.primary} /> */}
          <View></View>
      </View>
      {products.length == 0 &&
      <View style={{height:500,justifyContent :'center',alignItems:'center'}}>
        <Text style={{fontSize:22,}}>Cart is Empty</Text>
      </View>}
      <View style={styles.cartSection}>
        {products.map(item => 
        <View key={item.id} style={styles.itemSection}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={item.image}/>
            </View>
            <View style={styles.itemDetail}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.Price}>Rs. {item.price} /-</Text>
                <View style={styles.row}>
                <View style={styles.row2}>
                  <MaterialCommunityIcons 
                                    name="truck-delivery-outline" 
                                    color={'black'}
                                    size={14}
                                    />
                    <Text style={styles.fastDelivery}>Fast Delivery</Text>
                    </View>
                    <View style={styles.row1}>
                    <TouchableOpacity onPress={()=>{if (item.quantity> 0) {setQuantity(item.id,item.quantity-1)}}} style={styles.minus}><Text  style={styles.plus}>-</Text></TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={()=>setQuantity(item.id,item.quantity+1)} style={styles.minus}><Text  style={styles.plus}>+</Text></TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => remove(item.id)}><Text style={styles.buttonText}>Remove</Text></TouchableOpacity>
            </View>
        </View>
        )}
        </View>
        {products.length != 0 &&
        <Text style={styles.subTitle}>Price Detail</Text>}
        {products.length != 0 &&
        <View style={styles.subTotal}>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>Sub Total</Text>
            <Text style={styles.priceText}>Rs. {total}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>Discount</Text>
            <Text style={styles.priceText}>Rs. 100</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>Estimated Tax</Text>
            <Text style={styles.priceText}>Rs. 120</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>Delivery</Text>
            <Text style={styles.priceText}>Free</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.priceRow}>
            <Text style={styles.priceText1}>Total Payable</Text>
            <Text style={styles.priceText1}>Rs. {total}</Text>
          </View>
        </View>
        }
        {products.length != 0 &&
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Checkout</Text>
          <MaterialCommunityIcons 
                                    name="arrow-right" 
                                    color={'white'}
                                    size={22}
                                    />
        </TouchableOpacity>}
        </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

