import {StyleSheet,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
export default StyleSheet.create({
    favourite:{
        height:hp(22),
        width: wp(37),
        marginHorizontal:5,
        marginVertical:5,
        alignItems: 'center',
        elevation:5,
        borderRadius:15,
        backgroundColor:'white'
      },
      itemImage:{
          width: wp(37),
           height: hp(14),
            borderTopRightRadius: 15,
            borderTopLeftRadius:15,
    },
    itemText:{
        marginTop:2,
        fontSize: 12,
         fontWeight: '700',
         color:colors.secondary
        },
        itemText1:{
            fontSize: 12,
             fontWeight: '700',
             color:colors.primary
            },
});
