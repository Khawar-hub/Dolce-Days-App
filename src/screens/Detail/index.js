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
import { addItem } from '../../Redux/Actions/Cart';
export default function Home(props) {
 
    const item=[{id:1,img:'',name:'item 1',price:0,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {id:2,img:'',name:'item 2',price:50,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {id:3,img:'',name:'item 3',price:60,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {id:4,img:'',name:'item 4',price:70,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    {id:5,img:'',name:'item 5',price:80,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh' },
    {id:6,img:'',name:'item 6',price:90,des:'lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh lorem ipsum dolor sir amet, consecterur upsdo sjdh'},
    ]
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
        <Item
        cartPress={()=>{
          dispatch(addItem([...cart,{...item,quantity:1}]))}
        }
        onPress={()=>props.navigation.navigate("ItemDetail",{
         data: item
        })}
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
        <Text style={styles.textHeading}>{props.route?.params.name}</Text>
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
