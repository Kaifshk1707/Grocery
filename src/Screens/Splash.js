
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Splash = () => {
    const navigation =useNavigation();
    useEffect(()=>{
    setTimeout(() => {
        getData()
    }, 1000);
    },[])

    const getData =async ()=>{
      const email =await AsyncStorage.getItem('EMAIL')
      if (email!==null) {
        navigation.navigate("Login");                                                                                                         
      }  
      else{
        navigation.navigate("Home");                                                                                                         

      }
    }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Splash</Text> */}
      <Image source={require('../images/wel.png')} style={{width:100, height:100, borderRadius:50}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Splash;
