import { Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const CommonButton = ({onpress, title, textColor, fontSized}) => {
  return (
    <TouchableOpacity style={styles.input} onpress={()=>onpress()}>
      <Text style={{color:textColor}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton
const styles = StyleSheet.create({
 input:{backgroundColor:'#000',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    width:330,
    borderRadius:10,
    alignSelf:'center',
    marginTop:20,
    fontSize:40,}
})