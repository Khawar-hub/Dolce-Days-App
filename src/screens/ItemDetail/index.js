import React, { useState } from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { FlatList } from 'react-native-gesture-handler';
import Item from '../../components/Item'
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import MaterialIcons2 from 'react-native-vector-icons/EvilIcons';
import { width } from 'react-native-dimension';
import { addItem } from '../../Redux/Actions/Cart';
export default function Home(props) {
    console.log(props.route?.params.data)
    const{name,price,des,img}=props.route?.params.data
    const item=[{img:'',name:'item 1',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 2',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 3',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 4',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 5',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 6',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
]
const[quantity,setQuantity]=useState(0)
    const [total,setTotal]=useState(0)
  const cart = useSelector((state) => state.Cart.cart);
  const dispatch = useDispatch();
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'danger',
    });
    dispatch(logout());
  };
  const increment=()=>{
 setQuantity(quantity+1)
 setTimeout(()=>{
  setTotal(price*quantity)
 },600)

  }
  const decrement=()=>{
    if(quantity==0){

    }
    else
    setQuantity(quantity-1)
    


  }
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
      <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>AED {price}</Text>

      </View>
      <View>
      <Text style={styles.label}>Description</Text>
      <Text style={styles.des}>{des}</Text>
      </View>
     
 
    
      </View>
      {/* <View style={styles.quantity}>
      <Text style={styles.label}>Quantity: {quantity}</Text>
      <View style={styles.incrementView}>
        <TouchableOpacity onPress={()=>{
           dispatch(setAddQuantity({index:index,quantity:item.quantity+1}))
        }} style={styles.increment1}>
          <Text style={styles.incrementText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          dispatch(setAddQuantity({index:index,quantity:item.quantity-1}))
        }} style={styles.increment2}>
        <Text style={styles.incrementText}>-</Text>
        </TouchableOpacity>

      </View>
      
      
      </View> */}
      
      <TouchableOpacity onPress={()=>{
        
          dispatch(addItem([...cart,{...props.route?.params.data,quantity:1}]))
        
      }}  style={styles.loginBtn}>
      <Text style={styles.btnText}>Add to Cart</Text>
      <MaterialIcons2 style={{marginLeft:width(2)}} name="cart" color={'#fff'} size={width(8)} />
      </TouchableOpacity>
      
    </ScreenWrapper>
  );
}
