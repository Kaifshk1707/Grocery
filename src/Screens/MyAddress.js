import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/Actoins/Actoins';

let addressList = [];
const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const addressList = useSelector(state => state.AddressReducer);
  console.log(addressList);

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Text style={{ marginLeft: 15, fontWeight: '600', fontSize: 35, }}>My Address</Text>
        <TouchableOpacity style={{
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: .2,
          padding: 7,
          borderRadius: 10
        }}
          onPress={() => {
            navigation.navigate('AddAdress');
          }}
        >
          <Text>
            Add Address
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList data={addressList} renderItem={({ item, index }) => {
        return (
          <View style={{
            width: '100%',
            borderWidth: 0.3,
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingRight: 10,
            paddingTop: 20,
          }}>
            <View>
              <Text style={{ marginLeft: 20 }}>{'City Name: ' + item.city}</Text>
              <Text style={{ marginLeft: 20 }}>{'Building Name: ' + item.build}</Text>
              <Text style={{ marginLeft: 20, marginBottom: 10 }}>{'PinCode: ' + item.pincode}</Text>
            </View>
            <TouchableOpacity style={{ borderWidth: .3, borderRadius: 10, padding: 7, }} onPress={() => {
              dispatch(deleteAddress(index))
            }}>
              <Text>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )
      }} />
    </View>
  )
}

export default MyAddress