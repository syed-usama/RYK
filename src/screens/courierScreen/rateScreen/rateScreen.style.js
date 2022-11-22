import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
        paddingHorizontal:0,
      },
      bodyText1:{
        textAlign:'center',
        marginTop:20,
        marginBottom:20,
        fontSize: 16,
        fontWeight:'700',
        color:colors.secondary
      },
      bodyText2:{
        marginHorizontal:20,
        marginBottom:20,
        fontSize: 14,
        fontWeight:'400',
        color:colors.secondary
      },
      table:{
        alignSelf:'center',
        width:wp(90),
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'black'
      },
      column:{
        width:wp(30),
        borderWidth:1,
        borderColor:'black'
      },
      row:{
        borderBottomWidth:1,
        borderBottomColor:'black'
      },
      tableHeader:{
        textAlign:'center',
        fontSize: 16,
        fontWeight:'700',
        color:colors.secondary
      },
      tableText:{
        textAlign:'center',
        fontSize: 14,
        fontWeight:'400',
        color:colors.secondary
      },

});
