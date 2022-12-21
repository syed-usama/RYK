import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './checkoutScreen.style';
import colors from '../../../assets/colors/colors';
import {useIsFocused} from '@react-navigation/native';
import {addCart} from '../../../services/redux/actions/actions';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {AuthContext} from '../../../services/firebase/authProvider';
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE, } from 'react-native-maps';
import {showToast} from '../../../services/toast';
import axios from 'axios';
import {
  getAllOfCollection,
  getAllOfCollectionwhere,
  saveData,
} from '../../../services/firebase/firebaseServices';
import {sendNotification} from '../../../services/sendNotification';
import Geolocation from '@react-native-community/geolocation';
const CheckoutScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const cartDetail = useSelector(state => state.cart);
  const [products, setProducts] = useState(cartDetail);
  const [access, setAccess] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  // const [coords, setCoords] = useState({
  //   latitude: 30.0727401,
  //   longitude: 71.1782229});
  const [coords, setCoords] = useState('');
  const [street, setStreet] = useState('');
  const [floor, setFloor] = useState('');
  const [optional, setOptional] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const checkTotal = () => {
    if (products) {
      var total = 0;
      const filterd = products.filter(item => {
        let price = parseInt(item.pro_new_price) * parseInt(item.quantity);
        total = parseInt(total) + price;
      });
      setTotal(total);
    } else {
      setTotal(0);
    }
  };
  const getCoords = () => {
    setLoading(true)
    Geolocation.getCurrentPosition(async info => {
      console.log(info.coords)
      let mycoords = {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      } 
      setCoords(mycoords);
      setAccess(true)
    });
    setLoading(false);
  }
  const placeOrder = async () => {
    setLoading(true);
    var checkName = userName.replace(/\s+/g, '');
    var checkNumber = userPhone.replace(/\s+/g, '');
    var checkstreet = street.replace(/\s+/g, '');
    var checkfloor = floor.replace(/\s+/g, '');
    if (
      checkName != '' &&
      checkNumber != '' &&
      checkstreet != '' &&
      checkfloor != ''
    ) {
      let cart_products = [];
      products.forEach(item => {
        let cartItem = {
          pro_id: item.pro_id,
          pro_qty: item.quantity,
          pro_price: item.pro_new_price,
          pro_name: item.pro_name+' '+item.variation.name,
          pro_variation: item.variation,
          pro_instructions: item.instructions
        };
        cart_products.push(cartItem);
      });
      let resturant = await getAllOfCollectionwhere(
        'resturants',
        'res_id',
        products[0].sho_id,
      );
      if (resturant.length <= 0) {
        showToast('This Resturant is not listed yet');
        setLoading(false);
      } else if (resturant[0].active) {
        let date = new Date();
        let order_id = 'ryk-' + date.getTime();
        var data = {
          orderTime: date,
          order_id: order_id,
          res_id: resturant[0].res_id,
          res_name: resturant[0].res_name,
          res_address: resturant[0].res_location,
          rider_id: '0',
          order_amount: total + 200,
          user_name: userName,
          user_email: user.email,
          user_phone: userPhone,
          user_address: street + ',' + floor,
          user_note: optional,
          user_location: coords,
          status: 0,
          products: cart_products,
        };
        console.log('data', data);
        let yes = await saveData('orders', order_id, data);
        sendNotification(
          '3',
          user.email,
          'New Order',
          'You have a new order',
          'new order',
        );
        let emptyArray = [];
        dispatch(addCart(emptyArray));
        setLoading(false);
        navigation.navigate('FoodConfirmation',{rid:order_id});
      } else {
        showToast('This Resturant is currently offline');
        setLoading(false);
      }
    } else {
      showToast("Required Fields can't be empty");
      setLoading(false);
    }
  };
  useEffect(() => {
    getCoords();
    checkTotal();
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      {loading ? (
        <ActivityIndicator
          style={{
            height: 700,
            width: widthPercentageToDP(100),
            position: 'absolute',
            alignSelf: 'center',
            zIndex: 999,
          }}
          color={colors.primary}
          size={50}
        />
      ) : null}
      <View style={styles.header}>
        <AntDesign
          name="close"
          size={22}
          color={colors.primary}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText}>Checkout</Text>
        {/* <Icon name="search" size={25} color={colors.primary} /> */}
        <View></View>
      </View>
      <View style={styles.barView}>
        <View style={styles.barItem}>
          <View style={styles.numberView}>
            <Text style={{color: 'white', fontWeight: '500'}}>1</Text>
          </View>
          <Text style={styles.barText}>Menu</Text>
        </View>
        <View style={styles.barItem}>
          <View style={styles.numberView}>
            <Text style={{color: 'white', fontWeight: '500'}}>2</Text>
          </View>
          <Text style={styles.barText}>Cart</Text>
        </View>
        <View style={styles.barItem}>
          <View style={[styles.numberView]}>
            <Text style={{color: 'white', fontWeight: '500'}}>3</Text>
          </View>
          <Text style={styles.barText}>Checkout</Text>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.card, {marginTop: 30}]}>
          <View style={styles.cardRow}>
            <Ionicons name="call" size={20} color={colors.primary} />
            <Text style={styles.cardTitle}>Contact Information</Text>
          </View>
          <TextInput
            label={'Full Name *'}
            onChangeText={value => setUserName(value)}
            value={userName}
            mode="outlined"
            outlineColor="lightgrey"
            selectionColor="rgba(245, 66, 66,0.5)"
            style={styles.textInput}
            theme={{
              colors: {
                primary: '#000',
                underlineColor: '#fff',
                text: '#000',
              },
              roundness: 8,
            }}
          />
          <TextInput
            onChangeText={value => setUserPhone(value)}
            value={userPhone}
            autoCapitalize="none"
            mode="outlined"
            label={'Phone Number *'}
            keyboardType="phone-pad"
            outlineColor="lightgrey"
            selectionColor="rgba(245, 66, 66,0.4)"
            style={styles.textInput}
            theme={{
              colors: {
                primary: '#000',
                underlineColor: '#fff',
                text: '#000',
              },
              roundness: 8,
            }}
          />
        </View>
        <View style={[styles.card, {marginTop: 30}]}>
          <View style={styles.cardRow}>
            <Ionicons
              name="location-outline"
              size={22}
              color={colors.primary}
            />
            <Text style={styles.cardTitle}>Delivery address</Text>
            <MaterialIcons
              name="my-location"
              size={22}
              color={colors.primary}
              onPress={()=> getCoords()}
              style={{marginLeft:widthPercentageToDP(17)}}
            />
          </View>
          {access && 
          <View style={{margin:1,height:200,}}>
          <MapView
          initialRegion={{
            latitude: parseFloat(coords.latitude),
            longitude: parseFloat(coords.longitude),
            latitudeDelta: 0.003,
            longitudeDelta: 0.003, 
          }}
          zoomEnabled={true}
          scrollEnabled={true}
          showsUserLocation={true}
          followUserLocation={true}
                  loadingEnabled
                  showsBuildings={true}
                  userLocationPriority={'high'}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
         // provider={PROVIDER_GOOGLE}
        >
            <Marker coordinate={{ latitude : parseFloat(coords.latitude) , longitude : parseFloat(coords.longitude) }}/>
        </MapView>
          </View>
}
          <TextInput
            label={'Street Address *'}
            onChangeText={value => setStreet(value)}
            value={street}
            autoCapitalize="none"
            mode="outlined"
            outlineColor="lightgrey"
            selectionColor="rgba(245, 66, 66,0.5)"
            style={styles.textInput}
            theme={{
              colors: {
                primary: '#000',
                underlineColor: '#fff',
                text: '#000',
              },
              roundness: 8,
            }}
          />
          <TextInput
            onChangeText={value => setFloor(value)}
            value={floor}
            autoCapitalize="none"
            mode="outlined"
            label={'Floor/Unit # *'}
            outlineColor="lightgrey"
            selectionColor="rgba(245, 66, 66,0.4)"
            style={styles.textInput}
            theme={{
              colors: {
                primary: '#000',
                underlineColor: '#fff',
                text: '#000',
              },
              roundness: 8,
            }}
          />
          <TextInput
            label={'(Optional) Note to Rider'}
            onChangeText={value => setOptional(value)}
            value={optional}
            autoCapitalize="none"
            mode="outlined"
            outlineColor="lightgrey"
            selectionColor="rgba(245, 66, 66,0.4)"
            style={styles.textInput}
            theme={{
              colors: {
                primary: '#000',
                underlineColor: '#fff',
                text: '#000',
              },
              roundness: 8,
            }}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <Ionicons name="wallet-outline" size={22} color={colors.primary} />
            <Text style={styles.cardTitle}>Payment method</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.row2}>
              <FontAwesome name="money" size={22} color={'grey'} />
              <Text style={styles.cardText}>Cash</Text>
            </View>
            <Text style={[styles.totalText, {fontSize: 16}]}>
              Rs. {total >=200 ? + total+10 : total + 50}.00
            </Text>
          </View>
        </View>
        <View style={[styles.card, {marginBottom: 40}]}>
          <View style={styles.cardRow}>
            <Ionicons name="receipt-outline" size={22} color={colors.primary} />
            <Text style={styles.cardTitle}>Order Summary</Text>
          </View>
          {products.length == 0 && (
            <View
              style={{
                height: 600,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('FoodHome')}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '700',
                    textAlign: 'center',
                    color: 'black',
                  }}>
                  Hungry ?
                </Text>
                <Text style={{fontSize: 14, color: 'grey', marginVertical: 10}}>
                  You haven't added anything to your cart!
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('FoodHome')}
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: 6,
                    height: 30,
                    width: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: '600', fontSize: 12}}>
                    Browse
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.cartSection}>
            {products.map(item => (
              <View key={item.variation.price} style={styles.itemSection}>
                <Text style={styles.title}>
                  {item.quantity} {item.pro_name}({item.variation.name})
                </Text>
                <Text style={styles.price}>Rs. {item.pro_new_price}.00</Text>
              </View>
            ))}
          </View>
          {products.length != 0 && (
            <View>
              <View style={styles.row1}>
                <Text style={styles.price}>Subtotal</Text>
                <Text style={styles.price}>Rs. {total}.00</Text>
              </View>
              <View style={styles.row1}>
                <Text style={styles.title}>Delivery fee</Text>
                <Text style={styles.price}>Rs. {total >=200 ? + 0 : 40}.00</Text>
              </View>
              <View style={styles.row1}>
                <Text style={styles.title}>Platform fee</Text>
                <Text style={styles.price}>Rs. 10.00</Text>
              </View>
              {/* <View style={styles.row1}>
                <Text style={styles.title}>VAT</Text>
                <Text style={styles.price}>Rs. 90.00</Text>
              </View> */}
            </View>
          )}
        </View>
      </ScrollView>
      {products.length != 0 && access && (
        <View>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>
              Total
              <Text style={{fontSize: 10, color: 'grey'}}>
                {' (incl. VAT)'}
              </Text>
            </Text>
            <Text style={styles.totalText}>Rs. {total >=200 ? + total+10 : total + 50}.00</Text>
          </View>
          <TouchableOpacity
            disabled={loading}
            onPress={() => placeOrder()}
            style={styles.button2}>
            <Text style={styles.buttonText2}>Place Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CheckoutScreen;
