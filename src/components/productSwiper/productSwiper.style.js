import {StyleSheet,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    swiper:{
        marginTop:0,
    },
    closeIcon:{
        height:34,
        width:34,
        borderRadius:17,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        alignSelf:'flex-end',
        margin:20,
      },
    imageStyle4:{
        height:hp(30),
        width:wp(100),
        resizeMode: 'stretch'
      },
      imageStyle1:{
        height:hp(100),
        width:wp(100),
        resizeMode: 'cover'
      },
      frame:{
        width:wp(100),
        height:hp(30)
      },
});
