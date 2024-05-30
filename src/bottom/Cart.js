import { View, FlatList, Text } from 'react-native';
import React, { useState } from 'react';
import CartItem from '../Common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromCart } from '../redux/Actoins/Actoins';
import CommonButton from './../Common/CommonButton';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Cart);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      {cartData && cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItem
                item={item}
                onAddWishList={item => {
                  dispatch(addToWishlist(item));
                }}
                index={index}
                removeFromCart={data => {
                  dispatch(removeFromCart(data));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Items in Cart</Text>
        </View>
      )}
      {
        cartData && cartData.length > 0 ? (
          <View>
            <CommonButton bgColor={'limegreen'} textColor={'red'} title={'CheckOut'} />
          </View>
        ) : null
      }
    </View>
  );
};
export default Cart;
