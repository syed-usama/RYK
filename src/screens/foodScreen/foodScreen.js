import React, { useContext, useEffect } from 'react';
import {View, Text, Dimensions,Image,  ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AuthContext} from '../../services/firebase/authProvider';
const {height} = Dimensions.get('screen');
const height_logo = height + 200;
import styles from './foodScreen.style';
import colors from '../../assets/colors/colors';
const FoodScreen = ({navigation}) => {
    const {user, login, register, logout} = useContext(AuthContext);
    useEffect(() => {
        console.log(user);
    },[])
  return (
    
    <SafeAreaView style={styles.container}>
      
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
          <MaterialCommunityIcons name="cart" size={25} color={colors.primary} />
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
          height:hp(26),
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, justifyContent: 'center',paddingLeft:20,elevation:5}}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={require('../../assets/images/cover1.jpeg')}
          />
        </View>
      </View>
      <View style={{height:hp(26)}}>
        <View style={{flex: 1, paddingLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700', color:colors.secondary,marginTop:5,}}>Your Favourite</Text>
        </View>
        <View style={{flex: 4, flexDirection: 'row',paddingLeft:10}}>
          <ScrollView horizontal={true}>
            <View style={styles.favourite}>
              <Image
                style={styles.itemImage}
                resizeMode="stretch"
                source={require('../../assets/images/sandwich.jpeg')}
              />
              <Text style={styles.itemText}>Sandwich</Text>
              <Text style={styles.itemText1}>Rs: 250</Text>
            </View>
            <View style={styles.favourite}>
              <Image
                style={styles.itemImage}
                resizeMode="stretch"
                source={require('../../assets/images/burger.jpeg')}
              />
              <Text style={styles.itemText}>
                Zinger Burger
              </Text>
              <Text style={styles.itemText1}>Rs: 450</Text>
            </View>
            <View style={styles.favourite}>
              <Image
                style={styles.itemImage}
                resizeMode="stretch"
                source={require('../../assets/images/pancake.jpeg')}
              />
              <Text style={styles.itemText}>Pancake</Text>
              <Text style={styles.itemText1}>Rs: 300</Text>
            </View>
            <View style={styles.favourite}>
              <Image
                style={styles.itemImage}
                resizeMode="stretch"
                source={require('../../assets/images/burger.jpeg')}
              />
              <Text style={styles.itemText}>
                Zinger Burger
              </Text>
              <Text style={styles.itemText1}>Rs: 450</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={{height:hp(33)}}>
        <View style={{flex: 1, paddingLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700',color:colors.secondary,marginTop:7}}>Restaurants</Text>
        </View>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View
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
                  source={require('../../assets/images/bestcook.jpg')}
                />
              </View>
              <View style={{flex: 1, paddingLeft: 5}}>
                <Text style={{fontSize: 16, fontWeight: '700',color:colors.secondary}}>BestCook</Text>
                <Text style={{fontSize: 12,color:colors.secondary}}>
                  Bahria Town Phase 4 ,Islamabad
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 250,
                backgroundColor: 'white',
                borderRadius: 15,
                marginLeft: 10,
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
                  source={require('../../assets/images/wingsby.jpg')}
                />
              </View>
              <View style={{flex: 1, paddingLeft: 5}}>
                <Text style={{fontSize: 16, fontWeight: '700',color:colors.secondary}}>WingsBy</Text>
                <Text style={{fontSize: 12,color:colors.secondary}}>
                  Bahria Town Phase 4 ,Islamabad
                </Text>
              </View>
            </View>
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