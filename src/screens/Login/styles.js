import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop:height(5),
    backgroundColor: AppColors.white
  },
  imageStyle:{
    height:height(10),
    width:width(70),

  }
});
export default styles;
