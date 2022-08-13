import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import Fonts from '../../../global/constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header:{
        marginTop:30,
        height: 70,
        marginHorizontal:-2,
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'space-between',
        borderColor:colors.primary,
        borderBottomWidth:5,
        borderLeftWidth:3,
        borderRightWidth:3,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
      },
      titleText: {
        fontSize: 20,
        color:colors.secondary,
        fontFamily:Fonts.MonSemiBold,
      },
      barView:{
        marginTop:-13,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
      },
barItem:{
    justifyContent:'space-evenly',
    alignItems:'center',
},
numberView:{
    height:22,
    width:22,
    borderRadius:11,
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center'
},
barText:{
    fontSize:12,
    color:'black'
},
      cartSection:{
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        paddingVertical:10,
        
      },
      card:{
        marginHorizontal:20,
        marginVertical:10,
        elevation:5,
        paddingHorizontal:20,
        paddingVertical:17,
        backgroundColor:'white',
      },
cardRow:{
    paddingBottom:9,
    flexDirection:'row',
    alignItems:'center',
},
cardTitle:{
    fontSize:18,
    fontFamily:Fonts.MonSemiBold,
    color:'black',
    marginLeft:12,
},
cardText:{
    fontSize:15,
    fontFamily:Fonts.MonSemiBold,
    color:'black',
    marginLeft:12,
},
      itemSection:{
          flexDirection:'row',
          paddingVertical:5,
          alignItems:'center',
          justifyContent:'space-between',
      },
      textInput:{
        marginHorizontal:0,
        marginVertical:5,
        height:45,
        backgroundColor: '#fff',
      },
title:{
    width:wp(50),
    fontSize:15,
    fontFamily:Fonts.MonMedium,
    color:'grey',
    marginBottom:6,
},
price:{
    fontSize:15,
    fontFamily:Fonts.MonMedium,
    color:'grey',
},
row:{
    flexDirection:'row',
    width:wp(56),
    justifyContent:'space-between',
},
row1:{
    paddingVertical:7,
    flexDirection:'row',
    justifyContent:'space-between'
},
row2:{
    flexDirection:'row',
    alignItems:'center'
},
button2:{
    marginHorizontal:18,
    alignItems:'center',
    height:46,
    backgroundColor:colors.primary,
    borderRadius:8,
    justifyContent:'center',
    marginBottom:10,
},
buttonText2:{
    fontSize:14,
    fontWeight:'600',
    color:colors.white,
},
totalRow:{
    flexDirection:'row',
    width:wp(100),
    paddingVertical:8,
    paddingHorizontal:15,
    justifyContent:'space-between',
    alignItems:'center'
},
totalText:{
    fontSize:17,
    fontWeight:'600',
    color:colors.black,
},
totalText1:{
    fontSize:14,
    fontWeight:'400',
    color:colors.black,
},
});
