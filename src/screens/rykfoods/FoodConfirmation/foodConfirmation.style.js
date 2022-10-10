import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height: 270,
    width: 301
  },
  linearGradient: {
    flex: 2,
    borderTopLeftRadius: 80,
      borderTopRightRadius:80,
  },
  header: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center'
      
  },
  bodytext:{
    fontFamily: 'Axiforma-Regular',
    fontWeight: '900',
    fontSize: 24,
    color: 'white',
    marginTop: 8
  },
  whiteButton: {
    marginHorizontal: 24,
    marginVertical: 10,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 50,
  },
  blueButtonText: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: colors.primary,
  },
});
