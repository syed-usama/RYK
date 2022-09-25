import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
      },
      header:{
        marginTop:30,
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'space-between'
      },
      titleText: {
        fontSize: 20,
        fontWeight:'600',
        color:colors.secondary
      },
      logo:{
        marginTop:30,
        alignSelf:'center',
        height:70,
        width:220,
      },
      body:{
        paddingHorizontal:45,
      },
      bodyText1:{
        textAlign:'center',
        marginTop:20,
        marginBottom:20,
        fontSize: 16,
        fontWeight:'700',
        color:colors.secondary
      },
row:{
  marginTop:30,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
},
card:{
  alignItems:'center',
},
circle:{
  height:100,
  width:100,
  borderRadius:50,
  backgroundColor:'white',
  elevation:10,
  justifyContent:'center',
  alignItems:'center'
},
cardText:{
  marginTop:10,
        fontSize: 15,
        fontWeight:'600',
        color:colors.secondary
},
});
