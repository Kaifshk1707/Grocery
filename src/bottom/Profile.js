import { View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
let name ='SHAIKH';
const Profile = () => {
  const navigation= useNavigation();
  useEffect(() => {
    getData();
  }, [])
   const getData = async () =>{
   name =await AsyncStorage.getItem('NAME');
  };
  return (
    <View style={{flex:1}}>
      <View style={{width:'100%',
      height:70,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',      
      }}>
      <Text style={{marginLeft:15,fontWeight:'600', fontSize:35,color:'gray'}}>Profile</Text>
      <TouchableOpacity style={{width:30,height:30,marginRight:20,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('./../images/setting.png')} style={{width:24,height:24}}/>
      </TouchableOpacity>
    </View>
    <Image source={require('./../images/profile.png')} style={{
      width:80,
      height:80,
      alignSelf:'center', 
      marginTop:30}}/>
      <Text style={{alignSelf:'center',marginTop:20,fontSize:20}}>{name}</Text>
      <TouchableOpacity style={styles.txt1}
      onPress={()=>{
        navigation.navigate('MyAddress');
      }}>
        <Text style={{fontSize:17}}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.txt2}>
        <Text style={{fontSize:17}}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.txt3}>
        <Text style={{fontSize:17}}>Offers</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles =StyleSheet.create({
  txt1:{
    width:'90%',
    alignSelf:'center',
    height:50,
    borderBottomWidth:.3,
    marginTop:20,
    borderBottomColor:'#8e8e8e',
    justifyContent:'center'
    },
    txt2:{
      width:'90%',
      alignSelf:'center',
      height:50,
      borderBottomWidth:.3,
      marginTop:20,
      borderBottomColor:'#8e8e8e',
      justifyContent:'center'
      },
      txt3:{
        width:'90%',
        alignSelf:'center',
        height:50,
        borderBottomWidth:.3,
        marginTop:20,
        borderBottomColor:'#8e8e8e',
        justifyContent:'center'
        },
})
export default Profile