import {StyleSheet,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
export default StyleSheet.create({
    swiper:{
        marginTop:10,
        marginHorizontal:10,
    },
    sliderImage:{
        width:wp(95),
        height:hp(26),
        resizeMode:'stretch',
        borderRadius:10,
    },
    slide:{
        elevation:5,
        width:wp(95),
        borderRadius:10,
        marginVertical:5,
    }
});
