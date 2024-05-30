import { View,TouchableOpacity,Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/Actoins/Actoins';

const AddAdress = () => {
    const navigation = useNavigation();
    const [city,setCity] = useState('');
    const [build,setBuild] = useState('');
    const [pincode,setPinCode] = useState('');
    const dispatch = useDispatch();
  return (
    <View style={{flex:1}}>
      <View style={styles.Vw1}>    
      <TouchableOpacity style={styles.touch1}
        onPress={()=>{
            navigation.goBack();
        }}
        >   
        <Image source={require('./../images/back.png')} style={{width:24,height:24,}}/>
      </TouchableOpacity>
    </View>
    <CustomTextInput
        placeholder={"Enter your City Name"}
        icon={require("./../images/city.png")}
        value={city}
        onChangeText={(txt) => setCity(txt)}
      />
       <CustomTextInput
        placeholder={"Enter your Building Name"}
        icon={require("./../images/build.png")}
        value={build}
        onChangeText={(txt) => setBuild(txt)}
      />
      <CustomTextInput
        placeholder={"Enter your PinCode Name"}
        icon={require("./../images/pincode.png")}
        keyboardType={'number-pad'}
        value={pincode}
        onChangeText={(txt) => setPinCode(txt)}
      />
      <CommonButton title={'Save Address'} bgColor={'#000'} textColor={'#fff'} onPress={()=>{
    if(city !== '' && build !=='' && pincode !== ''){ 

      dispatch(addAddress({city:city, build:build, pincode:pincode}))
      navigation.goBack();


      console.log('AddAddress');
    } else {
      navigation.goBack();
    }
}}/>
    </View>
  )
}


const styles = StyleSheet.create({
  Vw1:{
    width:'100%',
      height:70,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row', 
  },
  touch1:{
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center', 
    borderWidth:.2,
    padding:7,
    borderRadius:10}
})
export default AddAdress

