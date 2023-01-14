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
  TextInput,
  Modal,
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
import {useSelector, useDispatch} from 'react-redux';
import {
  get_store_products,
  get_store_categories,
  get_store_shops,
} from '../../../services/redux/actions/actions';
import style from '../../../styles/global.style';
import StoreSwiper from '../../../components/storeSwiper/storeSwiper';
import StoreProducts from '../../../components/storeProducts/storeProducts';
import StoreProducts1 from '../../../components/storeProducts1/storeProducts1';
import StoreShops from '../../../components/storeShops/storeShops';
import { Actionsheet } from 'native-base';
const StoreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cartDetail = useSelector(state => state.storeCart);
  const store_products = useSelector(state => state.store_products);
  const store_Shops = useSelector(state => state.shops);
  const store_Categories = useSelector(state => state.store_categories);
  const [cart, setCart] = useState(cartDetail.length);
  const [loading, setLoading] = useState(false);
  const [mainAction, setMainAction] = useState(false);
  const [subAction, setSubAction] = useState(false);
  const [childAction, setChildAction] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [mainCat, setMainCat] = useState('');
  const [subCat, setSubCat] = useState('');
  const [childCat, setChildCat] = useState('');
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [childCategories, setChildCategories] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [restLoader, setRestLoader] = useState(false);
  const [limit, setLimit] = useState(10);
  const [plimit, setPLimit] = useState(12);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const [products, setProducts] = useState(store_products);
  const [bottom, setBottom] = useState(false);
  const [resturants, setResturants] = useState(store_Shops);

  const getFoodData = async new_limit => {
    console.log('get food products')
    setRefreshing(false);
    dispatch(get_store_products(0, new_limit, feedback));
  };
  const getCategories = async () => {
    console.log('get categories')
    dispatch(get_store_categories(feedback));
  };
  const feedback = res => {
    setLoading(false);
    setBottom(false);
    setRestLoader(false);
  };
  const getResturantsData = async rlimit => {
    console.log('get resturants')
    setRestLoader(true);
    dispatch(get_store_shops(0, rlimit, feedback));
  };
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  const bottomCall = () => {
    if (!bottom) {
      setBottom(true);
      getFoodData(plimit + 5);
      setPLimit(plimit + 5);
      console.log('BottomCall');
    }
  };
  const onRefresh = () => {
    setRefreshing(true);
    setLoading(true);
    getFoodData(plimit);
    getResturantsData(limit);
  };
  useEffect(() => {
    setCart(cartDetail.length);
    setBottom(false);
  }, [isFocused]);
  const search = () => {
    setLoading(true);
    const filteredArray = store_products.filter(item => {
      if (item.pro_name.includes(searchText)) {
        return item;
      }
    });
    setProducts(filteredArray);
    const filteredArray2 = store_Shops.filter(item => {
      if (item.sho_name.includes(searchText)) {
        return item;
      }
    });
    setResturants(filteredArray2);
    setLoading(false);
    setActiveSearch(true);
  };
  useEffect(() => {
    console.log('subcateg', subCategories.length);
    console.log('products', store_products.length);
    if (products.length <= 0) {
      onRefresh();
    }
    if (store_Categories.length <= 0) {
      getCategories();
    }
  }, []);
  useEffect(() => {
    console.log('data updated');
    setProducts(store_products);
    setResturants(store_Shops);
    if(store_Categories.length > 0){
    setMainCategories(store_Categories[0]);
    setSubCategories(store_Categories[1]);
    setChildCategories(store_Categories[2]);
    }
  }, [store_products, store_Shops,store_Categories]);
  const renderProducts = ({item}) => {
    return <StoreProducts navigation={navigation} item={item} />;
  };
  const renderAllProducts = ({item}) => {
    return <StoreProducts1 navigation={navigation} item={item} />;
  };
  const renderResturants = ({item, index}) => {
    return <StoreShops navigation={navigation} item={item} />;
  };
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
          marginTop: 33,
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
        <Text style={styles.titleText}>
          RYK
          <Text style={[styles.titleText, {color: colors.primary}]}>
            {' '}
            Store
          </Text>
        </Text>
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
          {/* <Text style={styles.searchText}>
            Search for Resturant, Food Items
          </Text> */}
          <TextInput
            value={searchText}
            placeholder="Search for brands and products"
            style={styles.searchInput}
            titleText="search"
            onChangeText={value => setSearchText(value)}
            onSubmitEditing={() => search()}
            returnKeyType="search"
          />
          {activeSearch && (
            <Icon
              name="close"
              size={20}
              color={colors.primary}
              style={{marginRight: 10}}
              onPress={() => {
                setActiveSearch(false);
                setProducts(store_products);
                setResturants(store_Shops);
              }}
            />
          )}
          <Text></Text>
        </View>
      </View>
      <View style={styles.categorySection}>
        <TouchableOpacity style={styles.category} onPress={()=> setMainAction(true)}>
          <Text numberOfLines={1} style={styles.categoryText}>
            {mainCat ? mainCat.mca_name : 'All'}
          </Text>
        </TouchableOpacity>
        {mainCat ? (
          <TouchableOpacity style={styles.category} onPress={()=> setSubAction(true)}>
            <Text numberOfLines={1} style={styles.categoryText}>
              {subCat ? subCat.meg_name : 'All'}
            </Text>
          </TouchableOpacity>
        ) : null}
        {subCat ? (
          <TouchableOpacity style={styles.category} onPress={()=> setChildAction(true)}>
            <Text numberOfLines={1} style={styles.categoryText}>
              {childCat ? childCat.suc_name : 'All'}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={()=>{
          if(mainCat){
            let filterValues = {
              mcaId : mainCat.mca_id,
              megId : subCat ? subCat.meg_id : 0,
              subId : childCat ? childCat.suc_id : 0,
            }
            navigation.navigate('FilterProducts',{filterValues:filterValues})
          }
        }}>
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            bottomCall();
          }
        }}
        scrollEventThrottle={400}>
        <View
          style={{
            height: hp(26),
          }}>
          <StoreSwiper />
        </View>
        <View style={{height: hp(28)}}>
          <View style={{flex: 1, paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
              }}>
              Top{' '}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: colors.primary,
                  marginTop: 5,
                }}>
                Selling
              </Text>
            </Text>
          </View>
          <View style={{paddingLeft: 10}}>
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
              Stores & Brands
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
                  <TouchableOpacity
                    onPress={() => {
                      setLimit(limit + 5);
                      getResturantsData(limit + 5);
                    }}
                    style={styles.nextCard}>
                    {restLoader ? (
                      <ActivityIndicator size={24} color={colors.primary} />
                    ) : (
                      <AntDesign
                        name="arrowright"
                        size={24}
                        color={colors.primary}
                      />
                    )}
                  </TouchableOpacity>
                }
                renderItem={renderResturants}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{height: hp(28)}}>
          <View style={{paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
                marginBottom: 5,
              }}>
              Featured{' '}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: colors.primary,
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                Products
              </Text>
            </Text>
          </View>
          <View style={{paddingLeft: 10}}>
            <FlatList
              data={products.slice(6, 12)}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={renderProducts}
            />
          </View>
        </View>
        <View>
          <View style={{paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
                marginBottom: 5,
              }}>
              All{' '}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: colors.primary,
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                Products
              </Text>
            </Text>
          </View>
          <View style={{paddingLeft: 10}}>
            <FlatList
              data={products}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={renderAllProducts}
            />
          </View>
        </View>
        {bottom && (
          <View
            style={{
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color={colors.primary} />
          </View>
        )}
        {/* </ImageBackground> */}
        <View style={{height: 30}}></View>
      </ScrollView>
      <Actionsheet isOpen={mainAction} onClose={()=> setMainAction(false)}>
      <View style={styles.cat_container}>
        <Text style={styles.cat_headerText}>Main categories</Text>
        <View style={styles.cat_innerContent}>
          <ScrollView>
          {mainCategories.map(item => (
            <TouchableOpacity
              onPress={() => {
                setMainCat(item)
                setSubCat('')
                setMainAction(false)
              }}
              key={item.mca_id}
              style={[
                styles.cat_itemView,
                { borderColor: item.mca_id == mainCat.mca_id ? colors.primary : '#AEAEAE' },
              ]}>
              <Text
                style={[
                  styles.cat_itemText,
                  { color: item.mca_id == mainCat.mca_id ? colors.primary : colors.secondary },
                ]}>
                {item.mca_name}
              </Text>
            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>
      </View>
      </Actionsheet>
      <Actionsheet isOpen={subAction} onClose={()=> setSubAction(false)}>
      <View style={styles.cat_container}>
        <Text style={styles.cat_headerText}>Sub categories</Text>
        <View style={styles.cat_innerContent}>
          
          {subCategories.map(item => (
           item.mca_id == mainCat.mca_id ?
            <TouchableOpacity
              onPress={() => {
                setSubCat(item)
                setChildCat('');
                setSubAction(false)
              }}
              key={item.meg_id}
              style={[
                styles.cat_itemView,
                { borderColor: item.meg_id == subCat.meg_id ? colors.primary : '#AEAEAE' },
              ]}>
              <Text
                style={[
                  styles.cat_itemText,
                  { color: item.meg_id == subCat.meg_id ? colors.primary : colors.secondary },
                ]}>
                {item.meg_name}
              </Text>
            </TouchableOpacity>:null
          ))}
          
        </View>
      </View>
      </Actionsheet>
      <Actionsheet isOpen={childAction} onClose={()=> setChildAction(false)}>
      <View style={styles.cat_container}>
        <Text style={styles.cat_headerText}>Sub categories</Text>
        <View style={styles.cat_innerContent}>
          
          {childCategories.map(item => (
           item.meg_id == subCat.meg_id ?
            <TouchableOpacity
              onPress={() => {
                setChildCat(item)
                setChildAction(false)
              }}
              key={item.suc_id}
              style={[
                styles.cat_itemView,
                { borderColor: item.suc_id == childCat.suc_id ? colors.primary : '#AEAEAE' },
              ]}>
              <Text
                style={[
                  styles.cat_itemText,
                  { color: item.suc_id == childCat.suc_id ? colors.primary : colors.secondary },
                ]}>
                {item.suc_name}
              </Text>
            </TouchableOpacity>:null
          ))}
          
        </View>
      </View>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default StoreScreen;
