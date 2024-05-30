import { View, FlatList } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../Common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/Actoins/Actoins';
// on working React Native Ecommerce App - Add to cart and wishlist => Engineer Codewala
const WishList = () => {
  const [cartList,setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducer2);
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
      data={cartData} 
      renderItem={({ item, index }) => {
    return (<CartItem item={item}  RemoveItem={()=>{
      dispatch(removeFromWishlist(index))
    }}/>
  );    
  }}
/>
    </View>
  )
}
export default WishList;
