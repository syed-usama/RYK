import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  BackHandler,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './shopScreen.style';
import colors from '../../../assets/colors/colors';
import style from '../../../styles/global.style';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AirbnbRating} from 'react-native-elements';
import axios from 'axios';
// import faker from 'faker';
import SectionList from 'react-native-tabs-section-list';
import {heightPercentageToDP} from 'react-native-responsive-screen';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const ShopScreen = ({navigation, route}) => {
  const resturant = route.params.resturant;
  const cartDetail = useSelector(state => state.storeCart);
  const [favourite, setFavourite] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [cart, setCart] = useState(cartDetail.length);
  const dummyResturant = require('../../../assets/images/storeDummy.png');
  const imageUrl = 'https://cdn.mallofryk.com/images/products/';
  const [loading, setLoading] = useState(true);

  const getFoodData = async () => {
    setLoading(true);

    let url =
      'https://mallofryk.com/api/Items/Resfoodies/500/0/' +
      route.params.resturant.sho_id;

    axios
      .get(url)
      .then(response => {
        //console.log('Products Response>', response.data)
        console.log('ShopId>>>>', route.params.resturant.sho_id);
        console.log('products>>>>', response.data.length);

        let data = [...new Set(response.data)];
        console.log('data>>>>', data[0]);
        if (data.length > 0) {
          //setProducts(data);
          getCatogries(data);
        } else {
          setLoading(false);
        }
        //setLoading(false);
      })
      .catch(error => {
        console.log('Error>>>', error);
        setLoading(false);
      });
  };

  const getCatogries = async items => {
    setLoading(true);
    let url =
      'https://mallofryk.com/api/Items/shopCat/' +
      route.params.resturant.sho_id;
    axios
      .get(url)
      .then(async response => {
        //console.log('Products Response>', response.data)
        let data = response.data;
        if (data.length > 0) {
          let sections = [];

          await data.filter(item => {
            let product = {};
            let itemData = [];

            // for(let i = 0;i<items.length;i++){
            //   if(item.cat_id == items[i].mca_id){
            //     itemData.push(items[i])
            //     // console.log(0)
            //   }
            // }

            items.forEach(pro => {
              if (item.cat_id === pro.mca_id) itemData.push(pro);
            });

            product.data = itemData;
            product.title = item.mca_name;

            // console.log(1)
            sections.push(product);
          });
          setSections(sections);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch(error => {
        console.log('Error>>>', error);
        setLoading(false);
      });
  };

  const [sections, setSections] = useState([]);

  useEffect(() => {
    getFoodData();
  }, []);

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
          onPress={() => navigation.navigate('storeCart')}
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
            resturant.sho_image
              ? imageLoading
                ? {uri: imageUrl + resturant.sho_image}
                : require('../../../assets/images/gify.gif')
              : dummyResturant
          }
          onLoad={() => setImageLoading(true)}>
          <Image
            source={require('../../../assets/images/frame.png')}
            style={styles.frame}
          />
        </ImageBackground>
      </View>
      {/* <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={_renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            /> */}
      <View style={styles.row4}>
        <Text style={styles.title4}>{resturant.sho_name}</Text>
        {favourite ? (
          <View style={styles.icon}>
            <MaterialIcons
              name="favorite"
              size={26}
              color={colors.primary}
              onPress={() => setFavourite(false)}
            />
          </View>
        ) : (
          <View style={styles.icon}>
            <MaterialIcons
              name="favorite-outline"
              size={26}
              color={colors.primary}
              onPress={() => setFavourite(true)}
            />
          </View>
        )}
      </View>
      <View style={[styles.row4, {paddingTop: 5}]}>
        <View style={{flexDirection: 'row'}}>
          <AirbnbRating
            defaultRating={4}
            isDisabled={true}
            size={12}
            starContainerStyle={{alignSelf: 'flex-start'}}
            showRating={false}
            selectedColor={colors.primary}
          />
          <Text style={styles.ratingText}>8 ratings</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.infoText}></Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row4, {paddingTop: 5, paddingBottom: 20}]}>
        <View style={{flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={18}
            color={colors.primary}
          />
          <View>
            <Text style={styles.deliveryText}>Delivery: Same day in RYK</Text>
            <Text style={styles.deliveryText}>2-3 days whole Pakistan</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.infoText}>More info</Text>
        </TouchableOpacity>
      </View>
      {sections.length > 0 ? (
        <SectionList
          sections={sections}
          keyExtractor={item => item.pro_id}
          stickySectionHeadersEnabled={false}
          scrollToLocationOffset={50}
          tabBarStyle={styles.tabBar}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderTab={({title, isActive}) => (
            <View
              style={[
                styles.tabContainer,
                {
                  borderBottomWidth: isActive ? 2 : 0,
                  borderBottomColor: isActive ? colors.primary : null,
                },
              ]}>
              <Text
                style={[
                  styles.tabText,
                  {color: isActive ? colors.primary : 'black'},
                ]}>
                {title}
              </Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View>
              <View style={styles.sectionHeaderContainer} />
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                style={styles.itemSection}
                onPress={() =>
                  navigation.navigate('StoreProduct', {product: item})
                }>
                <View style={styles.content}>
                  <Text style={styles.title}>{item.pro_name}</Text>
                  <Text style={styles.Price}>Rs. {item.pro_new_price} /-</Text>
                </View>
                <View style={styles.imageView}>
                  <FastImage
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: imageUrl + item.images[0].url}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View
          style={{
            height: heightPercentageToDP(60),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loading ? (
            <ActivityIndicator color={colors.primary} size={30} />
          ) : (
            <Text style={{color: colors.black}}>
              This Shop has currently no Items
            </Text>
          )}
        </View>
      )}

      {/* <View style={styles.row3}>
        <Text style={styles.title3}>Items</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {products.length > 0 ?
      <View style={styles.cartSection}>
      {products.map(product =>
        <View key={product.pro_id} style={styles.itemSection}>
          <View style={styles.itemDetail}>
            <Text style={styles.title}>{product.pro_name}</Text>
            <Text style={styles.Price}>Rs. {product.pro_new_price} /-</Text>
            <View style={styles.row}>
              <View style={styles.row1}>
                <TouchableOpacity
                  onPress={() => {
                    if (product.quantity > 0) {
                      setQuantity(product.pro_id , product.quantity - 1);
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
              <TouchableOpacity style={styles.button}  onPress={()=> checkDuplicate(product)}>
                <Text style={styles.buttonText}>
                Add to cart
                </Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imageView}>
          <FastImage
              style={styles.image}
              source={{uri: imageUrl+product.url}}
            />
          </View>
        </View>
        )}
      </View>
      :
      <View style={{height:heightPercentageToDP(60),justifyContent:'center',alignItems:"center"}}>
        {loading ?
        <ActivityIndicator color={colors.primary}
        size={30}/>
        :
        <Text style={{color:colors.black}}>This Resturant has currently no Items</Text>
}
        </View>
                }
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default ShopScreen;
