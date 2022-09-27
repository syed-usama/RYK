import React from 'react';
import styles from './confirmation.style';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../../assets/colors/colors';

const Confirmation = ({navigation}) => {
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
            <Text style={styles.bodytext}>Your order is</Text>
            <Text style={styles.bodytext}>placed Successfully</Text>
        </View>
        <View style={{marginBottom:10}}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('StoreHome')}>
        <View style={styles.whiteButton}>
          <Text style={styles.blueButtonText}>Done</Text>
          </View>
          </TouchableOpacity>
          </View>
          </LinearGradient>
    </SafeAreaView>
  );
};
export default Confirmation;
