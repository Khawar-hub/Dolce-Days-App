import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import React from 'react';
import AppColors from '../utills/AppColors';
import styles from './styles';
import Home from '../screens/Home'
import MaterialIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons2 from 'react-native-vector-icons/EvilIcons';
import MaterialIcons3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { height, width } from 'react-native-dimension';
import Wallet from '../screens/Wallet'
import { CardStyleInterpolators } from '@react-navigation/stack';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import HomeStack from './HomeStack';
import { useSelector } from 'react-redux';
import CartStack from './CartStack';
const Tab = createBottomTabNavigator();

const  BottomTab=()=> {
  const cart=useSelector((state)=>state.Cart.cart)
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
          name="CartStack"
          component={CartStack}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle:{
               fontSize:12,
               fontFamily:'Quicksand-Bold',
              
            },
            tabBarIcon: ({color, size}) => {
               return(
                 <>
                 {cart.length>0?
                 <View style={{zIndex:1,alignItems:'center',justifyContent:'center',position:'absolute',bottom:15,right:25,height:height(2),width:width(4),backgroundColor:AppColors.btnBackgroundColorDark,borderRadius:50}}>
                  <Text style={{color:'#fff'}}>{cart.length}</Text>
                 </View>:null}
              <MaterialIcons2 name="cart" color={color} size={width(8)} />
              </>
               )
          }
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
   