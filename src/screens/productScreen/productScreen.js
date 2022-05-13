import React, {useEffect,useState } from 'react';
import {View, Text, SafeAreaView, Image,BackHandler,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './productScreen.style';
import colors from '../../assets/colors/colors';
import {useSelector,useDispatch} from 'react-redux';
import { addCart } from '../../services/redux/actions/actions';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import style from '../../styles/global.style';
const ProductScreen = ({navigation,route}) => {
  const product = route.params.product;
  const dispatch = useDispatch();
  const cartDetail = useSelector(state => state.cart.cart);
  const addCartDetail = cart => {
    let result = cartDetail;
    result.push(cart);
    dispatch(addCart(result));
    setCart(cartDetail.length)
  };
  const pushCart =()=>{
    var cart = {
      id :product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity:quantity
    }
    addCartDetail(cart);
  }
  const [favourite , setFavourite] = useState(false);
  const [quantity , setQuantity] = useState(1);
  const [cart, setCart] = useState(cartDetail.length);
//   useEffect(() => {
//     const backAction = () => {
//       navigation.navigate('FoodScreen')
//       return true;
//     };
//   const backHandler = BackHandler.addEventListener(
//     "hardwareBackPress",
//     backAction
//   );

//   return () => backHandler.remove();
// }, []);
const checkDuplicate = (cart) => {
  var flag = false;
  const filtered = cartDetail.filter(item =>{
    if (item.id == cart.id){
      flag = true;
      item.quantity = item.quantity + quantity;
    }
    return item;
  });
  if (flag){
    dispatch(addCart(filtered));
  }else{
    pushCart();
  }
}
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {/* <StatusBar  backgroundColor='transparent' /> */}
      <View style={styles.header}>
          <Icon
            name="chevron-left"
            size={24}
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.titleText}>RYK Foodies</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={style.badgeIconView}>
            <MaterialCommunityIcons name="cart-outline" size={25} color={colors.primary} />
            <View style={style.badgeView}><Text style={style.badge}>{cart}</Text></View>
            </TouchableOpacity>
      </View>
      <View style={styles.coverImage}>
      <Image style={styles.imageStyle} source={product.image}/>
        </View> 
        <View style={styles.row1}>
        <Text style={styles.title}>{product.title}</Text> 
        {favourite ? 
        <MaterialIcons name='favorite' size={28} color={'red'} onPress={()=>setFavourite(false)}/>:
        <MaterialIcons name='favorite-outline' size={28} color={'red'} onPress={()=>setFavourite(true)}/>}
        </View>  
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Rs. {product.price}.00</Text>
        <Text style={styles.instructionTitle}>Special instructions</Text>
        <Text style={styles.instructionDescription}>Please let us know if you are allergic to anything or if we need to avoid anything</Text>
        <TextInput style={styles.textInput} placeholder='e.g. no mayo' numberOfLines={3}/>
        <View style={styles.row}>
          <View style={styles.row2}>
            <TouchableOpacity onPress={()=>{if (quantity> 0) {setQuantity(quantity-1)}}} style={styles.minus}><Text style={styles.buttonText8}>-</Text></TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={()=>setQuantity(quantity+1)} style={styles.plus}><Text style={styles.buttonText8}>+</Text></TouchableOpacity>
          </View>
        <TouchableOpacity style={styles.button} onPress={()=> checkDuplicate(product)}>
          <Text style={styles.buttonText}>ADD to Cart</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

