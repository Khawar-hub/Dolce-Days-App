import { StyleSheet } from 'react-native';
import { height,width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:height(14),
    paddingBottom:height(11)
  },
  text: {
    color: AppColors.green
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
   fontWeight:'600',
    fontSize:height(4),
    color:'#333333',
    marginTop:height(5)
  },
  textHeading2:{
    fontWeight:'600',
     fontSize:height(4),
     color:'#fff',
     position:'absolute'
   

   },
   boxView:{
      marginTop:height(5)
   },
  box:{
    height:height(5),
    width:width(90),
    alignItems:'center',
    justifyContent:'center',
    marginTop:height(6)
   
  },
  boxImage:
  { height:height(9),
    width:width(90),
    tintColor:'#333333'

  }
});
export default styles;
