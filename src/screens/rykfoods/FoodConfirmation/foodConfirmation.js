import React from 'react';
import styles from './foodConfirmation.style';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../../assets/colors/colors';

const FoodConfirmation = ({navigation,route}) => {
  const rid = route.params.rid;
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Image
            style={styles.image}
            source={require('../../../assets/images/confirm.png')}
          />
        </View>
        <LinearGradient
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.5, y: 0.5}}
        locations={[0, 1.0]}
        colors={[colors.primary,colors.primary]}
        style={styles.linearGradient}>
        <View style={styles.body}>
            <Text style={styles.bodytext}>Your order</Text>
            <Text style={styles.bodytext}>{rid}</Text>
            <Text style={styles.bodytext}>is placed Successfully</Text>
        </View>
        <View style={{marginBottom:10}}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('FoodHome')}>
        <View style={styles.whiteButton}>
          <Text style={styles.blueButtonText}>Done</Text>
          </View>
          </TouchableOpacity>
          </View>
          </LinearGradient>
    </SafeAreaView>
  );
};
export default FoodConfirmation;
