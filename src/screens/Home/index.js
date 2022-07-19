import React, { useState,useEffect } from 'react';
import { Text, View,Image,TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout,setIs } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import {getAllData, getData} from '../../backend/Firebase'
import SimpleToast from 'react-native-simple-toast';
import {setLoaderVisible} from '../../Redux/Actions/Config';
export default function Home(props) {
  const user = useSelector((state) => state.Auth.user);
  console.log(user)
  const[menu,setMenu]=useState([])
  useEffect(()=>{
     getMenu()
  },[])
  const[isFetching,setIsFetching]=useState(false)
  const getMenu=async()=>{ 
    setIsFetching(true)
         let temp=[]
        dispatch(setLoaderVisible(true))
        for(let i=0;i<user?.Categories?.length;i++){
          const element=user?.Categories[i]
          const data=await getData('Categories',element)
          if(data.data){
             temp.push(data.data)
          }
        }
       
        setMenu(temp)
        setIsFetching(false)
       dispatch(setLoaderVisible(false))
      
          

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
  const renderItem=({item,index})=>{
 
    return(
      <TouchableOpacity
        key={index} 
        onPress={()=>{
          props.navigation.navigate('Detail',{products:item.Products})
        }} 
        style={styles.box}>
          <ImageBackground
           source={{uri:item.CatImg}}
           resizeMode="cover"
           style={styles.boxImage}
          />
           <Text style={styles.textHeading2}>{item.CatName}</Text>
        </TouchableOpacity>
    )
}
  return (
    <ScreenWrapper  statusBarColor={'#f2f2f2'}  >
      <View style={styles.mainViewContainer}>
    
        <ImageBackground
          source={{uri:user?.OrgLogo}}
          resizeMode="cover"
          style={styles.imageStyle}
          
        />
        
        <Text style={styles.textHeading}>Menu</Text>
     
        <FlatList
         
         data={menu}
         renderItem={renderItem}
         keyExtractor={(item, index) => index.toString()}
      
          
          refreshing={isFetching}
          onRefresh={getMenu}
         />

          
         
       
      </View>
    </ScreenWrapper>
  );
}
