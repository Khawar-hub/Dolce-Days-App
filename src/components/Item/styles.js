import { StyleSheet,Platform } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
     
    height: height(12),
    width: width(90),
    alignSelf: 'center',
    marginTop:height(2.5),
    flexDirection:'row',

  },
  imageStyle:{
    height:height(13),
    width:width(30),
  
   
   
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
  },
  imgView:{
  
   width:width(30),
  
  },
  infoView:{
  
    width:width(60),
    paddingHorizontal:width(2.5),
    paddingVertical:Platform.OS=="ios"?height(0.5):height(0)
    

  },
  topView:{
      width:width(60),
      flexDirection:'row',
      justifyContent:'space-between'
  },
  name:{
      fontSize:15,
      fontFamily:'Quicksand-Bold'
  },
  des:{
width:width(40),
height:height(5),
color:AppColors.gray
  },
  cartBtn:{
      height:height(3),
      width:Platform.OS=="ios"?width(7):width(6),
      borderRadius:6,
      backgroundColor:'#333',
      alignItems:"center",
      justifyContent:'center'
  }

});
export default styles;
