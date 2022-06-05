import React, { useEffect, useRef, useState } from 'react';
import { Text, View,Image,FlatList,TouchableOpacity,TextInput } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/Auth';
import styles from './styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import CheckBox from 'react-native-check-box';
import AppColors from '../../utills/AppColors';
import { height } from 'react-native-dimension';
import OrderModal from '../../components/OrderModal';
export default function Cart(props) {
 
  const cart = useSelector((state) => state.Cart.cart);
  const user=useSelector((state)=>state.Auth.user)
  const total = useSelector((state) => state.Cart.totalprice);
  const[checked,setIsChecked]=useState(false)
  const[checked2,setIsChecked2]=useState(false)
  const[show,setshow]=useState(false)
  const dispatch = useDispatch();
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef()
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
          onSubmitEditing={() => ref1.current.focus()}
              blurOnSubmit={false}
              returnKeyLabel={'Next'}
          
          />
        </View>
        <View>
          <Text style={styles.label}>Credit Cart Number</Text>
          <TextInput
          style={styles.input}
          ref={ref1}
          onSubmitEditing={() => ref2.current.focus()}
          blurOnSubmit={false}
          returnKeyLabel={'Next'}
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
          ref={ref2}
          style={styles.inputcvc}
          placeholder="Enter Cvc"
          maxLength={3}
          secureTextEntry={true}
          keyboardType='number-pad'
          />
          </View>
         
        </View>
        <View style={styles.checkBoxRow}>
        <CheckBox
       uncheckedCheckBoxColor={AppColors.btnBackgroundColorLight}
        isChecked={checked}
        onClick={()=>{
          if(checked){
            setIsChecked(false)
          }else{
          setIsChecked(true)}
        }}
        checkedCheckBoxColor={AppColors.btnBackgroundColorLight}
        style={{marginTop:height(1)}}
        />
        <Text style={styles.checkBoxText}>Save my credit card Information</Text>
        </View>
        <Text style={styles.text2}>Or Pay with Wallet Balance</Text>
        <View style={styles.paymentView}>
          <TouchableOpacity onPress={()=>{
            if(checked2){
              setIsChecked2(false)
            }else
            setIsChecked2(true)

            }} style={styles.checkbox}>
              {checked2?
            <View style={styles.checkbox2}>

            </View>:null}

          </TouchableOpacity>
          <Text style={styles.checkBoxText2}>
            Pay with Wallet Balance : AED {user?.wallet}
          </Text>

        </View>
        <View style={styles.infoView}>
        <Text style={styles.info}>
          To add more credit to your wallet please contact your organiztion +971 xxx xxx xxx
        </Text>
        </View>

        </View>
          
      <TouchableOpacity onPress={()=>setshow(true)}  style={styles.loginBtn}>
      <Text style={styles.btnText}>Place Your Order</Text>
      
      </TouchableOpacity>
      <OrderModal
      isVisible={show}
      hide={()=>setshow(false)}
      />
    </ScreenWrapper>
  );
}
