import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
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
    paddingHorizontal: 15,
  },
  bodyText1: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
  },
  textbox: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal:20,
    color:'black'
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 40,
    width: widthPercentageToDP(30),
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  error: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: colors.primary,
  },
  card: {
    borderWidth:0.5,
    borderRadius:3,
    marginTop:30,
  },
  row: {
    flexDirection:'row',
    borderWidth:0.5,
  },
  text1: {
    width:widthPercentageToDP(35),
    borderRightWidth:0.5,
    padding:5,
    justifyContent:'center',
  },
  tabletext: {
    color:'black',
    fontSize:14,
    fontWeight:'500'
  },
  tabletext2: {
    color:'black',
    fontSize:13,
    fontWeight:'400'
  },
  text2: {
    width:widthPercentageToDP(55),
    padding:5
  },
});
