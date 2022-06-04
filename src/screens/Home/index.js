import React, { useState,useEffect } from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout,setIs } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import {getAllData} from '../../backend/Firebase'
import SimpleToast from 'react-native-simple-toast';
import {setLoaderVisible} from '../../Redux/Actions/Config';
export default function Home(props) {
  const user = useSelector((state) => state.Auth.user);
  const[menu,setMenu]=useState([])
  useEffect(()=>{
     getMenu()
  },[])
  const getMenu=async()=>{
        dispatch(setLoaderVisible(true))
        const res=await getAllData('Categories')
        if(res.success){
          setMenu(res.data)
          dispatch(setLoaderVisible(false))
        }else{
          SimpleToast.show('Something went wrong')
          dispatch(setLoaderVisible(false))
        }

  }
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
          {menu?.map((item)=>{
            return(

           <>
        <TouchableOpacity 
        onPress={()=>{
          props.navigation.navigate('Detail',item.name=="Coffee"?{
            name:'Coffee',products:item.products
          }:item.name=='Snacks'?{name:'Snacks',products:item.products}:item.name=="Tea"?{name:"Tea",products:item.products}:item.name=="Dessert"?{name:"Dessert",products:item.products}:{name:""}
          )
        }} 
        style={styles.box}>
          <Image
           source={require('../../assets/images/logo.png')}
           resizeMode="cover"
           style={styles.boxImage}
          />
           <Text style={styles.textHeading2}>{item.name}</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
        </>
         )

        })}
        </View>
      </View>
    </ScreenWrapper>
  );
}
