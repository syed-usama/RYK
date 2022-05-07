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
        fontWeight:'600',
        color:colors.secondary
      },
      comingSoon:{
          textAlign:'center',
          fontSize:20,
          fontWeight:'800',
          color: colors.primary
      }
});
