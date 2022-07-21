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

  },
  imageStyle:{
    height:height(9),
    width:width(50),
    marginTop:height(5)

   
   
  },
  textHeading:{
   fontWeight:'bold',
    fontSize:height(4),
    color:'#333333',
    marginTop:height(5)
  },
  textHeading2:{
    fontWeight:'bold',
     fontSize:height(4),
     color:'#fff',
     position:'absolute'
   

   },
   boxView:{
      marginTop:height(5),
     
   },
  box:{
    height:height(5),
    width:width(90),
    alignItems:'center',
    justifyContent:'center',
    marginTop:height(6),

  
 
   
  },
  boxImage:
  { height:height(9),
    width:width(90),
 

  }
});
export default styles;
