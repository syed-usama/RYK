import React, { useContext, useEffect ,useState} from 'react';
import {View, Text, Dimensions,Image,  ScrollView, SafeAreaView,TouchableOpacity,BackHandler,StatusBar,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height} = Dimensions.get('screen');
const height_logo = height + 200;
import {useIsFocused} from '@react-navigation/native';
import styles from './foodScreen.style';
import colors from '../../assets/colors/colors';
import FoodSwiper from '../../components/foodSwiper/foodSwiper';
import {useSelector} from 'react-redux';
import style from '../../styles/global.style';
const FoodScreen = ({navigation}) => {
  const cartDetail = useSelector(state => state.cart.cart);
  const [cart,setCart] = useState(cartDetail.length);
  const isFocused = useIsFocused();
  const [products, setProducts] = useState([
    {
      id:1,
      image: require('../../assets/images/sandwich.jpeg'),
      title:'Sandwich',
      price:'250',
      description:'Hot Chicken Pieces deep fried, with shreded pickles,caramlized onions,double cheez and RYK special secret sauce in soft-n-fresh Potato Buns',
    },
    {
      id:2,
      image: require('../../assets/images/burger.jpeg'),
      title:'Zinger Burger',
      price:'450',
      description:'Two Hot Zinger Chicken Pieces deep fried, with shreded pickles,caramlized onions,double cheez and RYK special secret sauce in soft-n-fresh Potato Buns',
    },
    {
      id:3,
      image: require('../../assets/images/pancake.jpeg'),
      title:'Pancake',
      price:'300',
      description:'Five Hot Pancake Pieces Filled with sweets, with shreded cheez,caramlized cream,double cheez and RYK special secret cream in soft-n-fresh bread Buns',
    },
    {
      id:4,
      image: require('../../assets/images/burger.jpeg'),
      title:'Zinger Burger',
      price:'450',
      description:'Two Hot Zinger Chicken Pieces deep fried, with shreded pickles,caramlized onions,double cheez and RYK special secret sauce in soft-n-fresh Potato Buns',
    }
  ])
  const [resturants, setResturants] = useState([
    {
      id:1,
      image: require('../../assets/images/bestcook.jpg'),
      title:'BestCook',
      location:'Bahria Town Phase 4, Islamabad'
    },
    {
      id:2,
      image: require('../../assets/images/slider_images/slide5.jpg'),
      title:'WingsBy',
      location:'Bahria Town Phase 4, Islamabad'
    }
  ])
  useEffect(() => {
    setCart(cartDetail.length)
  },[isFocused])
  return (
     
    <SafeAreaView style={styles.container}>
      {/* <StatusBar/> */}
      {/* <ImageBackground source={require('../assets/back3.jpg')} resizeMode="cover" style={styles.backimage}> */}
      <View
        style={{
          height:hp(5),
          flexDirection: 'row',
          paddingHorizontal: 15,
          justifyContent:'space-between',
          alignItems:'flex-end'
        }}>
          <Icon
            name="bars"
            size={27}
            color={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.titleText}>RYK  Foodies</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={style.badgeIconView}>
            <MaterialCommunityIcons name="cart-outline" size={25} color={colors.primary} />
            <View style={style.badgeView}><Text style={style.badge}>{cart}</Text></View>
            </TouchableOpacity>
      </View>
      
      <View style={{height:hp(9)}}>
        <View style={styles.searchView}>
        <Icon name="search" size={22} color='grey' />
          <Text style={styles.searchText}>Search for Resturant, Food Items</Text>
        </View>
      </View>
      <ScrollView style={{height:height_logo}}>
      <View
        style={{
          height:hp(26)
        }}>
          <FoodSwiper/>
      </View>
      <View style={{height:hp(26)}}>
        <View style={{flex: 1, paddingLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700', color:colors.secondary,marginTop:5,}}>Your Favourite</Text>
        </View>
        <View style={{flex: 4, flexDirection: 'row',paddingLeft:10}}>
          <ScrollView horizontal={true}>
            {products.map(product => 
            <TouchableOpacity key={product.id} style={styles.favourite} onPress={() => navigation.navigate('ProductScreen',{product:product})}>
              <Image
                style={styles.itemImage}
                resizeMode="stretch"
                source={product.image}
              />
              <Text style={styles.itemText}>{product.title}</Text>
              <Text style={styles.itemText1}>Rs: {product.price}</Text>
            </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </View>
      <View style={{height:hp(33)}}>
        <View style={{flex: 1, paddingLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700',color:colors.secondary,marginTop:7}}>Restaurants</Text>
        </View>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            {resturants.map(resturant =>
            <TouchableOpacity
            key={resturant.id}
            onPress={() => navigation.navigate('ResturantScreen',{resturant:resturant})}
              style={{
                width: 250,
                backgroundColor: 'white',
                borderRadius: 15,
                marginLeft: 15,
                marginVertical:5,
                elevation:5
              }}>
              <View style={{flex: 3}}>
                <Image
                  style={{
                    width: 250,
                    height: 140,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                  source={resturant.image}
                />
              </View>
              <View style={{flex: 1, paddingLeft: 5}}>
                <Text style={{fontSize: 16, fontWeight: '700',color:colors.secondary}}>{resturant.name}</Text>
                <Text style={{fontSize: 12,color:colors.secondary}}>
                  {resturant.location}
                </Text>
              </View>
            </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </View>
      {/* </ImageBackground> */}
      <View style={{height:30}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodScreen;