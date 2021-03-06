import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {login} from '../../Redux/Actions/Auth';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import RNPickerSelect from 'react-native-picker-select';
import {height} from 'react-native-dimension';
import {getAllData} from '../../backend/Firebase';
export default function ChangeOrganization(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const [organization, setOrganization] = useState([]);
  const [country, setCountry] = useState([]);
  const [color, setColor] = useState(null);
  const [countryselect, setCountrySelect] = useState([]);
  const [org, setOrg] = useState(null);
  useEffect(() => {
    getOrganization();
  }, []);
  const getOrganization = async () => {
    const response = await getAllData('Organizations');
    const responses = await getAllData('Country');

    let temp = [];
    let temp2 = [];
    response?.data?.map((item) => {
      temp.push({label: item?.name, value: item?.id, color: item?.color});
    });
    responses?.data?.map((item) => {
      temp2.push({label: item.name, value: item.id});
    });
    setCountry(temp2);
    setOrganization(temp);
  };

  const PickerIcon = () => {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          borderTopWidth: 8,
          borderTopColor: 'gray',
          borderRightWidth: 10,
          borderRightColor: 'transparent',
          borderLeftWidth: 10,
          borderLeftColor: 'transparent',
          width: 1,
          height: 1,
        }}
      />
    );
  };
  return (
    <ScreenWrapper statusBarColor={'#f2f2f2'} barStyle="dark-content">
      <TouchableWithoutFeedback>
        <View style={styles.mainViewContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.pickerView}>
            <Text style={styles.pickerViewHeading}>
              Select your organization
            </Text>

            <Text style={styles.label}>City</Text>

            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{
                label: 'Select your City',
                value: '',
              }}
              onValueChange={(value) => setCountrySelect(value)}
              items={country}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 20,
                  right: 16,
                },
              }}
              Icon={PickerIcon}
            />

            <Text style={styles.label2}>Organization</Text>

            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{
                
              }}
              onValueChange={(val) => {}}
              onDonePress={(val) => {
                const selectedOrg = organization?.find(
                  (item) => item?.id == val,
                );
                console.log(selectedOrg);
                setOrg(selectedOrg?.value);
                setColor(selectedOrg?.color);
              }}
              
              items={organization}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 20,
                  right: 16,
                },
              }}
              Icon={PickerIcon}
            />

            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Login', {
                    organization: org,
                    color: color,
                  });
                }}
                style={styles.btnSmall}>
                <Text style={styles.btnSmallText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
                style={styles.btnSmall}>
                <Text style={styles.btnSmallText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.imageViewSmall}>
            <Image
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.imageStyleSmall}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginVertical: 3,
    padding: 12,
    width: '100%',
    borderColor: '#00000029',
    backgroundColor: AppColors.white,
    fontSize: 12,

    color:  '#00000029',
    borderRadius: 2,
    marginTop: height(1),
    borderBottomWidth: 0.6,
    borderBottomColor: '#cdd1cd',
  },
  inputAndroid: {
    marginVertical: 6,
    paddingLeft: 15,
    borderRadius: 7,
    fontSize: 14,
    color: '#000',
    backgroundColor: '#F7F8FB',
    height: 40,
    width: '100%',
  },
});
