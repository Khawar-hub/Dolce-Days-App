import React from 'react';
import {ActivityIndicator, View,Text,TouchableOpacity,FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import AppColors from '../../utills/AppColors';
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { width } from 'react-native-dimension';
import Item from '../Item'
export default function OrderModal({
isVisible,
hide,
item
}) {
    const renderItem=({item,index})=>{
 
        return(
          <Item
            check={false}
            name={item?.ProdName}
            price={parseInt(item?.ProdPrice)}
            des={item?.ProdDescription}
            img={item?.ProdLogo}
             
          />
        )
    }
  return (
    <Modal onBackdropPress={hide} isVisible={isVisible} backdropOpacity={0.4}>
      <View style = {styles.container}>
        <Text style={{fontWeight:'bold'}}>Products</Text>
      <FlatList
         
         data={item}
         renderItem={renderItem}
         keyExtractor={(item, index) => index.toString()}
      
          
        
         />
      </View>
    </Modal>
  );
}
