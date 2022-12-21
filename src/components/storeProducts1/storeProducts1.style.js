import {StyleSheet,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
export default StyleSheet.create({
    favourite1:{
        height:hp(23),
        width: wp(45),
        marginHorizontal:5,
        marginVertical:5,
        alignItems: 'center',
        elevation:5,
        borderRadius:15,
        backgroundColor:'white'
      },
      itemImage1:{
        height:hp(15),
          width: wp(45),
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
