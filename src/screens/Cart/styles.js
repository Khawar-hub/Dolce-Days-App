import { StyleSheet } from 'react-native';
import { height ,width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
   
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
    fontWeight:'bold',
     fontSize:height(4),
     color:'#333333',
     marginTop:height(5)
   },
   boxView:{
    marginTop:height(5)
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
  
});
export default styles;
