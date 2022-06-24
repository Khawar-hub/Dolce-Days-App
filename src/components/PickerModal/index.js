import React from 'react';
import {ActivityIndicator, View,Text,TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import AppColors from '../../utills/AppColors';
import styles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { height } from 'react-native-dimension';
export default function PickerModal({
    isVisible,
    hide,
    onDone,
    onDone2
}) {
  const user=useSelector((state)=>state.Auth.user)
  return (
    <Modal onBackdropPress={hide} isVisible={isVisible} backdropOpacity={0.4}>
      <View style = {styles.container}>
          <FontAwesome
          name='upload'
          size={24}
          />
          <Text style={{fontFamily:'Quicksand-Bold',marginTop:height(0.8)}}>Upload your picture</Text>
          <TouchableOpacity onPress={onDone}  style={[styles.loginBtn,{backgroundColor:user?.color}]}>
      <Text style={styles.btnText}>Upload</Text>
      
      </TouchableOpacity>
      <TouchableOpacity onPress={onDone2} style={[styles.loginBtn,{backgroundColor:user?.color}]}>
      <Text style={styles.btnText}>Take Picture</Text>
      
      </TouchableOpacity>
       
      </View>
    </Modal>
  );
}
