import React,{useState} from 'react';
import {ActivityIndicator,Image,View, Text, TouchableOpacity} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import Ionic from 'react-native-vector-icons/Ionicons'
const Button = ({
  title,
  name,
  price,
  des,
  img,
  onPress,
  activeOpacity,
  containerStyle = {},
  textStyle = {},
  quantity,onPressAdd,
  onPressRemove
}) => {
  //   const[quantity,setQuantity]=useState(0)
  //   const [total,setTotal]=useState(0)
  //   const increment=()=>{
  //       setQuantity(quantity+1)
        
       
  //        }
  // const decrement=()=>{
  //   if(quantity==0){

  //   }
  //   else
  //   setQuantity(quantity-1)
    


  // }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      <View style={styles.imgView}>
         
            <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            style={styles.imageStyle}
            
          />
        
      </View>
      <View style={styles.infoView}>
          <View style={styles.topView}>
              <Text style={styles.name}>{name}</Text>
              <Text style={[styles.name,{marginRight:width(5),fontSize:20}]}>AED {price}</Text>
              <View style={styles.incrementView}>
        <TouchableOpacity onPress={onPressAdd}  style={styles.increment1}>
          <Text style={styles.incrementText}>+</Text>
        </TouchableOpacity>
        <View style={{width:width(5),height:height(3.4),borderRightWidth:1,borderRightColor:AppColors.gray,borderLeftColor:AppColors.gray,borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
          <Text>{quantity}</Text>
        </View>
        <TouchableOpacity onPress={onPressRemove}   style={styles.increment2}>
        <Text style={styles.incrementText}>-</Text>
        </TouchableOpacity>

      </View>
          </View>
         

      </View>

      
    </TouchableOpacity>
  );
};

export default Button;
