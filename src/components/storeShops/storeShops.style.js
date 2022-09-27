import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
export default StyleSheet.create({
  favourite: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 15,
    marginLeft: 15,
    marginVertical: 5,
    elevation: 5,
  },
  itemImage: {
    width: 250,
    height: 140,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
  },
  itemText1: {
    fontSize: 12,
    color: colors.secondary,
  },
});
