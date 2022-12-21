import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../services/firebase/authProvider';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './rateScreen.style';
import colors from '../../../assets/colors/colors';
const RateScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  useEffect(() => {
    console.log('user');
  }, []);
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
        <Image
          source={require('../../../assets/images/ryklogo.png')}
          style={styles.logo}
        />
        <Text style={styles.bodyText1}>RYK rates</Text>
        <Text style={styles.bodyText2}>
          RYK covers all urban communities and significant towns of Pakistan for
          all administrations. Standard conveyance depends on the size of the
          bundle and the objective. Heavier and greater bundles are charged more
          as are bundles implied for different urban communities.
        </Text>
        <View style={styles.table}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.tableHeader}>Weight</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>0.5 Kg</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>1 Kg</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>add Kg</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.tableHeader}>Rate</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>210</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>210</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>75</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.tableHeader}>FAC</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>31.5</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>31.5</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>11.25</Text>
            </View>
          </View>
          <View style={[styles.column,{width:wp(21.2)}]}>
            <View style={styles.row}>
            <Text style={[styles.tableHeader,{fontSize:10,marginBottom:2}]}>Rate with FAC</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>241.5</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>241.5</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>86.25</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.tableHeader}>GST</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>38.64</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>38.64</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>13.8</Text>
            </View>
          </View>
          <View style={[styles.column,{width:wp(21)}]}>
            <View style={styles.row}>
              <Text style={[styles.tableHeader,{fontSize:10,marginBottom:2}]}>Rate with GST</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>280.14</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>280.14</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.tableText}>100.05</Text>
            </View>
          </View>
        </View>
        <Text style={{textAlign:'center',fontSize:12,marginTop:10}}>
         ** Price may vary due to current economy conditions  **
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RateScreen;
