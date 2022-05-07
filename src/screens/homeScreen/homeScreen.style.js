import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
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
      homeSwiper:{
        flex:3,
    },
    detail:{
        marginTop:20,
        flex:2,
        alignItems:'center',
        paddingHorizontal:20
    },
    title:{
        fontSize: 24,
        fontWeight:'800',
        color:colors.secondary
    },
    description:{
        marginTop:10,
        fontSize: 13,
        textAlign:'center',
        fontWeight:'400',
        color:colors.secondary
    },
      body:{
          marginTop:20,
          flex:4,
          alignItems:'center'
      },
      button1:{
        width:250,
          height:80,
          borderRadius:20,
          backgroundColor:colors.primary,
          justifyContent:'center',
          alignItems:'center',
          marginBottom:30,
      },
      buttonText1:{
        fontSize: 22,
        fontWeight:'600',
        color:colors.white
      },
      button2:{
        width:250,
        height:80,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
       
    },
    buttonText2:{
      fontSize: 22,
      fontWeight:'600',
      color:colors.white
    },
    buttonImage2:{
        height:80,
        width:250,
    }
});
