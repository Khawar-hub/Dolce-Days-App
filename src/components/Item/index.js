import React from 'react';
import {ActivityIndicator,Image,View, Text, TouchableOpacity,Platform} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import Ionic from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux';
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
  cartPress,
  check
}) => {
 const user = useSelector((state) => state.Auth.user);
 console.log(user?.color)
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      <View style={styles.imgView}>
         
            <Image
            source={{uri:img}}
            resizeMode="cover"
            style={styles.imageStyle}
            
          />
        
      </View>
      <View style={styles.infoView}>
          <View style={styles.topView}>
              <Text style={styles.name}>{name}</Text>
              <Text style={[styles.name,{marginRight:width(5)}]}>AED {price}</Text>

          </View>
          <View style={[styles.topView,{marginTop:height(3.6)}]}>
              <Text style={styles.des}>{des}</Text>
         {check&&
              <TouchableOpacity onPress={cartPress} style={[styles.cartBtn,{marginRight:width(6),backgroundColor:user?.OrgColor}]}>
                 <Ionic size={Platform.OS=='ios'?20:17} name='cart-outline' color={'#fff'}/>
              </TouchableOpacity>}

          </View>

      </View>

      
    </TouchableOpacity>
  );
};

export default Button;
