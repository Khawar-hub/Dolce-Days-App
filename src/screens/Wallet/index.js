import React from 'react';
import { Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
export default function Wallet(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'danger',
    });d
    dispatch(logout());
  };
  return (
    <ScreenWrapper  statusBarColor={'#f2f2f2'} >
      <View style={styles.mainViewContainer}>
       
      </View>
    </ScreenWrapper>
  );
}
