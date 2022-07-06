import React, { useState } from 'react';
import { Text, View ,Image,TouchableOpacity, ActivityIndicator} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { login, logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import PickerModal from '../../components/PickerModal';
import { height, width } from 'react-native-dimension';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {uploadImage,saveData, getData} from '../../backend/Firebase'
import { setLoaderVisible } from '../../Redux/Actions/Config';
import SimpleToast from 'react-native-simple-toast';
export default function Profile(props) {
  const user = useSelector((state) => state.Auth.user);

  const[avatarSource,setAvatarSource]=useState(null)
  const dispatch = useDispatch();
  const [imagePickerModal, setImagePickerModal] = useState(false);
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'danger',
    });
    dispatch(logout());
    auth().signOut()
  };
  const[loader,setloader]=useState(false)
  const uploadImages = async (path) => {
    
  
  setloader(true)
   
    const _id = firestore().collection('Random').doc().id;
    console.log(_id,'1')
    setTimeout(() => {
      SimpleToast.show("High quality images may take some time to upload...",2)
    }, 3000);
    let coverPhoto = await uploadImage(
       path,
      `images/Profilepics/${_id}`,
    );
    
    console.log(coverPhoto,'2')
   
    await saveData('Users', user.id, {profilePic: coverPhoto});
    console.log('3')
   const userData=await getData('Users',user?.id)
   console.log(userData)
   let obj={
    ...user,
    ...userData.data
   }
   dispatch(login(obj))
    SimpleToast.show("Profile photo Updated",2)
    setAvatarSource(null)
    setloader(false)
   
  };

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

      if(response){
        uploadImages(response.path)
      }
    
  
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

      if(response){
        uploadImages(response.path)
      }
    
    
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
        <View style={styles.imageContainer}>
                {loader?
                <ActivityIndicator size={16} color={AppColors.btnBackgroundColorDark}/>:
                <>
                <Image
                  source={{uri: avatarSource?.uri?avatarSource?.uri:user?.profilePic?user?.profilePic:'https://firebasestorage.googleapis.com/v0/b/magicprogress-2cf22.appspot.com/o/AppImages%2Fuser.png?alt=media&token=8de75638-4dce-4723-9f0e-2f9777e11c0d'}}
                  style={styles.uploadedImage}
                  resizeMode="cover"
                />
                <MaterialCommunityIcons
                  onPress={() => setImagePickerModal(true)}
                  name="pencil-circle"
                  style={{position: 'absolute', right: 0, bottom: 5}}
                  color={"#fff"}
                  size={width(8.5)}
                />
                </>
                }
              </View>
              <View style={styles.nameView}>
                  <Text style={styles.textHeading}>{user?.UserUsername}</Text>
                  <Text style={styles.textHeading}>Office {user?.UserOfficeNumber}</Text>
               
              </View>
              <TouchableOpacity onPress={()=>props.navigation.navigate("MyOrders")}  style={styles.feild}>
                <Text style={styles.label}>My Orders</Text>
                <Entypo
                name='chevron-right'
                size={20}
                />


              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>props.navigation.navigate("MyWallet")} style={styles.feild}>
                <Text style={styles.label}>My Wallet Balance</Text>
                <Entypo
                name='chevron-right'
                size={20}
                />


              </TouchableOpacity>
              <TouchableOpacity onPress={()=>props.navigation.navigate("PaymentInformation")} style={styles.feild}>
                <Text style={styles.label}>Payment Information</Text>
                <Entypo
                name='chevron-right'
                size={20}
                />


              </TouchableOpacity>
              <View style={styles.divider}></View>
              <TouchableOpacity onPress={logoutMethod} style={styles.feild}>
                <Text style={styles.label}>Logout</Text>
                <Entypo
                name='chevron-right'
                size={20}
                />


              </TouchableOpacity>
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
