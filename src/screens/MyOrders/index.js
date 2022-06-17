import React, { useEffect, useState } from 'react';
import { Text, View,Image,TouchableOpacity, RefreshControl,FlatList } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import MyOrderItem from '../../components/MyOrderItem'
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import { addItem } from '../../Redux/Actions/Cart';
import {getAllData, getData} from '../../backend/Firebase'
import { setLoaderVisible } from '../../Redux/Actions/Config';
import firestore from '@react-native-firebase/firestore'
import ProductModal from '../../components/ProductsModal'
export default function Home(props) {
    const[show,setshow]=useState(false)
    const user = useSelector((state) => state.Auth.user);
  const[item,setItem]=useState([])
  const[isFetching,setIsFetching]=useState(false)
  useEffect(()=>{
    dispatch(setLoaderVisible(true))
      getItems()
},[])
const getItems=async()=>{
  console.log("jo")
   setIsFetching(true)
  let temp=[]
  const data=await getAllData('New Orders')
  if(data.success){
    data?.data?.map((item)=>{
        if(item.CustomerId==user?.id){
            temp.push(item)
        }

    })
  }
  setItem(temp)
  
  
  


  setIsFetching(false)
  dispatch(setLoaderVisible(false))
  
   
 

}

    // const item=[{id:1,img:'',name:'item 1',price:40,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    // {id:2,img:'',name:'item 2',price:50,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    // {id:3,img:'',name:'item 3',price:60,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    // {id:4,img:'',name:'item 4',price:70,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    // {id:5,img:'',name:'item 5',price:80,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh' },
    // {id:6,img:'',name:'item 6',price:90,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    // ]
  const cart = useSelector((state) => state.Cart.cart);
  const dispatch = useDispatch();
  const[data,setData]=useState([])
  const renderItem=({item,index})=>{
 console.log(item)
      return(
        <MyOrderItem
         onPress={()=>{
            setshow(true)
            setData(item.products)
        
        }}
         products={item.products}
         customerName={item.CustomerName}
         CustomerEmail={item.CustomerEmailBy}
         ammount={item.ammount}
         billingMethod={item.billingMethod}

           
        />
      )
  }
  return (
    <>
    <ScreenWrapper
   
    
    
    statusBarColor={'#f2f2f2'} >
      <View style={styles.mainViewContainer}>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyle} 
          
        />
        </View>
        <Text style={styles.textHeading}>My Orders</Text>
        <View style={styles.boxView}>
         <FlatList
         
         data={item}
         renderItem={renderItem}
         keyExtractor={(item, index) => index.toString()}
      
          
          refreshing={isFetching}
          onRefresh={getItems}
         />
        </View>
      </View>
    </ScreenWrapper>
    <ProductModal
    isVisible={show}
    hide={()=>setshow(false)}
    item={data}
    
    />
    </>
  );
}
