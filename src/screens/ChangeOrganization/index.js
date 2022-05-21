import React from 'react';
import styles from './styles';
import {Text, View, Image,TextInput,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {login} from '../../Redux/Actions/Auth';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';

export default function ChangeOrganization(props) {
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
        
       
   
         

         
          <View style={styles.imageViewSmall}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyleSmall}
          
        />
        </View>

        

       
      </View>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
    
  );
}
