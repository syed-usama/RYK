import React, { useContext, useEffect } from 'react';
import {View, Text, SafeAreaView, StatusBar,Image,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../services/firebase/authProvider';
import styles from './rateScreen.style';
import colors from '../../../assets/colors/colors';
const RateScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);
    useEffect(() => {
        console.log('user');
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      <View style={styles.header}>
          <FontAwesome
            name="arrow-left"
            size={25}
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.titleText}>RYK Rates</Text>
          <Text style={styles.titleText}></Text>
          {/* <FontAwesome name="search" size={25} color={colors.primary} /> */}
      </View>
      <View style={styles.body}>
        <Image source={require('../../../assets/images/ryklogo.png')} style={styles.logo}/>
        <Text style={styles.bodyText1}>RYK rates</Text>
        <Text style={styles.bodyText2}>
          RYK covers all urban communities and significant towns of Pakistan for all administrations.
          Standard conveyance depends on the size of the bundle and the objective.
          Heavier and greater bundles are charged more as are bundles implied for different urban communities.
          </Text>
          <View style={styles.table}>
            <View style={styles.column}>
              <View style={styles.row}>
                <Text style={styles.tableHeader}>
                  Weight / Kg
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  Under 2 Kg
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  2 Kg to 5 Kg
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  5 Kg to 25 Kg
                </Text>
              </View>
            </View>
            <View style={styles.column}>
            <View style={styles.row}>
                <Text style={styles.tableHeader}>
                  Same City
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  200
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  300
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  400
                </Text>
              </View>
            </View>
            <View style={styles.column}>
            <View style={styles.row}>
                <Text style={styles.tableHeader}>
                  Different City
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  300
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  400
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.tableText}>
                  600
                </Text>
              </View>
            </View>
          </View>
      </View>

    </SafeAreaView>
  );
};

export default RateScreen;

