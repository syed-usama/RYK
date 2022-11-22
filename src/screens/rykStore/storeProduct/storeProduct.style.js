import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
      },
      header:{
        height: 50,
        width:wp(100),
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
      titleText: {
        fontSize: 20,
        fontWeight:'700',
        color:colors.secondary
      },
      coverImage4:{
          height:hp(45),
          width:wp(100)
      },
      body:{
        margin:10,
        borderRadius:10,
        backgroundColor:'white'
      },
      body1:{
        marginVertical:20,
      },
      row1:{
          flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:15,
      alignItems:'center',
    },
      title:{
        width:wp(80),
        fontSize: 17,
        fontWeight:'600',
        color:colors.black
      },
      description:{
          marginTop:10,
        fontSize: 14,
        fontWeight:'400',
        color:'grey',
        marginHorizontal:15
      },
      price:{
        marginTop:10,
        fontSize: 22,
        fontWeight:'800',
        color:'black',
        marginHorizontal:15
      },
      shop:{
        marginLeft:10,
        fontSize: 14,
        fontWeight:'500',
        color:'black',
      },
      button:{
          height:40,
          width:wp(50),
          justifyContent:'center',
          alignItems:'center',
          borderRadius: 3,
          backgroundColor: colors.primary,
      },
      buttonText:{
        fontSize: 18,
        fontWeight:'500',
        color:colors.white
      },
      ratingText:{
        marginLeft:3,
        textAlignVertical:'center',
        fontSize: 14,
        color:colors.black,
      },
      instructionTitle:{
        marginTop:40,
        fontSize: 20,
        fontWeight:'600',
        color:colors.black,
        marginHorizontal:15,
      },
instructionDescription:{
  marginTop:5,
  fontSize: 14,
        fontWeight:'400',
        color:'grey',
        marginHorizontal:15,
},
textInput:{
  marginTop:5,
  borderWidth:1,
  borderColor:'grey',
  borderRadius:4,
  marginHorizontal:15,
},
row:{
  height:hp(10),
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  alignItems:'center',
  backgroundColor:'white'
},
row2:{
  flexDirection:'row',
  width:wp(40),
  justifyContent:'space-between',
  paddingHorizontal:10,
},
minus:{
  height:30,
  width:30,
  backgroundColor:'#d7dbd8',
  borderRadius:15,
  alignItems:'center',
  justifyContent:'center',
},
plus:{
  height:30,
  width:30,
  backgroundColor:colors.primary,
  borderRadius:15,
  alignItems:'center',
  justifyContent:'center',
},
quantity:{
  fontSize:14,
  fontWeight:'600',
  color:'black'
},
buttonText8:{
  fontSize:18,
  fontWeight:'600',
  color:'white',
  marginTop:-2,
},
});
