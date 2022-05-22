import React from 'react';
import {Text, View, Image,TextInput,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {login} from '../../Redux/Actions/Auth';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import styles from './styles';
export default function Dashboard(props) {

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
  const Login=()=>{
      dispatch(login())
  }
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
          placeholder="Username"
          placeholderTextColor={AppColors.btnBackgroundColorDark}
          />
          <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor={AppColors.btnBackgroundColorDark}
          />
          </View>

          <View>
            <TouchableOpacity onPress={()=>Login()} style={styles.loginBtn}>
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
       
      </View>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
    
  );
}
