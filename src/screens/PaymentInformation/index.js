import React, { useEffect, useState } from 'react';
import { Text, View ,Image,TouchableOpacity} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import PickerModal from '../../components/PickerModal';
import { width } from 'react-native-dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Profile(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  useEffect(()=>{
      checkPayment()
  },[])
  const checkPayment=async()=>{
    if(await AsyncStorage.getItem('payType')=='apple'){
      setIsChecked(true)
    }
    else if(await AsyncStorage.getItem('payType')=='card'){
     setIsChecked2(true)
    }
    else{
      setIsChecked3(true)
    }
  }
  const [imagePickerModal, setImagePickerModal] = useState(false);
  const[checked,setIsChecked]=useState(false)
  const[checked2,setIsChecked2]=useState(false)
  const[checked3,setIsChecked3]=useState(false)
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'danger',
    });
    dispatch(logout());
  };
  const[avatarSource,setAvatarSource]=useState(null)
  const imageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      compressImageQuality: 0.2,
    }).then((response) => {
     console.log(response);
      setAvatarSource({
        uri:
           response.path,
        name: response.path.split('/').pop(),
        type: response.mime ?? '',
    });
    setImagePickerModal(false);
    });
  };
  const imageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      compressImageQuality: 0.2,
    }).then((response) => {
      setAvatarSource({
        uri:
        response.path,
     name: response.path.split('/').pop(),
     type: response.mime ?? '',
    });
      setImagePickerModal(false);
      
    });
  };
  return (
    <ScreenWrapper  statusBarColor={'#f2f2f2'} >
      <View style={styles.mainViewContainer}>
      <View style={styles.imageView}>
        <Image
          source={{uri:user?.OrgLogo}}
          resizeMode="cover"
          style={styles.imageStyle} 
          
        />
        </View>
       
              <View style={styles.nameView}>
                  <Text style={styles.textHeading}>Payment Information</Text>
                 
              </View>
              {/* <View style={styles.paymentView}>
                    <TouchableOpacity onPress={async()=>{
                        if(checked){
                        setIsChecked(false)
                        }else{
                        setIsChecked(true)
                        await AsyncStorage.setItem('payType','apple')
                        setIsChecked2(false)
                        setIsChecked3(false)
                        }

                        }} style={styles.checkbox}>
                        {checked?
                        <View style={styles.checkbox2}>

                        </View>:null}

                    </TouchableOpacity>
                    <FontAwesome
                    name='apple'
                    size={20}
                    style={{marginLeft:width(2)}}
                    />
                    <Text style={{fontWeight:'bold',fontSize:19,marginLeft:width(1)}}>
                        Pay 
                    </Text>

        </View>

        <View style={styles.paymentView}>
                    <TouchableOpacity onPress={async()=>{
                        if(checked2){
                        setIsChecked2(false)
                        }else
                        {
                          await AsyncStorage.setItem('payType','card')
                            setIsChecked(false)
                            setIsChecked2(true)
                            setIsChecked3(false)
                        }

                        }} style={styles.checkbox}>
                        {checked2?
                        <View style={styles.checkbox2}>

                        </View>:null}

                    </TouchableOpacity>
                   
                    <Text style={styles.checkBoxText2}>
                        Pay with Card Ending : ***
                    </Text> */}

       

        <View style={styles.paymentView}>
                    <TouchableOpacity onPress={async()=>{
                        if(checked3){
                        setIsChecked3(false)
                        }else
                        {
                            setIsChecked(false)
                            setIsChecked2(false)
                            setIsChecked3(true)
                             await AsyncStorage.setItem('payType','wallet')
                        }

                        }} style={styles.checkbox}>
                        {checked3?
                        <View style={styles.checkbox2}>

                        </View>:null}

                    </TouchableOpacity>
                    <Text style={styles.checkBoxText2}>
                        Pay with Wallet Balance : AED {user?.UserWallet}
                    </Text>

        </View>
        <View style={styles.infoView}>
        <Text style={styles.info}>
          To add more credit to your wallet please contact your organiztion {user?.OrgPhone}
        </Text>
        </View>
        
        <View style={styles.btnView}>
                <TouchableOpacity onPress={()=>{
                  alert('Changes Saved!')
                  props.navigation.goBack()
                }} style={[styles.btnSmall,{backgroundColor:user?.OrgColor}]}>
                   <Text style={styles.btnSmallText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  props.navigation.goBack()
                }} style={[styles.btnSmall,{backgroundColor:user?.OrgColor}]}>
                <Text style={styles.btnSmallText}>Cancel</Text>
                </TouchableOpacity>

              </View>
            
              <View style={styles.imageView2}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imageStyle2} 
          
        />
        </View>
             
             
        
      </View>
      <PickerModal
      isVisible={imagePickerModal}
      hide={()=>setImagePickerModal(false)}
      onDone={imageFromGallery}
      onDone2={imageFromCamera}
      />
    </ScreenWrapper>
  );
}
