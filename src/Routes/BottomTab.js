import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import React from 'react';
import AppColors from '../utills/AppColors';
import styles from './styles';
import Home from '../screens/Home'
import MaterialIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons2 from 'react-native-vector-icons/EvilIcons';
import MaterialIcons3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { width } from 'react-native-dimension';
import Wallet from '../screens/Wallet'
import { CardStyleInterpolators } from '@react-navigation/stack';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import HomeStack from './HomeStack';
const Tab = createBottomTabNavigator();

const  BottomTab=()=> {
  
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarActiveTintColor:'#333333',
          tabBarInactiveTintColor: AppColors.gray,
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarHideOnKeyboard: true,
        }}
        >
        <Tab.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{
            tabBarLabel: 'Menu',
            tabBarLabelStyle:{
               fontSize:12,
               fontFamily:'Quicksand-Bold',
              
            },
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="cup" color={color} size={width(6)} />
            ),
          }}
        />
         <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: 'Wallet',
            tabBarLabelStyle:{
               fontSize:12,
               fontFamily:'Quicksand-Bold',
              
            },
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="wallet" color={color} size={width(6)} />
            ),
          }}
        />
         <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle:{
               fontSize:12,
               fontFamily:'Quicksand-Bold',
              
            },
            tabBarIcon: ({color, size}) => (
              <MaterialIcons2 name="cart" color={color} size={width(8)} />
            ),
          }}
        />
         <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle:{
               fontSize:12,
               fontFamily:'Quicksand-Bold',
              
            },
            tabBarIcon: ({color, size}) => (
              <MaterialIcons3 name="account-outline" color={color} size={width(8)} />
            ),
          }}
        />
      

      
        
      
       
      </Tab.Navigator>
    );
  }
  export default BottomTab;
   