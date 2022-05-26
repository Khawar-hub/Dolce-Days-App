import React, { useEffect, useState } from 'react';
import { Text, View,Image,FlatList,TouchableOpacity ,Platform} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import Item2 from '../../components/Item2'
import { height, width } from 'react-native-dimension';
import MaterialIcons2 from 'react-native-vector-icons/EvilIcons';
import { removeItem, setAddQuantity ,setRemoveQuantity} from '../../Redux/Actions/Cart';
export default function Cart(props) {
 
  const cart = useSelector((state) => state.Cart.cart);
  
  const total = useSelector((state) => state.Cart.totalprice);
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
      <Item2
        name={item.name}
        price={item.price}
        des={item.des}
        img={item.img}
        quantity={item?.quantity}
        onPressAdd={()=>{
          console.log(index);
          dispatch(setAddQuantity({index:index,price:item.price,quantity:item.quantity+1}))
        }}
        onPressRemove={()=>{
          if(item.quantity==1){

          }else
          dispatch(setRemoveQuantity({index:index,price:item.price,quantity:item.quantity-1}))
        }}
        removeItem={()=>{
          dispatch(removeItem(item))
        }}
      />
    )
}
  return (
    <ScreenWrapper statusBarColor={'#f2f2f2'} >
      <View style={styles.mainViewContainer}>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyle} 
          
        />
        </View>
        <Text style={styles.textHeading}>Cart</Text>
        {/* <View style={styles.boxView}> */}
         <FlatList
         data={cart}
         renderItem={renderItem}
         keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
         
          ListEmptyComponent={()=>{
            return(
              <View>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:height(10)}}>Cart Empty</Text>
                </View>
            )
          }}
         />
        {/* </View> */}
       {/*  */}
        
      </View>
      <View style={styles.quantity}>
      <Text style={styles.label}>Total:</Text>
     <Text style={styles.label}>AED {total}</Text>
      
      
      </View>
      
      <TouchableOpacity onPress={()=>props.navigation.navigate('Payment')}  style={styles.loginBtn}>
      <Text style={styles.btnText}>Proceed to Checkout</Text>
      
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
