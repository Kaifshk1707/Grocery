// import { View, Text,TouchableOpacity,Image } from 'react-native'
// import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import CustomTextInput from '../Common/CustomTextInput';
// import CommonButton from '../Common/CommonButton';
// import { useDispatch } from 'react-redux';

// const AddAdress = () => {
//     const navigation = useNavigation();
//     const [city,setCity] = useState('');
//     const [build,setBuild] = useState('');
//     const [pincode,setPinCode] = useState('');
//     const dispatch = useDispatch();
//   return (
//     <View style={{flex:1}}>
//       <View style={{width:'100%',
//       height:70,
//       justifyContent:'space-between',
//       alignItems:'center',
//       flexDirection:'row',      
//       }}>
//       <TouchableOpacity style={{
//         marginLeft:20,
//         justifyContent:'center',
//         alignItems:'center', 
//         borderWidth:.2,
//         padding:7,
//         borderRadius:10}}
//         onPress={()=>{
//             navigation.goBack();
//         }}
//         >   
//         <Image source={require('./../images/back.png')} style={{width:24,height:24,}}/>
//       </TouchableOpacity>
//     </View>
//     <CustomTextInput
//         placeholder={"Enter your City Name"}
//         icon={require("./../images/city.png")}
//         value={city}
//         onChangeText={(txt) => setCity(txt)}
//       />
//        <CustomTextInput
//         placeholder={"Enter your Building Name"}
//         icon={require("./../images/build.png")}
//         value={build}
//         onChangeText={(txt) => setBuild(txt)}
//       />
//       <CustomTextInput
//         placeholder={"Enter your PinCode Name"}
//         icon={require("./../images/pincode.png")}
//         keyboardType={'number-pad'}
//         value={pincode}
//         onChangeText={(txt) => setPinCode(txt)}
//       />
//       <CommonButton title={'Save Address'} bgColor={'#000'} textColor={'#fff'} onPress={()=>{
//          if(city !== '' && build !=='' && pincode !== ''){
//           dispatch(AddAdress({city:city,build:build,pincode:pincode}))
//           console.log('AddAdress');
//          }else{
//           navigation.goBack()
//          }
         
//       }}/>
//     </View>
//   )
// }

// // export default AddAdress