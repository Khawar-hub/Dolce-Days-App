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
    backgroundColor:"#f2f2f2",
    alignSelf:'center'
  },
  imageStyle:{
    height:height(9),
    width:width(50),
    tintColor:'#333333'
   
   
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
    fontWeight:'600',
     fontSize:height(2),
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
    marginTop:height(2),
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
  }
});
export default styles;
