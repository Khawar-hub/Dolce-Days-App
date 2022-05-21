import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop:height(5),
  
  },
  imageView:{
    backgroundColor:"#f2f2f2"
  },
  imageStyle:{
    height:height(9),
    width:width(50),
    tintColor:'#333333'
   
   
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
    marginTop:height(2),
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
  }


});
export default styles;
