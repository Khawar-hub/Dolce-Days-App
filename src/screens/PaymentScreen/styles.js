import { StyleSheet } from 'react-native';
import { height ,width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    paddingHorizontal:width(4)
   
   
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
  textHeading:{
    fontWeight:'600',
     fontSize:height(3),
     color:'#333333',
     marginTop:height(5)
   },
   textHeadingNormal:{
  
     fontSize:height(1.7),
     marginTop:height(1),
     color:'#333333',
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
  fontWeight:'600',
  fontSize:17
},
label:{
  marginTop:height(2),
  fontSize:15,
  fontFamily:'Quicksand-SemiBold',
},
quantity:{
width:width(90),
flexDirection:'row',
justifyContent:'space-between',
alignSelf:'center',
alignItems:'center'
},
input:{
  height:height(5.3),
  width:width(92),
  borderRadius:7,
  backgroundColor:'#e0e3de',
  marginTop:height(1),
  paddingLeft:width(3),
  
},
inputdate:{
  height:height(5.3),
  width:width(54),
  borderRadius:7,
  backgroundColor:'#e0e3de',
  marginTop:height(1),
  paddingLeft:width(3),
  alignItems:'flex-start',
  justifyContent:'center'
  
},
inputcvc:{
  height:height(5.3),
  width:width(35),
  borderRadius:7,
  backgroundColor:'#e0e3de',
  marginTop:height(1),
  paddingLeft:width(3),
  
}
  
});
export default styles;
