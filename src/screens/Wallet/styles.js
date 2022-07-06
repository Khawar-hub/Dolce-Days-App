import {StyleSheet,Platform} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop:height(5),
  
  },
  imageView:{
    
  },
  imageStyle:{
    height:height(9),
    width:width(50),
   
   
   
  },
  textHeading:{
   fontWeight:'bold',
    fontSize:height(2.2),
    color:'#333333',
    marginTop:height(1)
  },
  textView:{
    alignItems:'center',
    marginTop:height(2.6),
    height:height(4.4),
    justifyContent:'space-between'
  },
  textInputView:{
    marginTop:height(2),
    height:height(11.8),
    justifyContent:'space-between'
  },
  normalText:{
    fontFamily:'Quicksand-SemiBold',
    color:AppColors.gray
  },
  inputStyle:{
    height:height(5.4),
    width:width(90),
    backgroundColor:AppColors.white,
    borderBottomWidth:0.6,
    borderBottomColor:'#cdd1cd',
    color:AppColors.btnBackgroundColorDark,
    paddingLeft:width(2),
    fontWeight:'600'

  },
  loginBtn:{
    marginTop:height(2.5),
    width:width(90),
    height:height(5.4),
    backgroundColor:AppColors.btnBackgroundColorDark,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:AppColors.white,
    fontWeight:'600'
  },
  divider:{
    width:width(90),
    height:height(5.4),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:height(2)

  },
  dividerLine:{
    height:1,
    width:width(18.5),
    backgroundColor:'#cdd1cd'
  },
  dividerText:{
    fontFamily:"Quicksand-SemiBold",
    color:AppColors.gray,
    width:width(47)
  },
  phoneStyle:{
    fontFamily:"Quicksand-SemiBold",
    color:AppColors.gray,
    marginTop:height(1)
    
  },
  emailStyle:{
    fontFamily:"Quicksand-SemiBold",
    color:AppColors.gray,
    marginTop:height(1),
    textDecorationLine:'underline'
    
  },
  imageViewSmall:{
    backgroundColor:"#f2f2f2"
  },
  imageStyleSmall:{
    height:height(8),
    width:width(38),
    marginTop:height(8),
    marginBottom:height(2),
    tintColor:AppColors.gray
   
   
  },
  changeorganizationStyle:{
    fontFamily:"Quicksand-SemiBold",
    color:AppColors.gray,
    
  
  },
  underline:{
    width:width(36),
    height:1,
    backgroundColor:AppColors.gray
  },
 pickerView:{
   height:Platform.OS=='ios'?height(36):height(44),
   width:width(90),
   backgroundColor:AppColors.white,
   marginTop:height(8),
   borderRadius:6,
   paddingHorizontal:10,
   paddingVertical:10,
   alignItems:'center',
   justifyContent:'center'
 },
 pickerViewHeading:{
   fontSize:18,
   fontWeight:'bold'
 },
 label:{
   fontSize:13,
   fontWeight:'bold',
   marginTop:height(3)
 },
 label2:{
  fontSize:13,
  fontWeight:'bold',
  marginTop:height(1)
},
btnView:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:height(1.5)
},
btnSmall:{
  height:height(5),
  width:width(41),
  borderRadius:10,
  backgroundColor:AppColors.btnBackgroundColorLight,
  alignItems:'center',
  justifyContent:'center'
},
btnSmallText:{
  fontFamily:"Quicksand-SemiBold",
  color:AppColors.white,
},
balanceView:{
  alignItems:'center',
  marginTop:height(2)
},
balanceText:{
    fontSize:25,
    fontFamily:"Quicksand-Bold"

},
loginBtn:{
    marginTop:height(2.5),
    flexDirection:"row",
    width:width(50),
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
    fontWeight:'bold',
    fontSize:17
  },
  infoView:{
    width:width(90),
    alignItems:'center',
    justifyContent:'center',
    marginTop:height(2),
  
  },
  info:{
    fontSize:13,
    color:AppColors.btnBackgroundColorLight
  },


});
export default styles;

