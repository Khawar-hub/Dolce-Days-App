import React, { useEffect, useRef, useState } from 'react';
import { Text, View,Image,FlatList,TouchableOpacity,TextInput } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../Redux/Actions/Auth';
import styles from './styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import CheckBox from 'react-native-check-box';
import AppColors from '../../utills/AppColors';
import { height, width } from 'react-native-dimension';
import OrderModal from '../../components/OrderModal';
import SimpleToast from 'react-native-simple-toast';
import stripe from 'tipsi-stripe'
import { setLoaderVisible } from '../../Redux/Actions/Config';
import { getData, payWithStripeCard, saveCard, saveData } from '../../backend/Firebase';
import { emptyCart } from '../../Redux/Actions/Cart';
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth'
stripe.setOptions({
  publishableKey: 'pk_test_51L8zqVJe12k0EsGWV7nZI4Bx4GWEOnuP0L0BDRCqlrEgfIf53uzA0leAa2tbYqoRq65LgsJGy6QVf0Pq34pUo3hx00SUs656iO',
  merchantId: 'MERCHANT_ID', // Optional
  androidPayMode: 'test', // Android only
})
export default function Cart(props) {
  useEffect(async()=>{
    if(await AsyncStorage.getItem('payType')=='wallet'){
      setIsChecked2(true)
    }
   const check=JSON.parse(await AsyncStorage.getItem('check'))
   const cardDetail=JSON.parse(await AsyncStorage.getItem('cardDetail'))
   console.log(check,cardDetail)
   if(check){
    setIsChecked(true)
    setCardName(cardDetail.cardName)
    setCardNumber(cardDetail?.cardNumber)
    setExpiry(cardDetail?.expiry)
    setCvv(cardDetail?.cvv)
   }else{
    setIsChecked(false)
   }

  },[])
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
    if(moment(date).isAfter(new Date())){
      setExpiry(date)
      hideDatePicker();
    }else{
      alert('Invalid Expiry date')
     
    }
  
  };
