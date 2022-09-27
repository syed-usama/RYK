import React, {useEffect,useState } from 'react';
import {View, Text, SafeAreaView, Image,BackHandler,StatusBar, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './productScreen.style';
import colors from '../../../assets/colors/colors';
import {useSelector,useDispatch} from 'react-redux';
import { addCart } from '../../../services/redux/actions/actions';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import style from '../../../styles/global.style';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { showToast } from '../../../services/toast';
const ProductScreen = ({navigation,route}) => {
  const product = route.params.product;
  const imageUrl = 'https://cdn.mallofryk.com/images/products/'
  const dispatch = useDispatch();
  const cartDetail = useSelector(state => state.cart);
  const addCartDetail = cart => {
    let result = cartDetail;
    result.push(cart);
    dispatch(addCart(result));
    setCart(cartDetail.length)
  };
  const pushCart =()=>{
    var cart = {
      pro_id :product.pro_id,
      url: product.url,
      pro_name: product.pro_name,
      pro_new_price: product.pro_new_price,
      quantity:quantity
    }
    addCartDetail(cart);
  }
  const [favourite , setFavourite] = useState(false);
  const [imageLoading , setImageLoading] = useState(false);
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
    if (item.pro_id == cart.pro_id){
      flag = true;
      item.quantity = item.quantity + quantity;
    }
    return item;
  });
  if (flag){
    dispatch(addCart(filtered));
    showToast('Added to Cart.')
  }else{
    pushCart();
    showToast('Added to Cart.')
  }
}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor='transparent' />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
        <FontAwesome5
          name="arrow-left"
          size={22}
          color={colors.primary}
        />
        </TouchableOpacity>
        {/* <Text style={styles.titleText}>RYK Foodies</Text> */}
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={style.badgeIconView}>
            <MaterialCommunityIcons name="cart-outline" size={24} color={colors.primary} />
            <View style={style.badgeView}><Text style={style.badge}>{cart}</Text></View>
            </TouchableOpacity>
      </View>
      <View style={styles.coverImage4}>
        <ImageBackground
          style={styles.imageStyle4}
          source={imageLoading ?{uri: imageUrl+product.url} : require('../../../assets/images/gify.gif') } onLoad={() => setImageLoading(true)}>
          <Image source={require('../../../assets/images/frame.png')} style={styles.frame} />
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={{height:heightPercentageToDP(60)}}>
        
        <View style={styles.row1}>
        <Text style={styles.title}>{product.pro_name}</Text> 
        {favourite ? 
        <MaterialIcons name='favorite' size={28} color={'red'} onPress={()=>setFavourite(false)}/>:
        <MaterialIcons name='favorite-outline' size={28} color={'red'} onPress={()=>setFavourite(true)}/>}
        </View>  
        <Text style={styles.description}>Here is Product Description Here is Product Description.Here is Product Description.Here is Product Description</Text>
        <Text style={styles.price}>Rs. {product.pro_new_price}.00</Text>
        <Text style={styles.instructionTitle}>Special instructions</Text>
        <Text style={styles.instructionDescription}>Please let us know if you are allergic to anything or if we need to avoid anything</Text>
        <TextInput style={styles.textInput} placeholder='e.g. no mayo' numberOfLines={3}/>
        
        </View>
        </ScrollView>
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
    </SafeAreaView>
  );
};

export default ProductScreen;

