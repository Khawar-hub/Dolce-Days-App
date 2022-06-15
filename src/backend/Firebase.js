import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import moment from 'moment';
import {Alert,PermissionsAndroid, Platform,} from 'react-native';
import Toast from 'react-native-simple-toast';
export async function uploadImage(uri, path) {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = storage().ref(path);
    const task = ref.put(blob);
    return new Promise((resolve, reject) => {
      task.on(
        'state_changed',
        () => {},
        (err) => {
          reject(err);
        },
        async () => {
          const url = await task.snapshot.ref.getDownloadURL();
          resolve(url);
        },
      );
    });
  } catch (err) {
    console.log('uploadImage error: ' + err.message);
  }
}
// export async function saveData(collection, doc, jsonObject) {
//   console.log(collection, doc, jsonObject);
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .set(jsonObject, {merge: true})
//     .then(() => {
//       success = true;
//     })
//     .catch(function (error) {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export async function addtoFavorite(collection, doc, eventid) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .update({
//       FavoriteEvents: firestore.FieldValue.arrayUnion(eventid),
//     })
//     .then(() => {
//       success = true;
//     })
//     .catch(() => {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export async function removefromFavorite(collection, doc, eventid) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .update({
//       FavoriteEvents: firestore.FieldValue.arrayRemove(eventid),
//     })
//     .then(() => {
//       success = true;
//     })
//     .catch(() => {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export async function addtoFavoriteBars(collection, doc, clubid) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .update({
//       FavoriteBars: firestore.FieldValue.arrayUnion(clubid),
//     })
//     .then(() => {
//       success = true;
//     })
//     .catch(() => {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export async function removefromFavoriteBars(collection, doc, clubid) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .update({
//       FavoriteBars: firestore.FieldValue.arrayRemove(clubid),
//     })
//     .then(() => {
//       success = true;
//     })
//     .catch(() => {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success
// }
// export async function eventRequest(collection, doc, userid) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .update({
//       Requests: firestore.FieldValue.arrayUnion(userid),
//     })
//     .then(() => {
//       success = true;
//     })
//     .catch(() => {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export async function removeeventRequest(collection, doc, userid) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .update({
//       Requests: firestore.FieldValue.arrayRemove(userid),
//     })
//     .then(() => {
//       success = true;
//     })
//     .catch(() => {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export async function addtoParticipants(collection, doc, eventid) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .update({
//       Participants: firestore.FieldValue.arrayUnion(eventid),
//     })
//     .then(() => {
//       success = true;
//     })
//     .catch(() => {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export async function removefromParticipants(collection, doc, eventid) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .update({
//       Participants: firestore.FieldValue.arrayRemove(eventid),
//     })
//     .then(() => {
//       success = true;
//     })
//     .catch(() => {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export async function saveDataInSubCollection(
//   collection,
//   doc,
//   subCollection,
//   subDoc,
//   jsonObject,
// ) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .collection(subCollection)
//     .doc(subDoc)
//     .set(jsonObject, {merge: true})
//     .then(() => {
//       success = true;
//     })
//     .catch(function (error) {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
export const signIn = async (email,password) => {

  let success = true;
  let message = null;

  await auth().signInWithEmailAndPassword(email, password).then(async (res) => {
      success=true
  }).catch((error) => {
          success = false,
          message = error.message

  })
  return { success, message }


}

// // export const signInWithGoogle = async () => {
// //   // Get the users ID token
// //   const {idToken} = await GoogleSignin.signIn();

// //   // Create a Google credential with the token
// //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

// //   // Sign-in the user with the credential
// //   return auth().signInWithCredential(googleCredential);
// // };
// export const creatUser = async (email, password, confPassword) => {
//   let success = true;
//   await auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then((user) => {
//       success = true;
//     })

