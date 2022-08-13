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
        
        borderColor:'grey',
        borderRadius:10,
        marginTop:10,
        
      },
      itemSection:{
          flexDirection:'row',
          paddingHorizontal:10,
          borderBottomColor:'grey',
          paddingVertical:15,
          borderRadius:5,
          alignItems:'center',
          justifyContent:'space-around',
          borderBottomWidth:0.5,
          
          
      },
imageView:{
    width:wp(28),
},
image:{
    height:wp(20),
    width:wp(25),
    borderRadius:5,
    resizeMode: 'stretch'
},
itemDetail:{
    width:wp(40),
    justifyContent:'center'
},
title:{
    width:wp(40),
    fontSize:15,
    fontWeight:'500',
    color:colors.primary,
    marginBottom:6,
},
Price:{
    fontSize:14,
    fontWeight:'800',
    color:'black',
    marginBottom:6
},
row:{
    flexDirection:'row',
    width:wp(56),
    justifyContent:'space-between',
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
fastDelivery:{
    fontSize:14,
    fontWeight:'600',
    color:'black',
    marginLeft:4
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
    fontWeight:'600',
    color:'black'
},
plus:{
    fontSize:14,
    fontWeight:'600',
    color:'black',
    marginTop:-2,
},
button:{
    alignItems:'center',
    height:25,
    borderColor: 'grey',
    backgroundColor:colors.primary,
    borderRadius:5,
    marginTop:15,
    marginHorizontal:40,
    justifyContent:'center'
},
buttonText:{
    fontSize:14,
    fontWeight:'600',
    color:colors.white,
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