const [cardName,setCardName]=useState(null)
const[cardNumber,setCardNumber]=useState(null)
const[expiry,setExpiry]=useState(null)
const[cvv,setCvv]=useState(null)
  const AddPayment = async () => {
    if (!cardName) {
      SimpleToast.show("Enter card name ")
      return;
    }
    if (!cardNumber) {
     SimpleToast.show('Enter 16 digit card number')
      return;
    }
    if (cardNumber?.length < 16) {
      SimpleToast.show('Please enter valid card number');
      return;
    }
    if (!expiry) {
      SimpleToast.show("Enter expiry date")
      return;
    }
    if (!cvv) {
      SimpleToast.show("Enter Cvv code")
      return;
    }
    if (cvv?.length < 3) {
      SimpleToast.show("Enter valid cvv code i-e xxx")
      return;
    }
    if(await AsyncStorage.getItem('payType')=='wallet'&&user?.wallet<total){
  
        SimpleToast.show('Insufficient balance in wallet',2)
     
       return;
    }
    dispatch(setLoaderVisible(true))
    try {
      const token = await stripe.createTokenWithCard({
        name: cardName,
        number: cardNumber,
        expMonth: parseInt(moment(expiry).format('MM')),
        expYear: parseInt(moment(expiry).format('YY')),
        cvc: cvv,
      });
      if (token) {
        console.log(token);
        const res = await saveCard({
          uid: user?.id,
          email: user?.email,
          token: token?.tokenId,
        });
        if (res?.success) {
          let temp = [];
          temp = user?.card ?? [];
          temp.push(res?.card);
          console.log(temp,'======');
          SimpleToast.show(res.message)
          dispatch(
            login({
              ...user,
              card: temp,
              stripeCustomer: res?.stripeCustomer,
            }),
          );
          console.log(res?.stripeCustomer, 'customer');
          await payWithStripeCard({
            amount:total,
            currency:'usd',
            token:user?.card[0].id,
            customer:user?.card[0].customer,
            

          
          
          })
          const _id = firestore().collection('Random').doc().id;
          await saveData('New Orders',_id,{
            oid:_id,
            CustomerId:user?.id,
            Organization:user?.OrgName,
            OrganizationId:user?.OrgId,
            CustomerEmailBy:user?.UserEmail,
            CustomerName:user?.UserName,
            products:cart,
            ammount:total,
            billingMethod:'VISA',
            status:'Unpaid',
            createdAt:moment().valueOf()
          })
          if(await AsyncStorage.getItem('payType')=='wallet'){
            const data=await getData('Users',auth().currentUser.uid)
            if(data.success){
              let newWallet=data?.data?.wallet-total
              await saveData('Users',auth().currentUser.uid,{
                wallet :newWallet
              })
              const newData=await getData("Users",auth().currentUser.uid)

            
              dispatch(login({...newData.data,color:user?.color}))
            }
          }
          setshow(true)
          dispatch(emptyCart())
          SimpleToast.show("Order Placed",3)
          props.navigation.goBack();
        
        } else {
          console.log(res?.message.Error);
          SimpleToast.show("Invalid Card",2)
        }
        console.log(res);
        dispatch(setLoaderVisible(false))
      } else {
        SimpleToast.show("Invalid Card",2)
        dispatch(setLoaderVisible(false))
      }
    } catch (error) {
      console.log(error);
      SimpleToast.show("Invalid Card",2)
      dispatch(setLoaderVisible(false))
    }
  };
  return (
    <ScreenWrapper statusBarColor={'#f2f2f2'} >
      <View style={styles.mainViewContainer}>
       

      <View style={styles.imageView}>
        <Image
          source={{uri:user?.OrgLogo}}
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
         
              onChangeText={(val)=>setCardName(val)}
              value={cardName}
          
          />
        </View>
        <View>
          <Text style={styles.label}>Credit Cart Number</Text>
          <TextInput
          style={styles.input}
          ref={ref1}
        
          placeholder="Enter 16-digit Number"
          maxLength={16}
          keyboardType="numbers-and-punctuation"
          onChangeText={(val)=>setCardNumber(val)}
          value={cardNumber}
          />
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <View>
          <Text style={styles.label}>Expiry Date </Text>
          <TouchableOpacity  style={styles.inputdate} onPress={showDatePicker}>
         
          <Text style={{color:'silver'}}>{expiry==null?'MM/YY':moment(expiry).format('MM/YY')}</Text>
          </TouchableOpacity>
           <DateTimePickerModal
           minimumDate={new Date()}
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
         value={cvv}
         keyboardType="numbers-and-punctuation"
          onChangeText={(val)=>setCvv(val)}
          />
          </View>
         
        </View>
        <View style={styles.checkBoxRow}>
        <CheckBox
       uncheckedCheckBoxColor={AppColors.btnBackgroundColorLight}
        isChecked={checked}
        onClick={async()=>{
          if(checked){
            let flag=false
            setIsChecked(false)
            await AsyncStorage.removeItem('cardDetail')
            await AsyncStorage.setItem('check',JSON.stringify(flag))
          }else{
            if (!cardName) {
              SimpleToast.show("Enter card name ")
              return;
            }
            if (!cardNumber) {
             SimpleToast.show('Enter 16 digit card number')
              return;
            }
           
            if (!expiry) {
              SimpleToast.show("Enter expiry date")
              return;
            }
            if (!cvv) {
              SimpleToast.show("Enter Cvv code")
              return;
            }else{
          setIsChecked(true)
          let cardData={
            cardName,
            cardNumber,
            expiry,
            cvv

          }
          let flag=true
          await AsyncStorage.setItem('check',JSON.stringify(flag))
          await AsyncStorage.setItem('cardDetail',JSON.stringify(cardData))
        
        }}
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
            Pay with Wallet Balance : AED {user?.UserWallet}
          </Text>
        {console.log(user?.wallet)}
        </View>
        <View style={styles.infoView}>
        <Text style={styles.info}>
          To add more credit to your wallet please contact your organiztion +971 xxx xxx xxx
        </Text>
        </View>

        </View>
          
      <TouchableOpacity onPress={AddPayment}  style={[styles.loginBtn,{backgroundColor:user?.OrgColor}]}>
      <Text style={styles.btnText}>Place Your Order</Text>
      
      </TouchableOpacity>
      <OrderModal
      isVisible={show}
      hide={()=>setshow(false)}
      />
    </ScreenWrapper>
  );
}
