import React, {useContext, useEffect,useState } from 'react';
import {View, Text, SafeAreaView, Image,ScrollView, StatusBar, ActivityIndicator} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './storeCheckout.style';
import colors from '../../../assets/colors/colors';
import {useIsFocused} from '@react-navigation/native';
import { addtoStore } from '../../../services/redux/actions/actions';
import {useSelector,useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { AuthContext } from '../../../services/firebase/authProvider';
import { showToast } from '../../../services/toast';
import axios from 'axios';
const StoreCheckout = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const cartDetail = useSelector(state => state.storeCart);
  const [products, setProducts] = useState(cartDetail);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [street, setStreet] = useState('');
  const [floor, setFloor] = useState('');
  const [optional, setOptional] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
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
  const placeOrder = ()=>{
    setLoading(true)
    var checkName = userName.replace(/\s+/g, '');
        var checkNumber = userPhone.replace(/\s+/g, '');
        var checkstreet = street.replace(/\s+/g, '');
        var checkfloor = floor.replace(/\s+/g, '');
        if(checkName != '' && checkNumber != '' && checkstreet != '' && checkfloor != ''){
    let cart_products = [];
    products.forEach(item => {
      let cartItem = {
        pro_id : item.pro_id,
        pro_qty: item.quantity,
        pro_price: item.pro_new_price,
        pro_name: item.pro_name
      }
      cart_products.push(cartItem);
    });
    var data = {
      ord_name: userName,
      ord_email: user.email,
      ord_phone: userPhone,
      ord_address: street,
      ord_address2: floor,
      ord_msg: optional,
      products: cart_products
        };
    console.log(data)
    axios({
      url: 'https://mallofryk.com/api/Orders/placeOrder',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
  }).then((response) => {
    console.log('response',response.data)
    if(response.data.status == 'ok'){
      let emptyArray = [];
      dispatch(addtoStore(emptyArray))
      setLoading(false);
      navigation.navigate('Confirmation')
    }
  }).catch((e) => {
      console.log('Place Order Error>>', e)
  })
        }else{
          showToast("Required Fields can't be empty")
        }
  
  }
  useEffect(()=>{
    checkTotal();
  },[isFocused])
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
          <View style={[styles.numberView,]}>
            <Text style={{color:'white',fontWeight:'500'}}>3</Text>
          </View>
          <Text style={styles.barText}>Checkout</Text>
        </View>
      </View>
      <ScrollView>
      <View style={[styles.card,{marginTop:30}]}>
            <View style={styles.cardRow}>
                <Ionicons name='call' size={20} color={colors.primary} />
                <Text style={styles.cardTitle}>
                    Contact Information
                </Text>
            </View>
            <TextInput
          label={'Full Name *'}
          onChangeText={value => setUserName(value)}
          value={userName}
          mode='outlined'
          outlineColor='lightgrey'
          selectionColor='rgba(245, 66, 66,0.5)'
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
          autoCapitalize='none'
          mode='outlined'
          label={'Phone Number *'}
          keyboardType='phone-pad'
          outlineColor='lightgrey'
          selectionColor='rgba(245, 66, 66,0.4)'
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
      <View style={[styles.card,{marginTop:30}]}>
            <View style={styles.cardRow}>
                <Ionicons name='location-outline' size={22} color={colors.primary} />
                <Text style={styles.cardTitle}>
                    Delivery address
                </Text>
            </View>
            <TextInput
          label={'Street Address *'}
          onChangeText={value => setStreet(value)}
          value={street}
          autoCapitalize='none'
          mode='outlined'
          outlineColor='lightgrey'
          selectionColor='rgba(245, 66, 66,0.5)'
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
          autoCapitalize='none'
          mode='outlined'
          label={'Floor/Unit # *'}
          outlineColor='lightgrey'
          selectionColor='rgba(245, 66, 66,0.4)'
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
          autoCapitalize='none'
          mode='outlined'
          outlineColor='lightgrey'
          selectionColor='rgba(245, 66, 66,0.4)'
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
                <Ionicons name='wallet-outline' size={22} color={colors.primary} />
                <Text style={styles.cardTitle}>
                    Payment method
                </Text>
            </View>
            <View style={styles.row1}>
            <View style={styles.row2}>
                <FontAwesome name='money' size={22} color={'grey'} />
                <Text style={styles.cardText}>
                    Cash
                </Text>
            </View>
            <Text style={[styles.totalText,{fontSize:16}]}>Rs. {total+200}.00</Text>
            </View>
        </View>
        <View style={[styles.card,{marginBottom:40}]}>
            <View style={styles.cardRow}>
                <Ionicons name='receipt-outline' size={22} color={colors.primary} />
                <Text style={styles.cardTitle}>
                    Order Summary
                </Text>
            </View>
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
            <Text style={styles.title}>{item.pro_name}</Text>
            <Text style={styles.price}>Rs. {item.pro_new_price}.00</Text>
        </View>
        )}
        </View>
        {products.length != 0 &&
        <View>
          <View style= {styles.row1}>
            <Text style={styles.price}>
              Subtotal 
            </Text>
            <Text style={styles.price}>
              Rs. {total}.00
            </Text>
          </View>
          <View style= {styles.row1}>
            <Text style={styles.title}>
              Delivery fee 
            </Text>
            <Text style={styles.price}>
              Rs. 70.00
            </Text>
          </View>
          <View style= {styles.row1}>
            <Text style={styles.title}>
              VAT 
            </Text>
            <Text style={styles.price}>
              Rs. 130.00
            </Text>
          </View>
        </View>
        }
        </View>
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
              Rs. {total+200}.00
            </Text>
          </View>
        <TouchableOpacity 
        onPress={() => placeOrder()}
         style={styles.button2}>
          <Text style={styles.buttonText2}>Place Order</Text>
        </TouchableOpacity>
        </View>
        }
    </SafeAreaView>
  );
};

export default StoreCheckout;

