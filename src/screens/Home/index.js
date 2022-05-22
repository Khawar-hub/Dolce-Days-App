import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
export default function Home(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'danger',
    });
    dispatch(logout());
  };
  return (
    <ScreenWrapper  statusBarColor={'#f2f2f2'} >
      <View style={styles.mainViewContainer}>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyle}
          
        />
        </View>
        <Text style={styles.textHeading}>Menu</Text>
        <View style={styles.boxView}>
        <TouchableOpacity 
        onPress={()=>{
          props.navigation.navigate('Detail',{
            name:'Coffee'
          })
        }} 
        style={styles.box}>
          <Image
           source={require('../../assets/images/logo.png')}
           resizeMode="cover"
           style={styles.boxImage}
          />
           <Text style={styles.textHeading2}>Coffee</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=>{
          props.navigation.navigate('Detail',{
            name:'Tea'
          })
        }} 
         style={styles.box}>
          <Image
           source={require('../../assets/images/logo.png')}
           resizeMode="cover"
           style={styles.boxImage}
          />
           <Text style={styles.textHeading2}>Tea</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=>{
          props.navigation.navigate('Detail',{
            name:'Snacks'
          })
        }} 
         style={styles.box}>
          <Image
           source={require('../../assets/images/logo.png')}
           resizeMode="cover"
           style={styles.boxImage}
          />
           <Text style={styles.textHeading2}>Snacks</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=>{
          props.navigation.navigate('Detail',{
            name:'Dessert'
          })
        }} 
         style={styles.box}>
          <Image
           source={require('../../assets/images/logo.png')}
           resizeMode="cover"
           style={styles.boxImage}
          />
           <Text style={styles.textHeading2}>Dessert</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
