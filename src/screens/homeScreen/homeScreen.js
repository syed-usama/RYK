import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../services/firebase/authProvider';
// import Icon from 'react-native-vector-icons/Ionicons';
import {Image, Dimensions, ScrollView} from 'react-native';
const HomeScreen = ({navigation}) => {
    const {user, login, register, logout} = useContext(AuthContext);
    useEffect(() => {
        console.log(user);
    },[])
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('../assets/back3.jpg')} resizeMode="cover" style={styles.backimage}> */}
      <View
        style={{
          flex: 0.6,
          flexDirection: 'row',
          paddingHorizontal: 15,
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}>
          <Icon
            name="bars"
            size={25}
            color="#900"
            onPress={() => navigation.openDrawer()}
          />
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={styles.titleText}>Home</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Icon name="search" size={25} color="#900" />
        </View>
      </View>

      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={require('../../assets/images/cover1.jpeg')}
          />
        </View>
      </View>
      <View style={{flex: 3, backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <View style={{flex: 1, paddingLeft: 15}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Your Favourite</Text>
        </View>
        <View style={{flex: 4, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View
              style={{
                width: 130,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 100, height: 100, borderRadius: 50}}
                resizeMode="stretch"
                source={require('../../assets/images/sandwich.jpeg')}
              />
              <Text style={{fontSize: 12, fontWeight: '700'}}>Sandwich</Text>
              <Text style={{fontSize: 12, fontWeight: '700'}}>Rs: 250</Text>
            </View>
            <View
              style={{
                width: 130,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 100, height: 100, borderRadius: 50}}
                resizeMode="stretch"
                source={require('../../assets/images/burger.jpeg')}
              />
              <Text style={{fontSize: 12, fontWeight: '700'}}>
                Zinger Burger
              </Text>
              <Text style={{fontSize: 12, fontWeight: '700'}}>Rs: 450</Text>
            </View>
            <View
              style={{
                width: 130,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 100, height: 100, borderRadius: 50}}
                resizeMode="stretch"
                source={require('../../assets/images/pancake.jpeg')}
              />
              <Text style={{fontSize: 12, fontWeight: '700'}}>Pancake</Text>
              <Text style={{fontSize: 12, fontWeight: '700'}}>Rs: 300</Text>
            </View>
            <View
              style={{
                width: 130,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 100, height: 100, borderRadius: 50}}
                resizeMode="stretch"
                source={require('../../assets/images/burger.jpeg')}
              />
              <Text style={{fontSize: 12, fontWeight: '700'}}>
                Zinger Burger
              </Text>
              <Text style={{fontSize: 12, fontWeight: '700'}}>Rs: 450</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={{flex: 4, backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
        <View style={{flex: 1, paddingLeft: 15}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Restaurants</Text>
        </View>
        <View style={{flex: 5, flexDirection: 'row', paddingVertical: 10}}>
          <ScrollView horizontal={true}>
            <View
              style={{
                width: 250,
                backgroundColor: 'white',
                borderRadius: 15,
                marginLeft: 15,
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
                <Text style={{fontSize: 16, fontWeight: '700'}}>BestCook</Text>
                <Text style={{fontSize: 12}}>
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
                <Text style={{fontSize: 16, fontWeight: '700'}}>WingsBy</Text>
                <Text style={{fontSize: 12}}>
                  Bahria Town Phase 4 ,Islamabad
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default HomeScreen;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.25;
const width_logo = height * 0.38;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: width_logo,
    height: height_logo,
    borderRadius: 6,
  },
  backimage: {
    flex: 1,
    justifyContent: 'center',
  },
});
