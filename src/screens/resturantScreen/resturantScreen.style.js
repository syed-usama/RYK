import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
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
      coverImage4:{
        height:hp(30),
        width:wp(100)
    },
    imageStyle4:{
      height:hp(30),
      width:wp(100),
      resizeMode: 'stretch',
      justifyContent:'flex-end'
    },
    row4:{
      marginTop:20,
        flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    alignItems:'center',
    paddingVertical:15,
    backgroundColor:'rgba(0,0,0,0.3)'
  },
    title4:{
      fontSize: 22,
      fontWeight:'500',
      color:colors.white
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
      title3:{
        fontSize: 26,
        fontWeight:'600',
        color:colors.black
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
          paddingVertical:15,
          paddingHorizontal:20,
          backgroundColor:'white'
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
    fontWeight:'800',
    color:'black',
    marginBottom:6,
},
Price:{
    fontSize:14,
    fontWeight:'400',
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
    width:100,
    borderRadius:5,
    backgroundColor:colors.primary,
    justifyContent:'center'
},
buttonText:{
    fontSize:14,
    fontWeight:'600',
    color:colors.white,
}
});
