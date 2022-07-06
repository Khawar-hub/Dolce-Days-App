import React from 'react';
import styles from './styles';
import {Text, View, Image,TouchableOpacity,TextInput,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {login} from '../../Redux/Actions/Auth';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import RNPickerSelect from 'react-native-picker-select';
import { height } from 'react-native-dimension';
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function ChangeOrganization(props) {
  console.log(props)
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
    
      <View style={styles.mainViewContainer}>
        <View style={styles.imageView}>
        <Image
          source={{uri:user?.OrgLogo}}
          resizeMode="cover"
          style={styles.imageStyle}
          
        />
        </View>
        <View style={styles.pickerView}>
            <Fontisto
            name='wallet'
            size={60}
            color={AppColors.btnBackgroundColorLight}
            />
            <View style={styles.balanceView}>
            <Text style={styles.balanceText}>Wallet balance is:</Text>
            <Text  style={styles.balanceText}>AED {user?.UserWallet}</Text>
            </View>
           
      <View style={styles.infoView}>
        <Text style={styles.info}>
          To add more credit to your wallet 
        </Text>
        <Text style={styles.info}>
        please contact your 

        </Text >
        <Text style={styles.info}>
         organization +971 xxx xxx xxx

        </Text>
        </View>

     



        
        </View>
       
   
         

         
          <View style={styles.imageViewSmall}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyleSmall}
          
        />
        </View>

        

       
      </View>
  
    </ScreenWrapper>
    
  );
}
