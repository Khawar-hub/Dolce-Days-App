import React, {Component, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader'
import SplashScreen from 'react-native-splash-screen'
const Stack = createStackNavigator();
export default function Routes() {
    const isLogin = useSelector(state => state.Auth.isLogin)
    useEffect(()=>{
      SplashScreen.hide();
    },[])
  return (
    <NavigationContainer>
      <Loader/>
      {!isLogin ? (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

