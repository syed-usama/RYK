import React, { useContext, useEffect, useState } from 'react';
import {View, Text, SafeAreaView, StatusBar,FlatList,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './foodOrders.style';
import colors from '../../../assets/colors/colors';
import { getAllOfCollectionwhere } from '../../../services/firebase/firebaseServices';
import OrderComponent from '../../../components/orderComponent/orderComponent';
import { AuthContext } from '../../../services/firebase/authProvider';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const FoodOrders = ({navigation}) => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [isLoading , setisLoading] = useState(true);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "December"
];

  const renderOrder =({item,index}) =>{
    return(
      <OrderComponent orders={item}  key={item.order_id} />
    );
  }
  useEffect(() => {
      //console.log(user);
      getOrders()
  },[])
  const getOrders=async () =>{
    setOrders([])
    setisLoading(true)
    const neworders = await getAllOfCollectionwhere('orders','user_email',user.email);
    setOrders(neworders)
    setisLoading(false);
    // console.log('orders',neworders)
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      <View style={styles.header}>
          <Icon
            name="angle-left"
            size={27}
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.titleText}>Orders</Text>
          <Icon name="refresh" size={25} color={colors.primary} onPress={()=> getOrders()}/>
      </View>
      {orders.length > 0 ?
      <View>
      <FlatList
        data={orders}
        style={{marginTop:0,height:heightPercentageToDP(90),}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderOrder}
        />
      </View>
      :
      <View style={{flex:0.8,justifyContent:'center'}}>
        {isLoading ? 
        <ActivityIndicator color={colors.primary} size={40} style={{alignSelf:'center'}}/>
      :
      <>
          <Text style={styles.comingSoon}>There's no recent orders</Text>
      </>
        }
        </View>
      }
    </SafeAreaView>
  );
};

export default FoodOrders;

