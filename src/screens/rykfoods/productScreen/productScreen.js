import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  BackHandler,
  StatusBar,
  ImageBackground,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './productScreen.style';
import colors from '../../../assets/colors/colors';
import {useSelector, useDispatch} from 'react-redux';
import {addCart} from '../../../services/redux/actions/actions';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import style from '../../../styles/global.style';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {showToast} from '../../../services/toast';
import {useIsFocused} from '@react-navigation/native';
const ProductScreen = ({navigation, route}) => {
  const cartDetail = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const product = route.params.product;
  const [favourite, setFavourite] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [selectedVar, setSelectedVar] = useState({name: '', price: '', id: ''});
  const [imageLoading, setImageLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(cartDetail.length);
  const isFocused = useIsFocused();
  const imageUrl = 'https://cdn.mallofryk.com/images/products/';

  const addCartDetail = cart => {
    let result = cartDetail;
    result.push(cart);
    dispatch(addCart(result));
    setCart(result.length);
  };
  const pushCart = () => {
    var cart = {
      pro_id: product.pro_id,
      url: product.images ? product.images[0].url : product.url,
      pro_name: product.pro_name,
      pro_new_price: selectedVar.price,
      variation: selectedVar,
      instructions: instructions,
      quantity: quantity,
      sho_id: product.sho_id,
    };
    addCartDetail(cart);
  };
  const checkDuplicate = cart => {
    var flag = false;
    var flag1 = false;
    const filtered = cartDetail.filter(item => {
      if (item.pro_id == cart.pro_id) {
        if(item.variation.id == selectedVar.id){
          flag = true;
          item.quantity = item.quantity + quantity;
        }
      }
      if (item.sho_id != cart.sho_id) {
        flag1 = true;
      }
      return item;
    });
    if (flag1) {
      Alert.alert(
        'Remove your previous items?',
        'You still have products from another resturant. Shall we start over with a fresh cart?',
        [
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Remove',
            onPress: () => {
              remove();
            },
          },
        ],
      );
    } else if (flag) {
      dispatch(addCart(filtered));
      showToast('Added to Cart.');
    } else {
      pushCart();
      showToast('Added to Cart.');
    }
  };
  const remove = async () => {
    let emptyArray = [];
    dispatch(addCart(emptyArray));
    var cart = {
      pro_id: product.pro_id,
      url: product.images ? product.images[0].url : product.url,
      pro_name: product.pro_name,
      pro_new_price: selectedVar.price,
      variation: selectedVar,
      instructions: instructions,
      quantity: quantity,
      sho_id: product.sho_id,
    };
    let result = [];
    result.push(cart);
    dispatch(addCart(result));
    setCart(result.length);
  };
  useEffect(() => {
    // console.log('cart',cartDetail)
    console.log('product variations', product);
    if (product.variations.length > 0) {
      setSelectedVar(product.variations[0]);
    }
    setCart(cartDetail.length);
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <FontAwesome5 name="arrow-left" size={22} color={colors.primary} />
        </TouchableOpacity>
        {/* <Text style={styles.titleText}>RYK Foodies</Text> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={style.badgeIconView}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color={colors.primary}
          />
          <View style={style.badgeView}>
            <Text style={style.badge}>{cart}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.coverImage4}>
        <ImageBackground
          style={styles.imageStyle4}
          source={
            imageLoading
              ? {
                  uri: product.images
                    ? imageUrl + product.images[0].url
                    : imageUrl + product.url,
                }
              : require('../../../assets/images/gify.gif')
          }
          onLoad={() => setImageLoading(true)}>
          {/* <Image
            source={require('../../../assets/images/frame.png')}
            style={styles.frame}
          /> */}
        </ImageBackground>
      </View>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.body1}>
          <View style={styles.row1}>
            <Text style={styles.title}>{product.pro_name}</Text>
            {favourite ? (
              <MaterialIcons
                name="favorite"
                size={28}
                color={'red'}
                onPress={() => setFavourite(false)}
              />
            ) : (
              <MaterialIcons
                name="favorite-outline"
                size={28}
                color={'red'}
                onPress={() => setFavourite(true)}
              />
            )}
          </View>
          <Text style={styles.price}>Rs. {selectedVar.price}.00</Text>
          <View style={{flexDirection:'row',paddingHorizontal:13,paddingTop:10}}>
            <Entypo name="shop" size={20} color={colors.primary}/>
            <Text style={styles.shop}>{product.sho_id}</Text>
          </View>
          
          <Text style={styles.description}>
            {product.pro_short_description}
          </Text>
          
          <Text style={styles.variationsTitle}>Select one</Text>
          {product.variations.map(item => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setSelectedVar(item)}
              style={styles.variationsRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={[
                    styles.circle,
                    {
                      backgroundColor:
                        selectedVar.id == item.id
                          ? colors.primary
                          : 'rgba(0,0,0,0.2)',
                    },
                  ]}>
                  <View style={styles.innerCircle}></View>
                </View>
                <Text style={styles.variationName}>{item.name}</Text>
              </View>
              <Text style={styles.variationPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.instructionTitle}>Special instructions</Text>
          <Text style={styles.instructionDescription}>
            Please let us know if you are allergic to anything or if we need to
            avoid anything
          </Text>
          <TextInput
            style={styles.textInput}
            value={instructions}
            onChangeText={(value)=> setInstructions(value)}
            placeholder="e.g. no mayo"
            numberOfLines={3}
          />
        </View>
      </ScrollView>
      <View style={styles.row}>
        <View style={styles.row2}>
          <TouchableOpacity
            onPress={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            }}
            style={styles.minus}>
            <Text style={styles.buttonText8}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            style={styles.plus}>
            <Text style={styles.buttonText8}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (
              selectedVar.price != 0 &&
              selectedVar.price != '' &&
              selectedVar.price != null
            )
              checkDuplicate(product);
          }}>
          <Text style={styles.buttonText}>ADD to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
