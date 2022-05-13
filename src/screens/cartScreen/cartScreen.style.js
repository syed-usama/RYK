import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header:{
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'space-between'
      },
      titleText: {
        fontSize: 20,
        fontWeight:'700',
        color:colors.secondary
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
          paddingVertical:20,
          borderRadius:5,
          elevation:7
          
          
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
    fontSize:18,
    fontWeight:'400',
    color:'black',
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
},subTitle:{
    marginTop:20,
    marginLeft:10,
    fontSize:18,
    fontWeight:'600',
    color:'grey',
},
subTotal:{
    marginTop:10,
    borderColor:'grey',
    borderWidth:1,
    borderRadius:5,
    marginHorizontal:10,
    paddingHorizontal:10,
    paddingVertical:10,
},
priceRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:4,
},
priceText:{
    fontSize:18,
    fontWeight:'400',
    color:'grey',
},
line:{
    borderColor:'grey',
    borderBottomWidth:1,
    marginVertical:10
},
priceText1:{
    fontSize:18,
    fontWeight:'400',
    color:'black',
},
button2:{
    alignSelf:'flex-end',
    flexDirection:'row',
    alignItems:'center',
    height:46,
    width:180,
    backgroundColor:colors.primary,
    borderRadius:23,
    marginTop:40,
    justifyContent:'space-evenly',
    marginRight: 20
},
buttonText2:{
    fontSize:18,
    fontWeight:'600',
    color:colors.white,
},
});
