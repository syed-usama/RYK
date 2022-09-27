import React, {useEffect,useState } from 'react';
import {View, Text, SafeAreaView, Image,ScrollView, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './cartScreen.style';
import colors from '../../../assets/colors/colors';
import { addCart } from '../../../services/redux/actions/actions';
import {useIsFocused} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CartScreen = ({navigation}) => {
  const cartDetail = useSelector(state => state.cart);
  const [products, setProducts] = useState(cartDetail);
  const [total, setTotal] = useState(0);
  const isFocused = useIsFocused();
  const imageUrl = 'https://cdn.mallofryk.com/images/products/'
  const dispatch = useDispatch();
  const setQuantity = (pro_id,quantity) =>{
    if (quantity == 0){
      remove(pro_id)
    }else{
    var filtered = products.filter(product => {
      if (pro_id == product.pro_id){
        product.quantity = quantity;
      }
      return product;
    });
    setProducts(filtered);
    checkTotal();
  }
  };
  const remove = (pro_id) =>{
    var filtered = products.filter(product => {
      if (pro_id != product.pro_id){
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
      let price = parseInt(item.pro_new_price) * parseInt(item.quantity);
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
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      <View style={styles.header}>
      <AntDesign
            name="close"
            size={22}
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.titleText}>Cart</Text>
          {/* <Icon name="search" size={25} color={colors.primary} /> */}
          <View></View>
      </View>
      <View style={styles.barView}>
        <View style={styles.barItem}>
          <View style={styles.numberView}>
            <Text style={{color:'white',fontWeight:'500'}}>1</Text>
          </View>
          <Text style={styles.barText}>Menu</Text>
        </View>
        <View style={styles.barItem}>
          <View style={styles.numberView}>
            <Text style={{color:'white',fontWeight:'500'}}>2</Text>
          </View>
          <Text style={styles.barText}>Cart</Text>
        </View>
        <View style={styles.barItem}>
          <View style={[styles.numberView,{backgroundColor:'white',borderWidth:2,borderColor:colors.primary}]}>
            <Text style={{color:'black',fontWeight:'500'}}>3</Text>
          </View>
          <Text style={styles.barText}>Checkout</Text>
        </View>
      </View>
      <ScrollView>
      {products.length == 0 &&
      <View style={{height:600,justifyContent :'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('FoodHome')}>
        <Text style={{fontSize:22,fontWeight:'700',textAlign:'center',color:'black',}}>Hungry ?</Text>
        <Text style={{fontSize:14,color:'grey',marginVertical:10}}>You haven't added anything to your cart!</Text>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('FoodHome')}
        style={{backgroundColor:colors.primary,borderRadius:6,height:30,width:80,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <Text style={{color:'white',fontWeight:'600',fontSize:12}}>Browse</Text>
        </TouchableOpacity>
        </TouchableOpacity>
      </View>}
      <View style={styles.cartSection}>
        {products.map(item => 
        <View key={item.pro_id} style={styles.itemSection}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: imageUrl+item.url}}/>
            </View>
            <View style={styles.itemDetail}>
                <Text style={styles.title}>{item.pro_name}</Text>
                <View style={styles.row}>
                    <View style={styles.row1}>
                    <TouchableOpacity onPress={()=>{if (item.quantity> 0) {setQuantity(item.pro_id,item.quantity-1)}}} style={styles.minus}><Text  style={styles.plus}>-</Text></TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={()=>setQuantity(item.pro_id,item.quantity+1)} style={styles.minus}><Text  style={styles.plus}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style={[styles.totalText,{fontSize:16}]}>Rs. {item.pro_new_price}.00</Text>
        </View>
        )}
        </View>
        {products.length != 0 &&
        <View>
          <View style= {styles.totalRow}>
            <Text style={[styles.totalText,{fontSize:16}]}>
              Subtotal 
            </Text>
            <Text style={[styles.totalText,{fontSize:16}]}>
              Rs. {total}.00
            </Text>
          </View>
          <View style= {styles.totalRow}>
            <Text style={styles.totalText1}>
              Delivery fee 
            </Text>
            <Text style={styles.totalText1}>
              Rs. 70.00
            </Text>
          </View>
        </View>
        }
        </ScrollView>
        {products.length != 0 &&
        <View>
          <View style= {styles.totalRow}>
            <Text style={styles.totalText}>
              Total 
              <Text style={{fontSize:10,color:'grey'}}>
                {' (incl. VAT)'}
              </Text>
            </Text>
            <Text style={styles.totalText}>
              Rs. {total+70}.00
            </Text>
          </View>
        <TouchableOpacity onPress={()=> navigation.navigate('CheckoutScreen')}
         style={styles.button2}>
          <Text style={styles.buttonText2}>Review payment and address</Text>
        </TouchableOpacity>
        </View>
        }
    </SafeAreaView>
  );
};

export default CartScreen;

