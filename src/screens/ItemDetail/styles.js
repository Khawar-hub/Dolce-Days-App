import { StyleSheet } from 'react-native';
import { height,width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
   
    paddingTop:height(0),
    paddingBottom:height(11)
  },
  text: {
    color: AppColors.green
  },
  imageView:{
    backgroundColor:AppColors.btnBackgroundColorLight
  },
  imageStyle:{
    height:height(40),
    width:width(100),
    tintColor:'#333333',
    
   
   
  },
 
  incrementView:{
    marginTop:height(2),
    width:width(25),
    height:height(4),
    borderRadius:10,
    borderWidth:1,
    borderColor:AppColors.gray,
    flexDirection:'row'
  },
  increment1:{
    width:width(12.5),
    alignItems:'center',
    justifyContent:'center',
    borderRightWidth:1,
    borderRightColor:AppColors.gray,


  },
  increment2:{
    width:width(12.5),
    alignItems:'center',
    justifyContent:'center',


  },
  incrementText:{
    fontSize:20
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

  },
  row:{
      width:width(96),
      marginTop:height(2),
      flexDirection:'row',
      justifyContent:"space-between"
    
  },
  name:{
     fontFamily:'Quicksand-Bold',
     fontSize:20
  },price:{
    fontFamily:'Quicksand-Bold',
    fontSize:20
  },
  des:{
      width:width(96),
      fontFamily:'Quicksand-Regular',
      color:AppColors.black,
      marginTop:height(0.4)

  },
  label:{
      marginTop:height(2),
      fontSize:20,
      fontFamily:'Quicksand-Bold',
  },
  quantity:{
    width:width(90),
   flexDirection:'row',
   justifyContent:'space-between',
    alignSelf:'center',
    alignItems:'center'
 },
  loginBtn:{
    marginTop:height(2.5),
    flexDirection:"row",
    width:width(90),
    height:height(5.4),
    backgroundColor:AppColors.btnBackgroundColorDark,
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
});
export default styles;
