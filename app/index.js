// Index.js file
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomTextInput from '../src/Common/CustomTextInput';
import CommonButton from '../src/Common/CommonButton';
import SignUp from './../src/Screens/SignUp';
import Home from './../src/Screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const Index = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const login = async () => {
    if (email === '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password === '') {
        setBadPassword(true);
      } else {
        setBadPassword(false);
        await getData();
      }
    }
  };

  const getData = async () => {
    const storedEmail = await AsyncStorage.getItem('EMAIL');
    const storedPassword = await AsyncStorage.getItem('PASSWORD');
    console.log('Stored Email:', storedEmail, 'Stored Password:', storedPassword);
    console.log('Entered Email:', email, 'Entered Password:', password);
    if (email === storedEmail && password === storedPassword) {
      navigation.navigate('Home');
    } else {
      alert('Wrong email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/2.png')} style={styles.image} />
      <Text style={styles.text}>Login</Text>
      <CustomTextInput
        placeholder={'Enter your email'}
        icon={require('./../assets/images/m.png')}
        value={email}
        onChangeText={(txt) => setEmail(txt)}
      />
      {badEmail && <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>Please Enter Email</Text>}

      <CustomTextInput
        placeholder={'Enter your password'}
        icon={require('./../assets/images/p.png')}
        type={'password'}
        value={password}
        onChangeText={(txt) => setPassword(txt)}
      />
      {badPassword && <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>Please Enter Password</Text>}

      <CommonButton title={'Login'} bgColor={'#000'} textColor={'#fff'} onPress={login} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text2}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 60,
  },
  text: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    color: "black",
  },
  text2: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
  }
});

export default Index;
