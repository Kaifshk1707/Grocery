import { View, Text, StyleSheet,Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native'
import CustomTextInput from '../src/Common/CustomTextInput';
import CommonButton from '../src/Common/CommonButton'



const Stack = createStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
const Login = () => {
  const navigation=useNavigation()
  return (
  
    <View style={styles.container}>
      <Image source={require('./../assets/images/2.png')} style={styles.image} />
      <Text style={styles.text}>Login</Text>
        <CustomTextInput placeholder={'Enter your email'} icon={require('./../assets/images/m.png')}/>
        <CustomTextInput placeholder={'Enter your password'} icon={require('./../assets/images/p.png')} type={'password'}/>
        <CommonButton title={'Login'} bgColor={'#000'} textColor={'#fff'} onpress={()=>{}}/>
        <TouchableOpacity  onPress={()=>{navigation.navigate('SignUp')}}>
        <Text style={styles.text2} >Create New Account</Text>
    </TouchableOpacity>
    </View>
    
  )
}
const SignUp = () => {
  const navigation=useNavigation()
  return (
    <ScrollView  style={{flex:1}}>
      <Image source={require('./../assets/images/2.png')} style={styles.image} />
      <Text style={styles.text}>Create New Account</Text>
        <CustomTextInput placeholder={'Enter your Name'} icon={require('./../src/images/user.png')}/>
        <CustomTextInput placeholder={'Enter your Email'} icon={require('./../assets/images/m.png')}/>
        <CustomTextInput placeholder={'Enter your Number'} icon={require('./../src/images/phones.png')}/>
        <CustomTextInput placeholder={'Enter your Password'} icon={require('./../assets/images/p.png')} type={'password'}/>
        <CommonButton title={'SignUp'} bgColor={'#000'} textColor={'#fff'} onpress={()=>{}}/>
        <TouchableOpacity  onPress={()=>{navigation.goBack()}}>
        <Text style={styles.text2} >Already have Account !</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    image: {width:80,
       height:80,
       borderRadius:50,
       alignSelf:'center',
       marginTop:60},
    text:{marginTop:50,
      alignSelf:'center',
      fontSize:27,
      fontWeight:'bold',
      color:"black "},
    input:{alignSelf:'center',
       width:400,
       height:55,
       borderRadius:50,
       borderWidth:.5,
       marginTop:10,
       paddingLeft:20,
       fontSize:40},
    text2:{fontSize:18,
        alignSelf:'center',
        marginTop:15,
        fontWeight:'500',
        textDecorationLine:'underline'}
  })
export default index

