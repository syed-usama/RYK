import {StyleSheet} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
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
  iconClose:{
    position:'absolute',
    alignSelf:'flex-end',
    zIndex:99999,
    right:-5,
    top:-5,
    backgroundColor:'white',
    borderRadius:10
  },
  icon:{
    borderWidth:1,
    borderRadius:15,
    padding:10,
    margin:15
  },
  photoView:{
    marginTop: 30,
    alignSelf: 'center',
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(60),
  },
  photo:{
    margin: 0,
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(60),
  },
  button:{
    marginTop:10,
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
