import {StyleSheet} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../../assets/colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  header: {
    marginTop: 30,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.secondary,
  },
  logo: {
    marginTop: 30,
    alignSelf: 'center',
    height: 70,
    width: 220,
  },
  body: {
    paddingHorizontal: 30,
  },
  bodyText1: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
  },
  title:{
    marginTop:10,
    fontSize: 15,
    fontWeight: '600',
    color: colors.secondary,
  },
  textInput:{
    borderBottomWidth:1,
    marginLeft:5,
  },
  button:{
    marginTop:40,
    alignSelf:'center',
    borderRadius:8,
    backgroundColor:colors.primary,
    height:50,
    width:widthPercentageToDP(70),
    justifyContent:'center',
    alignItems:'center',
    marginBottom:40,
  },
  buttonText:{
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
});
