import { StyleSheet, Platform} from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
     
    height: height(12),
    width: width(90),
    alignSelf: 'center',
    marginBottom:height(10),
    flexDirection:'row',

  },
  imageStyle:{
    height:height(20),
    width:width(30),
  
   
   
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
  },
  imgView:{
    height:height(20),
   width:width(30),

 
  },
  infoView:{
   
   width:width(60),
    paddingHorizontal:width(2.5),
  
    
    

  },
  topView:{
      width:width(20),
      height:height(17),
      justifyContent:'space-between',
      paddingVertical:height(1),
     
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
      width:width(7),
      borderRadius:6,
      backgroundColor:'#333',
      alignItems:"center",
      justifyContent:'center'
  },
  incrementView:{

    width:width(25),
    height:Platform.OS=='ios'?height(3.5):height(4),
    borderRadius:10,
    borderWidth:1,
    borderColor:AppColors.gray,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center"
  },
  increment1:{
    width:width(10),
    
   
    alignItems:'center',
  
    
    
  
 


  },
  increment2:{
    width:width(10),
   
    alignItems:'center',
   


  },
  incrementText:{
    fontSize:20,
  
  
   

  },

});
export default styles;
