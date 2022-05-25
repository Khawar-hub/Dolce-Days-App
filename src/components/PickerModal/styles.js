import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from 'react-native-dimension'
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.white,
        width: width(60),
        paddingVertical: height(3),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius: width(5)
    },
    loginBtn:{
        marginTop:height(2.5),
        flexDirection:"row",
        width:width(40),
        height:height(5.4),
        backgroundColor:AppColors.btnBackgroundColorLight,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:height(1.3)
      },
      btnText:{
        color:AppColors.white,
        fontWeight:'600',
        fontSize:17
      },
});
export default styles;
