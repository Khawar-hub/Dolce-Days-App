import React, {Component, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail'
import ItemDetail from '../screens/ItemDetail'


const Stack = createStackNavigator();


export default function HomeStack() {

   
  return (
  
  
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
     
   
  );
}

