import React, { useRef, useState } from 'react';
import {Text, View, Image,TextInput,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import { height } from 'react-native-dimension';
import auth from '@react-native-firebase/auth'
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import { getData, signIn } from '../../backend/Firebase';
import Button from '../../components/Button';
import {login} from '../../Redux/Actions/Auth';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import SimpleToast from 'react-native-simple-toast';
export default function Dashboard(props) {
  const[email,setEmail]=useState(null)
  const[password,setPassword]=useState(null)
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const loginMethod = () => {
    dispatch(setLoaderVisible(true));
    setTimeout(() => {
      showMessage({
        message: 'Success',
        description: 'Succfully logged In',
        type: 'success',
      });
      dispatch(setLoaderVisible(false));
      dispatch(login({userName: 'John Doe'}));
    }, 1500);
  };
  const [validation, setValidation] = React.useState({
    isValidEmail: true,
    isValidPassword: true,
    isValidPasswordLength: true,
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const handleValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    if (reg.test(val)) {
      return true;
    } else {
      return false;
    }
  };
  const validateData = () => {
    if(props.route?.params){
  
    if (!handleValidEmail(email) || email === '') {
      setValidation({
        ...validation,
        isValidEmail: false,
      });
      return;
    } else if (password === '') {
      setValidation({
        ...validation,
        isValidPassword: false,
      });
      return;
    } else if (password.length < 6) {
      console.log('hi');
      setValidation({
        ...validation,
        isValidPasswordLength: false,
      });
      return;
    } else {
      Login();
    }}
    else{
      SimpleToast.show("Please Select Organization",2)
    }
  };
  const Login=async()=>{

    try{
     dispatch(setLoaderVisible(true))
    const response=  await signIn(email,password)
 
    if(response.success){
        const res= await getData('Users',auth().currentUser.uid)
 
        
        if(res.data.organization==props.route?.params?.organization){
          dispatch(login(res.data))
          dispatch(setLoaderVisible(false))
        }
        else{
          SimpleToast.show("User not found in Selected Organization",2) 
          dispatch(setLoaderVisible(false))
      
        }

    }else{
      SimpleToast.show('No User Found',2)
      dispatch(setLoaderVisible(false))
    }}
    catch(e){
      console.log(e.message)

    }
  }
  const ref1=useRef()
  return (

    <ScreenWrapper  statusBarColor={'#f2f2f2'} barStyle="dark-content">
      <TouchableWithoutFeedback >
      <View style={styles.mainViewContainer}>
        <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyle}
          
        />
        </View>
        <Text style={styles.textHeading}>Log in</Text>
        <View style={styles.textView}>
          <Text style={styles.normalText}>Use the username and password</Text>
          <Text style={styles.normalText}>
            provided by your organization to log in.
          </Text>
        </View>
   
         <View style={styles.textInputView}>
          <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={AppColors.btnBackgroundColorDark}
          onSubmitEditing={() => ref1.current.focus()}
          blurOnSubmit={false}
          returnKeyLabel={'Next'}
          onChangeText={(val)=>{
            setEmail(val)
            setValidation({...validation, isValidEmail: true});
          }}
          />
          <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor={AppColors.btnBackgroundColorDark}
          ref={ref1}
          secureTextEntry={secureTextEntry}
          onChangeText={(val)=>{
            setPassword(val)
            setValidation({
              ...validation,
              isValidPassword: true,
              isValidPasswordLength: true,
            });
          }}
          />
          </View>

          <View>
            <TouchableOpacity onPress={()=>validateData()} style={styles.loginBtn}>
                <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider}>
            <View style={styles.dividerLine}></View>
            <Text style={styles.dividerText}>to get your access, contact</Text>
            <View style={styles.dividerLine}></View>

          </View>

          
          <Text style={styles.phoneStyle}>+971 xxx xxx xxx</Text>
                  
          <Text style={styles.emailStyle}>email@organization.com</Text>
          
          <View style={styles.imageViewSmall}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyleSmall}
          
        />
        </View>

        <Text onPress={()=>props.navigation.navigate('ChangeOrganization')} style={styles.changeorganizationStyle}>Change organization</Text>
        <View style={styles.underline}></View>
        <View style={{marginTop:height(2)}}>
        {!validation.isValidEmail ? (
            <Text style={styles.error}>Invalid Email</Text>
          ) : !validation.isValidPassword ? (
            <Text style={styles.error}>Enter Password</Text>
          ) : !validation.isValidPasswordLength ? (
            <Text style={styles.error}>
              Password must be greater than 6 characters
            </Text>
          ) : null}
        </View>
       
       
      </View>
     
      </TouchableWithoutFeedback>
     
    </ScreenWrapper>
    
  );
}
