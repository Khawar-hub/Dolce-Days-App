import React, {Component, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import PaymentInformation from '../screens/PaymentInformation'
import MyWallet from '../screens/MyWallet'

const Stack = createStackNavigator();


export default function ProfileStack() {

   
  return (
  
  
        <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{headerShown:false}}>
          <Stack.Screen name="ProfileScreen" component={Profile} />
          <Stack.Screen name="PaymentInformation" component={PaymentInformation} />
          <Stack.Screen name="MyWallet" component={MyWallet} />
         
        

        </Stack.Navigator>
     
   
  );
}

