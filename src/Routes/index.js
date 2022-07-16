import React, {Component, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import ChangeOrganization from '../screens/ChangeOrganization'
import Dashboard from '../screens/Dashboard';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader'
import SplashScreen from 'react-native-splash-screen'
import BottomTab from './BottomTab';
import auth from '@react-native-firebase/auth';
import { getData } from '../backend/Firebase';
import { login } from '../Redux/Actions/Auth';

const Stack = createStackNavigator();


export default function Routes() {
  const isLogin = useSelector(state => state.Auth.isLogin)
  const dispatch=useDispatch()
  useEffect(()=>{
   handleLogin()
  },[])
  const handleLogin = async () => {
    let user = auth()?.currentUser;
    if (user) {
     console.log(user)
     const res= await getData('Users',auth().currentUser?.uid)
      
      const resp= await getData('Organizations',res.data?.OrgId)
       
       if(resp.data){
        
      
          dispatch(login({...res.data,...resp.data}))
    
          SplashScreen.hide()
       }else{
        SplashScreen.hide()
       }
     
  }
  SplashScreen.hide();}
 
   
  return (
    <NavigationContainer>
      <Loader/>
      {!isLogin ? (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ChangeOrganization" component={ChangeOrganization} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={BottomTab} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

