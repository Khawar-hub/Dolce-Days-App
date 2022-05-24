import React, { useEffect, useState } from 'react';
import { Text, View,Image,FlatList,TouchableOpacity,TextInput } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/Auth';
import styles from './styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
export default function Cart(props) {
 
  const cart = useSelector((state) => state.Cart.cart);
  
  const total = useSelector((state) => state.Cart.totalprice);
  const dispatch = useDispatch();
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'danger',
    });
    dispatch(logout());
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const[date,setdate]=useState(null)

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    if(moment(date).isSameOrAfter(new Date())){
     alert('Invalid Expiry date')
    }else{
      setdate(date)
      hideDatePicker();
    }
  
  };

 
  return (
    <ScreenWrapper statusBarColor={'#f2f2f2'} >
      <View style={styles.mainViewContainer}>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyle} 
          
        />
        </View>
        <Text style={styles.textHeading}>Payment</Text>
        <Text style={styles.textHeadingNormal}>All transactions are secure and encrypted.</Text>

        <View>
          <Text style={styles.label}>Cardholder Name</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter Cardholder name"
          />
        </View>
        <View>
          <Text style={styles.label}>Credit Cart Number</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter 16-digit Number"
          maxLength={16}
          keyboardType="number-pad"
          />
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <View>
          <Text style={styles.label}>Expiry Date </Text>
          <TouchableOpacity  style={styles.inputdate} onPress={showDatePicker}>
         
          <Text style={{color:'silver'}}>{date==null?'MM/YY':moment(date).format('MM/YY')}</Text>
          </TouchableOpacity>
           <DateTimePickerModal
           
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
          </View>
          <View>
          <Text style={styles.label}>Cvc </Text>
          <TextInput
          style={styles.inputcvc}
          placeholder="Enter Cvc"
          maxLength={3}
          secureTextEntry={true}
          keyboardType='number-pad'
          />
          </View>
         
        </View>
        
        </View>
    </ScreenWrapper>
  );
}
