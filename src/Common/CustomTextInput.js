import { View, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

const CustomTextInput = ({value, onChangeText, type, placeholder, icon, keyboardType}) => {
  return (
    <View style={styles.input}>
      <Image source={icon} style={{width:23, height:23}}/>
      <TextInput 
      value={value} 
      onChangeText={(txt)=>{
        onChangeText(txt)
      }} 
      placeholder={placeholder} 
      style={{marginLeft:15}} 
      secureTextEntry={type ? true : false}
      keyboardType={keyboardType ? keyboardType: 'default'}

      />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input:{alignSelf:'center',
       width:400,
       height:55,
       alignSelf:'center',
       borderRadius:50,
       borderWidth:.5,
       marginTop:10,
       paddingLeft:20,
       flexDirection:'row',
       alignItems:'center',
    },
      
  })
