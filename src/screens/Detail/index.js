import React from 'react';
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
export default function Home({props,route}) {
    const item=[{img:'',name:'item 1',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 2',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 3',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 4',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 5',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {img:'',name:'item 6',price:"00.00",des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
]
    const {name}=route?.params
  const user = useSelector((state) => state.Auth.user);
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
        <Item
          name={item.name}
          price={item.price}
          des={item.des}
          img={item.img}
           
        />
      )
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
        <Text style={styles.textHeading}>{name}</Text>
        <View style={styles.boxView}>
         <FlatList
         data={item}
         renderItem={renderItem}
         keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
         />
        </View>
      </View>
    </ScreenWrapper>
  );
}
