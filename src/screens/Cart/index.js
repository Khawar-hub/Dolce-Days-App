import React from 'react';
import { Text, View,Image,FlatList,TouchableOpacity } from 'react-native';
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
export default function Cart(props) {
 
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
  const renderItem=({item,index})=>{
    return(
      <Item2
        name={item.name}
        price={item.price}
        des={item.des}
        img={item.img}
         
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
        <View style={styles.boxView}>
         <FlatList
         data={[  {img:'',name:'item 2',price:"50.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
         {img:'',name:'item 3',price:"60.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'}]}
         renderItem={renderItem}
         keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
         contentContainerStyle={{marginTop:-height(10)}}
         style={{height:height(20)}}
          ListEmptyComponent={()=>{
            return(
              <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Cart Empty</Text>
                </View>
            )
          }}
         />
        </View>
       
        
      </View>
      <View style={styles.quantity}>
      <Text style={styles.label}>Total:</Text>
     <Text style={styles.label}>AED 471.00</Text>
      
      
      </View>
      
      <TouchableOpacity  style={styles.loginBtn}>
      <Text style={styles.btnText}>Proceed to Checkout</Text>
      
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
