import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  BackHandler,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './resturantScreen.style';
import colors from '../../assets/colors/colors';
import style from '../../styles/global.style';
import {useSelector,useDispatch} from 'react-redux';
import { addCart } from '../../services/redux/actions/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ResturantScreen = ({navigation,route}) => {
  const resturant = route.params.resturant;
  const dispatch = useDispatch();
  const cartDetail = useSelector(state => state.cart.cart);
  const addCartDetail = cart => {
    let result = cartDetail;
    result.push(cart);
    dispatch(addCart(result));
    setCart(cartDetail.length)
  };
  const [favourite, setFavourite] = useState(false);
  const [cart, setCart] = useState(cartDetail.length);
  const [products, setProducts] = useState([
    {
      id:1,
      image: require('../../assets/images/sandwich.jpeg'),
      quantity:1,
      title:'Sandwich',
      price:'250',
      description:'Hot Chicken Pieces deep fried, with shreded pickles,caramlized onions,double cheez and RYK special secret sauce in soft-n-fresh Potato Buns',
    },
    {
      id:2,
      image: require('../../assets/images/burger.jpeg'),
      title:'Zinger Burger',
      price:'450',
      quantity:1,
      description:'Two Hot Zinger Chicken Pieces deep fried, with shreded pickles,caramlized onions,double cheez and RYK special secret sauce in soft-n-fresh Potato Buns',
    },
    {
      id:3,
      image: require('../../assets/images/pancake.jpeg'),
      title:'Pancake',
      price:'300',
      quantity:1,
      description:'Five Hot Pancake Pieces Filled with sweets, with shreded cheez,caramlized cream,double cheez and RYK special secret cream in soft-n-fresh bread Buns',
    },
  ])
  const pushCart =()=>{
    var cart = {
      id :3,
      image: 'fff',
      title: 'Pizza',
      price: 799
    }
    addCartDetail(cart);
  }
  // useEffect(() => {
  //   const backAction = () => {
  //     navigation.navigate('FoodScreen');
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  const setQuantity = (id,quantity) =>{
    var filtered = products.filter(product => {
      if (id == product.id){
        product.quantity = quantity;
      }
      return product;
    });
    setProducts(filtered);
  }
  const checkDuplicate = (cart) => {
    var flag = false;
    const filtered = cartDetail.filter(item =>{
      if (item.id == cart.id){
        flag = true;
        item.quantity = item.quantity + cart.quantity;
      }
      return item;
    });
    if (flag){
      dispatch(addCart(filtered));
    }else{
      addCartDetail(cart);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.coverImage4}>
        <ImageBackground
          style={styles.imageStyle4}
          source={resturant.image}>
          <View style={styles.row4}>
            <Text style={styles.title4}>{resturant.title}</Text>
            {favourite ? (
              <View style={styles.icon}>
                <MaterialIcons
                  name="favorite"
                  size={28}
                  color={'white'}
                  onPress={() => setFavourite(false)}
                />
              </View>
            ) : (
              <View style={styles.icon}>
                <MaterialIcons
                  name="favorite-outline"
                  size={28}
                  color={'white'}
                  onPress={() => setFavourite(true)}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
      <View style={styles.row3}>
        <Text style={styles.title3}>Burgers</Text>
      </View>
      <View style={styles.cartSection}>
      {products.map(product =>
        <View key={product.id} style={styles.itemSection}>
          <View style={styles.itemDetail}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.Price}>Rs. {product.price} /-</Text>
            {/* <View style={styles.row2}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                color={'black'}
                size={14}
              />
              <Text style={styles.fastDelivery}>Fast Delivery</Text>
            </View> */}
            <View style={styles.row}>
              <View style={styles.row1}>
                <TouchableOpacity
                  onPress={() => {
                    if (product.quantity > 0) {
                      setQuantity(product.id , product.quantity - 1);
                    }
                  }}
                  style={styles.minus}>
                  <Text style={styles.plus}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{product.quantity}</Text>
                <TouchableOpacity
                  onPress={() => setQuantity(product.id , product.quantity + 1)}
                  style={styles.minus}>
                  <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button}  onPress={()=> checkDuplicate(product)}><Text style={styles.buttonText}>Add to cart</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={product.image}
            />
          </View>
        </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ResturantScreen;
