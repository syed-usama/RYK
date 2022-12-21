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
import Icon from 'react-native-vector-icons/FontAwesome5';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useIsFocused} from '@react-navigation/native';
import styles from './filterProducts.style';
import colors from '../../../assets/colors/colors';
// import {useSelector, useDispatch} from 'react-redux';
// import {
//   get_store_products,
//   get_store_categories,
//   get_store_shops,
// } from '../../../services/redux/actions/actions';
// import style from '../../../styles/global.style';
// import StoreSwiper from '../../../components/storeSwiper/storeSwiper';
// import StoreProducts from '../../../components/storeProducts/storeProducts';
import StoreProducts1 from '../../../components/storeProducts1/storeProducts1';
// import StoreShops from '../../../components/storeShops/storeShops';
// import { Actionsheet } from 'native-base';
import axios from 'axios';
const FilterProducts = ({navigation,route}) => {
  const filterValues = route.params.filterValues;
  // const dispatch = useDispatch();
  // const cartDetail = useSelector(state => state.storeCart);
  // const store_products = useSelector(state => state.store_products);
  // const store_Shops = useSelector(state => state.shops);
  // const store_Categories = useSelector(state => state.store_categories);
  // const [cart, setCart] = useState(cartDetail.length);
  // const [mainAction, setMainAction] = useState(false);
  // const [subAction, setSubAction] = useState(false);
  // const [childAction, setChildAction] = useState(false);
  // const [searchText, setSearchText] = useState('');
  // const [mainCat, setMainCat] = useState('');
  // const [subCat, setSubCat] = useState('');
  // const [childCat, setChildCat] = useState('');
  // const [mainCategories, setMainCategories] = useState([]);
  // const [subCategories, setSubCategories] = useState([]);
  // const [childCategories, setChildCategories] = useState([]);
  // const [activeSearch, setActiveSearch] = useState(false);
  // const [restLoader, setRestLoader] = useState(false);
  // const [limit, setLimit] = useState(10);
  // const [plimit, setPLimit] = useState(12);
  // const [refreshing, setRefreshing] = useState(false);
  // const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // const [bottom, setBottom] = useState(false);
  // const [resturants, setResturants] = useState(store_Shops);

  const getCategoriesProduct = async () => {
    setLoading(true)
    console.log('get food products')
    let url = 'https://mallofryk.com/api/Categories/catProducts/'+filterValues.mcaId+'/'+filterValues.megId+'/'+filterValues.subId;
    axios.get(url)
      .then(response => {
        let data = response.data;
        if (data.length > 0) {
          console.log('filters',data)
          setProducts(response.data)
        }
        setLoading(false)
      })
      .catch(error => {
        console.log('Error>>>', error);
        setLoading(false)
        // feedback(false)
      });
  };
  
  useEffect(() => {
    getCategoriesProduct()
  }, []);
  const renderAllProducts = ({item}) => {
    return <StoreProducts1 navigation={navigation} item={item} />;
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
          name="arrow-left"
          size={24}
          color={colors.primary}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText}>
          Filter
          <Text style={[styles.titleText, {color: colors.primary}]}>
            {' '}
            Products
          </Text>
        </Text>
        <Text></Text>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
      {/* <View style={styles.categorySection}>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
      </View> */}
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={{marginTop:20,paddingLeft: 10}}>
            <FlatList
              data={products}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={renderAllProducts}
            />
          </View>
        </View>
        <View style={{height: 30}}></View>
      </ScrollView>
      {/* <Actionsheet isOpen={mainAction} onClose={()=> setMainAction(false)}>
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
                { borderColor: item.mca_id == mainCat.mca_id ? '#B58D3B' : '#AEAEAE' },
              ]}>
              <Text
                style={[
                  styles.cat_itemText,
                  { color: item.mca_id == mainCat.mca_id ? '#B58D3B' : '#AEAEAE' },
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
                { borderColor: item.meg_id == subCat.meg_id ? '#B58D3B' : '#AEAEAE' },
              ]}>
              <Text
                style={[
                  styles.cat_itemText,
                  { color: item.meg_id == subCat.meg_id ? '#B58D3B' : '#AEAEAE' },
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
                { borderColor: item.suc_id == childCat.suc_id ? '#B58D3B' : '#AEAEAE' },
              ]}>
              <Text
                style={[
                  styles.cat_itemText,
                  { color: item.suc_id == childCat.suc_id ? '#B58D3B' : '#AEAEAE' },
                ]}>
                {item.suc_name}
              </Text>
            </TouchableOpacity>:null
          ))}
          
        </View>
      </View>
      </Actionsheet> */}
    </SafeAreaView>
  );
};

export default FilterProducts;
