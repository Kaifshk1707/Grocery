import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomTextInput from '../Common/CustomTextInput'; // Adjust the path
import CommonButton from '../Common/CommonButton'; // Adjust the path
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Common/Loader'; // Adjust the path

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const login = async () => {
    setModalVisible(true);
    if (email === '') {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password === '') {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 1000);
      }
    }
  };

  const getData = async () => {
    const storedEmail = await AsyncStorage.getItem('EMAIL');
    const storedPassword = await AsyncStorage.getItem('PASSWORD');
    console.log('Stored Email:', storedEmail, 'Stored Password:', storedPassword);
    console.log('User Email:', email, 'User Password:', password);
    if (email === storedEmail && password === storedPassword) {
      setModalVisible(false);
      navigation.navigate('Home');
    } else {
      setModalVisible(false);
      alert('Wrong email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../images/2.png")} // Adjust the path
        style={styles.image}
      />
      <Text style={styles.text}>Login</Text>
      <CustomTextInput
        placeholder={"Enter your email"}
        icon={require("./../images/mail.png")} // Adjust the path
        value={email}
        onChangeText={(txt) => setEmail(txt)}
      />
      {badEmail && (
        <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
          Please Enter Email
        </Text>
      )}

      <CustomTextInput
        placeholder={"Enter your password"}
        icon={require("./../images/phones.png")} // Adjust the path
        type={"password"}
        value={password}
        onChangeText={(txt) => setPassword(txt)}
      />
      {badPassword && (
        <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
          Please Enter Password
        </Text>
      )}

      <CommonButton
        title={"Login"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={login}
      />

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.text2}>Create New Account</Text>
      </TouchableOpacity>

      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
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

export default Login;
