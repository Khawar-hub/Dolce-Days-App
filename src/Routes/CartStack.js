import React, {Component, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart';
import Payment from '../screens/PaymentScreen'

const Stack = createStackNavigator();


export default function CartStack() {

   
  return (
  
  
        <Stack.Navigator initialRouteName="Cart" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Payment" component={Payment} />
         
        

        </Stack.Navigator>
     
   
  );
}

