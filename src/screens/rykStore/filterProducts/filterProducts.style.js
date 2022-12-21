import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../assets/colors/colors';
import Fonts from '../../../global/constants';
const {height} = Dimensions.get('screen');
const height_logo = height * 0.22;
const width_logo = height * 0.39;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.secondary,
  },
  searchView: {
    marginTop: 15,
    borderRadius: 20,
    height: 40,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingLeft: 20,
    alignItems: 'center',
  },
  searchText: {
    marginLeft: 10,
  },
  searchInput: {
    width: wp(70),
    // backgroundColor:'yellow',
    paddingLeft: 3,
  },
  categorySection: {
    // backgroundColor:'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
  },
  category: {
    marginLeft: 3,
    height: hp(4),
    width: wp(24),
    borderWidth: 1,
    borderRadius: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.secondary,
  },
  button: {
    marginLeft: 10,
    height: hp(4),
    width: wp(24),
    borderRadius: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  image: {
    width: width_logo,
    height: height_logo,
    borderRadius: 6,
  },
  backimage: {
    flex: 1,
    justifyContent: 'center',
  },
  favourite: {
    height: 140,
    width: 105,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    elevation: 5,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  nextCard: {
    height: 193,
    width: 80,
    backgroundColor: 'rgba(184, 0, 0,0.2)',
    borderRadius: 15,
    marginLeft: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  itemImage: {
    width: 105,
    height: 100,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  favourite1: {
    height: 200,
    width: wp(45),
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    elevation: 5,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  itemImage1: {
    width: wp(45),
    height: 150,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  itemText: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '700',
    color: colors.secondary,
  },
  itemText1: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  cat_container: {
    backgroundColor: 'white',
    height: hp(100),
  },
  cat_headerText:{
    textAlign:'center',
    marginTop:10,
    fontFamily: Fonts.MontserratBold,
    fontSize:22,
    color:'black'
  },
  cat_innerContent:{
    marginTop:30,
    width:wp(90),
  },
  cat_itemView:{
    borderBottomWidth:1.6,
    paddingHorizontal:16,
    marginHorizontal:7,
    marginVertical:6,
    paddingVertical:5,
    justifyContent:'center'
},
cat_itemText:{
    fontFamily: Fonts.MontserratBold,
    fontSize:14,
},

});
