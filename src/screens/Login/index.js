import React, { useRef, useState ,useEffect} from 'react';
import {Text, View, Image,TextInput,TouchableWithoutFeedback,TouchableOpacity,StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import auth from '@react-native-firebase/auth'
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import { getAllData, getData, signIn } from '../../backend/Firebase';
import Button from '../../components/Button';
import {login} from '../../Redux/Actions/Auth';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import SimpleToast from 'react-native-simple-toast';
import RNPickerSelect from 'react-native-picker-select';
export default function Dashboard(props) {
  
  const[email,setEmail]=useState(null)
  const[password,setPassword]=useState(null)
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const [organization, setOrganization] = useState([]);
  const [country, setCountry] = useState([]);
  const [color, setColor] = useState(null);
  const [countryselect, setCountrySelect] = useState([]);
  const [org, setOrg] = useState(null);
  const[phone,setPhone]=useState(null)
  const[emails,setEmails]=useState(null)
  useEffect(() => {
    getOrganization();
  }, []);
  const getOrganization = async () => {
    const response = await getAllData('Organizations');
    

    let temp = [];
    let temp2 = [];
    response?.data?.map((item) => {
      temp.push({label: item?.OrgName, value: item?.id, color: item?.OrgColor});
    });
   
    setCountry(temp2);
    setOrganization(temp);
  };
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
    console.log(props?.route?.params,"000000000000")
 
  
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
    }
   
  };
  const Login=async()=>{

    try{
    
     dispatch(setLoaderVisible(true))
    const response=  await signIn(email,password)
 
    if(response.success){
      const res= await getData('Users',auth().currentUser?.uid)
      
      const resp= await getData('Organizations',res.data?.OrgId)
       
       if(resp.data){
        
      
          dispatch(login({...res.data,...resp.data}))
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
  const PickerIcon = () => {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          borderTopWidth: 8,
          borderTopColor: 'gray',
          borderRightWidth: 10,
          borderRightColor: 'transparent',
          borderLeftWidth: 10,
          borderLeftColor: 'transparent',
          width: 1,
          height: 1,
        }}
      />
    );
  };
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

          
          <Text style={styles.phoneStyle}>{phone?phone:"+971 xxx xxx xxx"}</Text>
                  
          <Text style={styles.emailStyle}>{emails?emails:"email@organization.com"}</Text>
          
          <View style={styles.imageViewSmall}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyleSmall}
          
        />
        </View>

        <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholderTextColor="red"
              placeholder={{
                label: 'Get Your Access',
                value: '',
             
                
               
              }}
              
              onValueChange={(val) => {}}
              onDonePress={async(val) => {
                const selectedOrg = organization?.find(
                  (item) => item?.id == val,
                );
                console.log(selectedOrg);
                const resp= await getData('Organizations',selectedOrg?.value)
                setEmails(resp?.data?.OrgEmail)
                setPhone(resp?.data?.OrgPhone)
                setOrg(selectedOrg?.value);
                setColor(selectedOrg?.color);
              }}
              items={organization}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 20,
                  right: 16,
                },
              }}
             
            />
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
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginVertical: 4,
  
    textAlign:'center',
 
    width: '50%',
  
    backgroundColor:'transparent',
    fontSize: 12,
     alignSelf:'center',
    // color: AppColors.btnBackgroundColorDark,
    borderRadius: 2,


  },
  inputAndroid: {
    marginVertical: 4,
  
    textAlign:'center',
 
    width: '50%',
  
    backgroundColor:'transparent',
    fontSize: 12,
     alignSelf:'center',
    // color: AppColors.btnBackgroundColorDark,
    borderRadius: 2,
  },
 
});