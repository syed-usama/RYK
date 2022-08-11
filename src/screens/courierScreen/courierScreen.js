import React, { useContext, useEffect } from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../services/firebase/authProvider';
import styles from './courierScreen.style';
import colors from '../../assets/colors/colors';
const CourierScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);
    useEffect(() => {
        console.log(user);
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      <View style={styles.header}>
          <Icon
            name="bars"
            size={25}
            color={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.titleText}>RYK Mall</Text>
          <Icon name="search" size={25} color={colors.primary} />
      </View>
      <View style={{flex:0.8,justifyContent:'center'}}>
          <Text style={styles.comingSoon}>Coming Soon ...</Text>
          </View>
    </SafeAreaView>
  );
};

export default CourierScreen;

