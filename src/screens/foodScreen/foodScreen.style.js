import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';
const {height} = Dimensions.get('screen');
const height_logo = height * 0.22;
const width_logo = height * 0.39;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      titleText: {
        fontSize: 20,
        fontWeight: '700',
        color:colors.secondary,
      },
      searchView:{
          marginTop:15,
          borderRadius:20,
          height:40,
          marginHorizontal:10,
          flexDirection:'row',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          paddingLeft:20,
          alignItems:'center'
      },
      searchText:{
          marginLeft:10,
      },
      image: {
        width: width_logo,
        height: height_logo,
        borderRadius: 6,
      },
      backimage: {
        flex: 1,
        justifyContent: 'center',
      },
      favourite:{
        width: 105,
        marginHorizontal:5,
        marginVertical:5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
        borderRadius:20,
        backgroundColor:'white'
      },
      itemImage:{
          width: 105,
           height: 100,
            borderTopRightRadius: 20,
            borderTopLeftRadius:20,
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