//     .catch((error) => {
//       success = false;
//       if (error.code === 'auth/invalid-email') {
//         Alert.alert('That email address is invalid!');
//       } else if (error.code === 'auth/user-disabled') {
//         Alert.alert('User is disabled!');
//       } else if (error.code === 'auth/user-not-found') {
//         Alert.alert('User not found!');
//       } else if (error.code === 'auth/wrong-password') {
//         Alert.alert('Incorrect Password!');
//       } else if (error.code === 'auth/too-many-requests') {
//         Alert.alert(
//           'We have blocked all requests from this device due to unusual activity. Try again later.',
//         );
//       } else {
//         Alert.alert(error.message);
//       }
//     });
//   return success;
// };
// export async function addToArrayUpdate(collection, doc, array, value) {
//   let docRef = firestore().collection(collection).doc(doc);
//   let docData = await docRef.get();
//   if (docData.exists && docData.data()[array] != undefined) {
//     docRef.set(
//       {
//         [array]: firestore.FieldValue.arrayUnion(value),
//       },
//       {merge: true},
//     );
//   } else {
//     docRef.set(
//       {
//         [array]: [value],
//       },
//       {merge: true},
//     );
//   }
// }
// export async function uploadImage(uri, path) {
//   try {
//     const response = await fetch(uri);
//     const blob = await response.blob();
//     const ref = storage().ref(path);
//     const task = ref.put(blob);
//     return new Promise((resolve, reject) => {
//       task.on(
//         'state_changed',
//         () => {},
//         (err) => {
//           reject(err);
//         },
//         async () => {
//           const url = await task.snapshot.ref.getDownloadURL();
//           resolve(url);
//         },
//       );
//     });
//   } catch (err) {
//     console.log('uploadImage error: ' + err.message);
//   }
// }
// export const forgotPassword = async (data) => {
//   let res;
//   try {
//     res = await axios.post(routes.FORGOT_PASSWORD.url, data);
//     if (res.status === 200 || res.status === 201 || res.status === 304) {
//       return res.data;
//     } else {
//       return {success: false, data: res.data};
//     }
//   } catch (error) {
//     return error?.response?.data;
//   }
// };
// export async function resetEmailRequest(email) {
//   let success = true;
//   await auth()
//     .sendPasswordResetEmail(email)
//     .catch(function (error) {
//       success = false;
//       if (error.code === 'auth/user-not-found') {
//         Toast.show(
//           'The information provided does not match our records. Please try again',
//         );
//       } else if (error.code === 'auth/unknown') {
//         Toast.show(
//           'A network error (such as timeout, interrupted connection or unreachable host) has occurred',
//         );
//       } else {
//         Toast.show(error.message);
//       }
//     });
//   return success;
// }
// export const deleteUser=async(name,doc)=>{
//   try {
//     await firestore().collection(name).doc(doc).delete()
    
//   } catch (error) {
//     console.log('error here ' + error);

//   }

