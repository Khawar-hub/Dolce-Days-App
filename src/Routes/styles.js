import {Platform, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../utills/AppColors';

const styles = StyleSheet.create({
  tabBarStyle: {
    height:height(9.7),
    // paddingBottom: Platform.OS=='ios'? height(5.1):height(3),
    paddingTop: Platform.OS=='ios'? height(1):height(0.7),
    backgroundColor: AppColors.white,
    borderTopColor: AppColors.black,
  },
  tabBarLabel: {
    fontSize: width(3.5),
  },
  eventImage: {
    width: width(8),
    height: width(8),
    marginLeft: width(1),
  },
  eventImage1: {
    width: width(7.3),
    height: width(6),
    marginLeft: width(1),
  },
});

export default styles;
