import { StyleSheet } from 'react-native';
import { height,width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: AppColors.green
  },
  imageView:{

    alignSelf:'center'
  },
  imageStyle:{
    height:height(9),
    width:width(50),

   
   
  },
  imageView2:{
    backgroundColor:"#f2f2f2",
    alignSelf:'center'
  },
  imageStyle2:{
    height:height(7),
    width:width(40),
    tintColor:AppColors.btnBackgroundColorLight,
    marginTop:height(3)
   
   
  },
  textHeading:{
    fontWeight:'bold',
     fontSize:height(3),
     color:'#000',
     
   },
   imageContainer: {
    height: height(15),
    width: height(15),
    marginTop:height(2),
    alignItems: 'center',
    justifyContent: 'center',
    //overflow: 'hidden',
    borderColor: AppColors.btnBackgroundColorLight,
    borderWidth: 2,
    borderRadius: height(15),
    backgroundColor:AppColors.btnBackgroundColorLight,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.25,
  },
  uploadedImage: {
    height: height(14.5),
    width: height(14.5),
    borderRadius: height(14.5),
  },
  nameView:{
    marginTop:height(7),
    alignItems:'center'
  },
  feild:{
    width:width(85),
    height:height(6),
    borderRadius:10,
    borderWidth:1,
    borderColor:'#e3e2e1',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    marginTop:height(2),
    paddingHorizontal:width(4)
  },
  label:{
    fontFamily:'Quicksand-SemiBold'
  },
  divider:{
    width:width(85),
    height:height(0.1),
    backgroundColor:'#e3e2e1',
    marginTop:height(3)
  },
  paymentView:{
    marginTop:height(2),
    width:width(86),
    height:height(6),
    borderRadius:10,
    borderWidth:1,
    borderColor:AppColors.btnBackgroundColorLight,
    alignItems:'center',
    paddingHorizontal:width(5),
    flexDirection:"row"
  },
  checkbox:{
    height:Platform.OS=='ios'?height(2):height(2.4),
    width:width(4),
    borderRadius:50,
    borderWidth:1,
    borderColor:AppColors.btnBackgroundColorLight,
    alignItems:'center',
    justifyContent:'center',
  
  },
  checkbox2:{
    height:Platform.OS=='ios'?height(1):height(1.2),
    width:width(2),
    borderRadius:50,
    backgroundColor:AppColors.btnBackgroundColorDark
  
  },
  checkBoxText2:{
 
    marginLeft:width(1.5),
    fontSize:14,
    fontFamily:'Quicksand-SemiBold'
  },
  btnView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:height(1.5),
    width:width(86)
  },
  btnSmall:{
    height:height(5),
    width:width(40),
    borderRadius:10,
    backgroundColor:AppColors.btnBackgroundColorLight,
    alignItems:'center',
    justifyContent:'center'
  },
  btnSmallText:{
    fontFamily:"Quicksand-SemiBold",
    color:AppColors.white,
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
