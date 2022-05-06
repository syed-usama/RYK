import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../assets/colors/colors';
export default StyleSheet.create({
  loader: {
    zIndex: 100,
    position: 'absolute',
    height: hp('100%'), 
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  }
});