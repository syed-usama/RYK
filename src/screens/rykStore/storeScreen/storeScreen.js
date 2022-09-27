import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  RefreshControl,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useIsFocused} from '@react-navigation/native';
import styles from './storeScreen.style';
import colors from '../../../assets/colors/colors';
import {useSelector , useDispatch} from 'react-redux';
import { get_store_products,get_store_shops } from '../../../services/redux/actions/actions';
import style from '../../../styles/global.style';
import StoreSwiper from '../../../components/storeSwiper/storeSwiper';
import StoreProducts from '../../../components/storeProducts/storeProducts';
import StoreProducts1 from '../../../components/storeProducts1/storeProducts1';
import StoreShops from '../../../components/storeShops/storeShops';
const StoreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cartDetail = useSelector(state => state.storeCart);
  const store_products = useSelector(state => state.store_products);
  const store_Shops = useSelector(state => state.shops);
  const [cart, setCart] = useState(cartDetail.length);
  const [loading, setLoading] = useState(false);
  const [restLoader, setRestLoader] = useState(false);
  const [limit, setLimit] = useState(10);
  const [plimit, setPLimit] = useState(12);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const [products, setProducts] = useState(store_products);
  const [bottom, setBottom] = useState(false);
  const [resturants, setResturants] = useState(store_Shops);

  const getFoodData = async (new_limit) => {
    setRefreshing(false);
    dispatch(get_store_products(1,new_limit,feedback))
  };
  const feedback = (res) =>{
      setLoading(false);
      setBottom(false);
      setRestLoader(false);
  }
  const getResturantsData = async (rlimit) => {
    setRestLoader(true)
      dispatch(get_store_shops(1,rlimit,feedback))
  };
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};
const bottomCall =() =>{
  if(!bottom){
    setBottom(true)
    getFoodData(plimit+5);
    setPLimit(plimit+5)
    console.log('BottomCall')
  }
}
  const onRefresh = () => {
    setRefreshing(true);
    setLoading(true)
    getFoodData(plimit);
    getResturantsData(limit);
  };
  useEffect(() => {
    setCart(cartDetail.length);
    setBottom(false)
  }, [isFocused]);
  useEffect(() => {
    console.log('shops',store_Shops.length)
    console.log('products',store_products.length)
    if(products.length <= 0){
      onRefresh();
    }
  }, []);
  useEffect(() => {
    console.log('data updated')
    setProducts(store_products)
    setResturants(store_Shops)
  }, [store_products,store_Shops]);
  const renderProducts = ({ item }) => {
    return (
      <StoreProducts navigation={navigation} item={item} />
    )
    }
    const renderAllProducts = ({ item }) => {
      return (
        <StoreProducts1 navigation={navigation} item={item} />
      )
      }
    const renderResturants = ({ item,index }) => {
      return (
        <StoreShops navigation={navigation} item={item} />
      )
      }
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
      <View
        style={{
          marginTop:33,
          height: hp(5),
          flexDirection: 'row',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Icon
          name="bars"
          size={27}
          color={colors.primary}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.titleText}>RYK<Text style={[styles.titleText,{color:colors.primary}]}> Store</Text></Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('StoreCart')}
          style={style.badgeIconView}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={25}
            color={colors.primary}
          />
          <View style={style.badgeView}>
            <Text style={style.badge}>{cart}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{height: hp(9)}}>
        <View style={styles.searchView}>
          <Icon name="search" size={22} color="grey" />
          <Text style={styles.searchText}>
            Search for Shops, Store Items
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          bottomCall();
        }
      }}
      scrollEventThrottle={400}
      >
        <View
          style={{
            height: hp(26),
          }}>
          <StoreSwiper />
        </View>
        <View style={{height: hp(26)}}>
          <View style={{flex: 1, paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
              }}>
              Top <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.primary,
                marginTop: 5,
              }}>Selling</Text>
            </Text>
          </View>
          <View style={{ paddingLeft: 10}}>
              <FlatList
                  data={products.slice(3, 10)}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={renderProducts}
              />
          </View>
        </View>
        <View style={{height: hp(33)}}>
          <View style={{flex: 1, paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 7,
              }}>
              Brands
            </Text>
          </View>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                  data={resturants}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  ListFooterComponent={
                    <TouchableOpacity onPress={()=>{setLimit(limit+5); getResturantsData(limit+5) }} style={styles.nextCard}>
                      {restLoader ? 
                      <ActivityIndicator size={24} color={colors.primary}/>
                      :
                      <AntDesign name='arrowright' size={24} color={colors.primary} />
                  }
                    </TouchableOpacity>
                  }
                  renderItem={renderResturants}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{height: hp(25)}}>
          <View style={{paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
                marginBottom: 5,
              }}>
              Featured <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.primary,
                marginTop: 5,
                marginBottom: 5,
              }}>Products</Text>
            </Text>
          </View>
          <View style={{ paddingLeft: 10}}>
              <FlatList
                  data={products.slice(6, 12)}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={renderProducts}
              />
          </View>
        </View>
        <View >
          <View style={{paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
                marginBottom: 5,
              }}>
              All <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.primary,
                marginTop: 5,
                marginBottom: 5,
              }}>Products</Text>
            </Text>
          </View>
          <View style={{ paddingLeft: 10}}>
              <FlatList
                  data={products}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  renderItem={renderAllProducts}
              />
          </View>
        </View>
        {bottom &&
        <View style={{paddingVertical:10,alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator color={colors.primary}/>
        </View>
        }
        {/* </ImageBackground> */}
        <View style={{height: 30}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreScreen;
