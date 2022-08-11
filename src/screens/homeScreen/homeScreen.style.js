import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        fontWeight:'700',
        color:colors.secondary
      },
      homeSwiper:{
        flex:3,
    },
    detail:{
        marginTop:20,
        flex:1.5,
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
          flex:4.5,
          alignItems:'center'
      },
      button1:{
        width:250,
          height:80,
          borderRadius:10,
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
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
       
    },
    button3:{
      width:250,
        height:80,
        borderRadius:10,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
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
