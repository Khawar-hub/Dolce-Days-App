import React from 'react';
import {ActivityIndicator,Image,View, Text, TouchableOpacity,Platform} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import Ionic from 'react-native-vector-icons/Ionicons'
const Button = ({
    products,
    customerName,
    CustomerEmail,
    ammount,
    billingMethod,
    onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
   
      style={[styles.container,]}>
      <View style={styles.infoView}>
          <View style={styles.topView}>
              <Text style={styles.name}>Customer: {customerName}</Text>
              <Text style={styles.name}>Email: {CustomerEmail}</Text>
              <Text style={[styles.name,{marginRight:width(5)}]}>Total Amount: AED {ammount}</Text>

          </View>
          <View style={[styles.topView,{marginTop:height(1),flexDirection:'row'}]}>
              <Text style={styles.des}>Products :{products?.length}</Text>
              <Text style={styles.des}>Billing Method: {billingMethod}</Text>
            

          </View>

      </View>

      
    </TouchableOpacity>
  );
};

export default Button;
