import React from 'react';
import {ActivityIndicator, View,Text,TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import AppColors from '../../utills/AppColors';
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { width } from 'react-native-dimension';

export default function OrderModal({
isVisible,
hide,
}) {

  return (
    <Modal onBackdropPress={hide} isVisible={isVisible} backdropOpacity={0.4}>
      <View style = {styles.container}>
       <Icon
       name='check-bold'
       color={AppColors.btnBackgroundColorLight}
       size={width(25)}
       />
       <Text style={{width:width(80),fontFamily:'Quicksand-Bold',fontSize:25}}>Thank you for your order</Text>
       <TouchableOpacity onPress={hide}  style={styles.loginBtn}>
      <Text style={styles.btnText}>Take me Back</Text>
      
      </TouchableOpacity>
      </View>
    </Modal>
  );
}