// }
export const getData = async (collection, doc) => {
  try {
    const res = await firestore().collection(collection).doc(doc).get();
    if (res.exists)
      return {
        success: true,
        exists: true,
        data: res.data(),
      };
    else return {success: true, exists: false, data: null};
  } catch (error) {
    console.log('error here ' + error);
    return {success: false, message: error?.message};
  }
};
export const getAllData = async (collection) => {
  try { 
    let temp=[]
    const res = await firestore().collection(collection).get()
   
    res.forEach((doc) => {
            temp.push(doc.data());
          });
    return {success: true, data: temp};
  
  } catch (error) {
    console.log('error here ' + error);
    return {success: false, message: error?.message};
  }
};
// export const getDataFromSnapshot = async (collection, doc) => {
//   try {
//     const res = await firestore().collection(collection).doc(doc).snapshot();
//     if (res.exists)
//       return {
//         success: true,
//         exists: true,
//         data: res.data(),
//       };
//     else return {success: true, exists: false, data: null};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getAllUserData = async (collection, doc) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where(
//         'Date',
//         '!=',
//         moment(new Date()).format('DD-MM-YYYY').substring(0, 10),
//       )
//       .get();
//     res.forEach((doc) => {
//       temp.push(doc.data());
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getAllEvents = async (collection, doc) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where(
//         'Date',
//         '!=',
//         moment(new Date()).format('DD.MM.YYYY').substring(0, 10),
//       )
//       .get();
//     res.forEach((doc) => {
//       temp.push(doc.data());
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getRequestEvents = async (collection) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where('Requests', '!=', [])
//       .get();
//     res.forEach((doc) => {
//       temp.push(doc.data());
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getFavUsers = async (collection,key) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where('FavoriteEvents', 'array-contains',key)
//       .get();
//     res.forEach((doc) => {
//       temp.push(doc.data());
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getParticipantsEvents = async (collection) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where('Participants', '!=', [])
//       .get();
//     res.forEach((doc) => {
//       temp.push(doc.data());
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getTodayEvent = async (collection) => {
//   console.log(moment(new Date()).format('DD.MM.YYYY').substring(0, 10));
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where(
//         'Date',
//         '==',
//         moment(new Date()).format('DD.MM.YYYY').substring(0, 10),
//       )
//       .get();
//     res.forEach((doc) => {
//       temp.push(doc.data());
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// // export const filterEventByDate = async (text) => {
// //   console.log(text)
// //   if(text=='Today')
// //   {
// //   try {
// //     let temp = [];
// //     const res = await firestore()
// //       .collection('Events')
// //       .where(
// //         'Date',
// //         '==',
// //         moment(new Date()).format('DD.MM.YYYY').substring(0, 10),
// //       )
// //       .get();
// //     res.forEach((doc) => {
// //       temp.push(doc.data());
// //     });
// //     return {success: true, data: temp};
// //   } catch (error) {
// //     console.log('error here ' + error);
// //     return {success: false, message: error?.message};
// //   }}
// //   else if(text=='This Week'){
// //    let today =moment(new Date()).format('DD.MM.YYYY')
// //     let thisweek=moment().endOf('week').add('1','day').format('DD.MM.YYYY')
// //     try {
// //       let temp = [];
// //       const res = await firestore()
// //         .collection('Events')
// //         .where(
// //           'Date',
// //           '>=',
// //           today,
// //         )
// //         .get();
// //       res.forEach((doc) => {
// //         temp.push(doc.data());
// //       });
// //       return {success: true, data: temp};
// //     } catch (error) {
// //       console.log('error here ' + error);
// //       return {success: false, message: error?.message};
// //     }
   
// //   }
// //   else {
// //     let nextStart =moment().add('1','week').startOf('week').format('DD.MM.YYYY')
// //     let nextEnd =moment().add('1','week').endOf('week').format('DD.MM.YYYY')
// //     console.log(nextStart,nextEnd)
// //     try {
// //       let temp = [];
// //       const res = await firestore()
// //         .collection('Events')
// //         .where(
// //           'Date',
// //           '>=',
// //           nextStart,
// //         ).where(
// //           'Date',
// //           '<=',
// //           nextEnd,

// //         )
// //         .get();
// //       res.forEach((doc) => {
// //         temp.push(doc.data());
// //       });
// //       return {success: true, data: temp};
// //     } catch (error) {
// //       console.log('error here ' + error);
// //       return {success: false, message: error?.message};
// //     }

// //   }
// // };

// export const filterEvents = async (collection, doc) => {
//   const dates = useSelector((state) => state.Filter.date);
//   const ages = useSelector((state) => state.Filter.age);
//   const accesss = useSelector((state) => state.Filter.access);
//   const musics = useSelector((state) => state.Filter.music);
// let flag=false;
// if(accesss=="Public"){
//   flag=true
// }else{
//   flag=false
// }
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection("Events")
//       .where('Date', '==', dates)
//       .where('AgeGroup','==',ages)
//       .where('isPublicEvent','==',flag)
//       // .where('Music.musicName','',musics)
//       .get();
//     res.forEach((doc) => {
//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getUserEvents = async (collection, doc) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where('uid', '==', doc)
//       .get();
//     res.forEach((doc) => {
//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getAllUserDataFromSubCollection = async (
//   collection,
//   doc,
//   subCollection,
// ) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .doc(doc)
//       .collection(subCollection)
//       .get();
//     res.forEach((doc) => {
//       temp.push(doc.data());
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };

// export async function deleteDocument(collection, doc) {
//   let success = false;
//   await firestore()
//     .collection(collection)
//     .doc(doc)
//     .delete()
//     .then(() => {
//       success = true;
//     })
//     .catch(function (error) {
//       console.error('Error writing document: ', error);
//       success = false;
//     });
//   return success;
// }
// export const removeFromArray = async (collection, doc, array, indexs) => {
//   let docRef = firestore().collection(collection).doc(doc);
//   let docData = await docRef.get();
//   let idx = '';
//   let t = docData?.data().likeBy.map((item, index) => {
//     if (item == indexs) {
//       idx = index;
//     }
//   });

//   if (docData.exists && docData.data()[array][idx] != undefined) {
//     docRef.update({
//       [array]: firestore.FieldValue.arrayRemove(docData.data()[array][idx]),
//     });
//   }
// };
// export const getCollectionInOrder = async (collection, doc,key) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where('uid', '==', doc).orderBy(key,'desc')
//       .get();
//     res.forEach((doc) => {
//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const send = async (token, message_content,userData,type='Comments') => {
//   const user = useSelector((state) => state.Auth.user);
//   console.log(userData)
//   const message = {
//     to: token,
//     notification: {
//       title: message_content.title,
//       body: message_content.body,
//       vibrate: 1,
//       sound: 1,
//       show_in_foreground: true,
//       priority: 'high',
//       content_available: true,
//     },
//   };

//   let headers = new Headers({
//     'Content-Type': 'application/json',
//     Authorization: 'key=' + Constants.FIREBASE_SERVER_API_KEY,
//   });

//   let response = await fetch("https://fcm.googleapis.com/fcm/send", {
//       method: "POST",
//       headers,
//       body: JSON.stringify(message),
//   })
//   response = await response.json()
//   let createdAt=new Date().getTime().toString()
//   await saveData('Notifications',createdAt,{
//     createdAt:moment().valueOf(),
//     notificationId:createdAt,
//     title: message_content.title,
//     updater:user?.name,
//     UpdatedEvent:message_content?.event,
//     mentioner_name:user?.name,
//     club:message_content?.club,
//     deletedEvent:message_content?.deleted_Event,
//     deletedBy:message_content?.deleted_By,
//     body: message_content.body,
//   reciverId:userData?._id,
//   reciverPic:userData?.profilePic==undefined||userData?.profilePic==''?'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80':userData?.profilePic,
//   type
//   })
//   return response
// }
// export async function getAllOfCollection(collection) {
//   let data = [];
//   let querySnapshot = await firestore().collection(collection).get();
//   querySnapshot.forEach(function (doc) {
//     if (doc.exists) {
//       data.push(doc.data());
//     } else {
//       console.log('No document found!');
//     }
//   });
//   return data;
// }
// export const getcurrentLocation = async() => {
  
//   try {
 
//        RNLocation.configure({distanceFilter: 500});
//       const response=await RNLocation.requestPermission({
//       ios: 'whenInUse',
//       android: {
//         detail: 'coarse',
//       },
//     })
//     if(response){
//    const location=  await RNLocation.getLatestLocation({timeout: 60000})
//       return location
//     }
//   }
//   catch (err) {
//       console.warn(err)
//   }
// }
// export const getProductId=async(url)=>{
//   let headers = new Headers({
//     "Content-Type": "application/json",
//     "Authorization": "BearerIA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAGgAAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAdAAAABwAAAAEAAAAEAAAAD72zYyZhnAFBwH6Hlt01ExOAAAArD-DGhdO3aycUG34YwrC3NGbOLEA4fSvl_kym1dbkT2MzofW-GSXGR3Zu3a3fWihg0g81mCuBOSLnyqZip5_-h1_f47sCB6iXXtlpf9aAAAMAAAAAdj_NKosvmBIjUOwJAAAAGIwZDg1ODAzLTM4YTAtNDJiMy04MDZlLTdhNGNmOGUxOTZlZQ",
// })

// let response = await fetch(url, {
//     method: "GET",
//     headers,
    
// })
// response = await response.json()
// return response
// }
// export const getClubsByCategory = async (collection,key,name) => {
  
//   try {
//     console.log(name,key)
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where(key, 'array-contains', name)
//       .get();
//     res.forEach((doc) => {
//       console.log(doc,'-00-0-0-0-');

//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getClubsByParty = async (collection) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where('temperature', '>',50)
//       .get();
//     res.forEach((doc) => {
//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getClubsByCalm = async (collection) => {
//   try {
//     let temp = [];
//     const res = await firestore()
//       .collection(collection)
//       .where('temperature', '<', 50)
//       .where('temperature','>',0)
//       .get();
//     res.forEach((doc) => {
//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   } catch (error) {
//     console.log('error here ' + error);
//     return {success: false, message: error?.message};
//   }
// };
// export const getUserInRange=async(range)=>{
//   try{
//     let temp=[]
//     const res =  await  firestore()
//     .collection("tables")
//     .where("location.geohash", ">=", range.lower)
//     .where("location.geohash", "<=", range.upper)
//     .get()
//     res.forEach((doc) => {
//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   }
//   catch(e){
//     console.log('error here ' + e)
//     return {success: false, message: e?.message};

//   }
// }
// export const getClubsInRange=async(range)=>{
//   try{
//     let temp=[]
//     const res =  await  firestore()
//     .collection("tables")
//     .where("location.geohash", ">=", range.lower)
//     .where("location.geohash", "<=", range.upper)
//     .get()
//     res.forEach((doc) => {
//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   }
//   catch(e){
//     console.log('error here ' + e)
//     return {success: false, message: e?.message};

//   }
// }
// export const getEventsInRange=async(range)=>{
//   try{
//     let temp=[]
//     const res =  await  firestore()
//     .collection("Events")
//     .where("location.geohash", ">=", range.lower)
//     .where("location.geohash", "<=", range.upper)
//     .get()
//     res.forEach((doc) => {
//       temp.push({...doc.data(), id: doc.ref.id});
//     });
//     return {success: true, data: temp};
//   }
//   catch(e){
//     console.log('error here ' + e)
//     return {success: false, message: e?.message};

//   }
// }
export const saveCard = async (body) => {
  try {
    console.log('====> entered api function');
    const response = await fetch(
      'https://us-central1-kutstop-1f3ea.cloudfunctions.net/saveCard',

      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    const resultObject = await response.json();
    return resultObject;
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: error.message,
    };
  }
};
export const payWithStripeCard = async (body) => {
  try {
    console.log('====> entered api function');
    const response = await fetch(
      'https://us-central1-kutstop-1f3ea.cloudfunctions.net/payWithStripeCard',

      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    const resultObject = await response.json();
    return resultObject;
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: error.message,
    };
  }
};
export const refundBookingPayment = async (body) => {
  try {
    console.log('====> entered api function');
    const response = await fetch(
      'https://us-central1-kutstop-1f3ea.cloudfunctions.net/refundBookingPayment',

      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    const resultObject = await response.json();
    return resultObject;
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: error.message,
    };
  }
};
