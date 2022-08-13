import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import Fonts from '../../../global/constants';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
      },
      header:{
        height: 50,
        width:widthPercentageToDP(100),
        position:'absolute',
        zIndex:1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop:30,
        alignItems:'center',
        justifyContent:'space-between'
      },
      backIcon:{
        height:34,
        width:34,
        borderRadius:17,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
      },
      frame:{
        width:wp(100),
        height:hp(30)
      },
      titleText: {
        fontSize: 20,
        fontWeight:'700',
        color:colors.secondary,
        fontFamily: Fonts.MonSemiBold,
      },
      coverImage4:{
        height:hp(30),
        width:wp(100)
    },
    imageStyle4:{
      height:hp(30),
      width:wp(100),
      resizeMode: 'stretch',
      justifyContent:'flex-end',
    },
    row4:{
      paddingTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    alignItems:'center',
    backgroundColor:'white'
  },
  ratingText:{
    marginLeft:3,
    textAlignVertical:'center',
    fontSize: 14,
    color:colors.black,
  },
  deliveryText:{
    marginLeft:5,
    textAlignVertical:'center',
    fontSize: 14,
    color:colors.black,
  },
  infoText:{
    fontSize: 14,
      color:colors.black,
      fontFamily: Fonts.MonSemiBold,
  },
    title4:{
      width:wp(80),
      fontSize: 18,
      color:colors.black,
      fontFamily: Fonts.MonBold,
    },
    row3:{
        marginTop:20,
          flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'white',
      paddingHorizontal:15,
      alignItems:'center',
      paddingTop:10,
    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        height:30,
        width:30,
    },
      cartSection:{
        backgroundColor:'white'
      },
      itemSection:{
          flexDirection:'row',
          justifyContent:'space-between'
      },
imageView:{
    width:100,
},
image:{
    height:70,
    width:90,
    borderRadius:5,
    resizeMode: 'stretch'
},
itemDetail:{
    justifyContent:'center',
},
title:{
    fontSize:16,
    color:'black',
    fontFamily: Fonts.MonSemiBold,
    marginBottom:6,
},
Price:{
    fontSize:14,
    fontFamily: Fonts.MonRegular,
    color:'black',
    marginBottom:6
},
row:{
    flexDirection:'row',
    width:wp(64),
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:30,
},
row1:{
    flexDirection:'row',
    width:wp(20),
    justifyContent:'space-between'
},
row2:{
    flexDirection:'row',
    alignItems:'center'
},
minus:{
    height:20,
    width:20,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
},
quantity:{
    fontSize:14,
    fontFamily: Fonts.MonBold,
    fontWeight:'600',
    color:'black'
},
plus:{
    fontSize:14,
    fontFamily: Fonts.MonBold,
    fontWeight:'600',
    color:'black',
    marginTop:-2,
},
button:{
    alignItems:'center',
    height:25,
    width:100,
    borderRadius:5,
    backgroundColor:colors.primary,
    justifyContent:'center'
},
buttonText:{
    fontSize:14,
    fontFamily: Fonts.MonBold,
    fontWeight:'600',
    color:colors.white,
},
tabBar: {
  backgroundColor: '#fff',
  borderBottomColor: '#f4f4f4',
  borderBottomWidth: 1,
  height:60,
},
tabContainer: {
  borderBottomColor: '#090909',
  marginHorizontal:15,
},
tabText: {
  paddingVertical:15,
  color: '#9e9e9e',
  fontSize: 15,
  fontFamily: Fonts.MonBold,
},
separator: {
  height: 0.5,
  width: '96%',
  alignSelf: 'flex-end',
  backgroundColor: '#eaeaea'
},
sectionHeaderContainer: {
  height: 10,
  backgroundColor: '#f6f6f6',
  borderTopColor: '#f4f4f4',
  borderTopWidth: 1,
  borderBottomColor: '#f4f4f4',
  borderBottomWidth: 1
},
sectionHeaderText: {
  color: '#010101',
  backgroundColor: '#fff',
  fontSize: 19,
  fontFamily: Fonts.MonBold,
  paddingTop: 25,
  paddingBottom: 5,
  paddingHorizontal: 15
},
itemContainer: {
  paddingVertical: 20,
  paddingHorizontal: 15,
  backgroundColor: '#fff'
},
});
