import { View, FlatList, Text } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromCart } from '../redux/Actoins/Actoins';
import CommonButton from './../Common/CommonButton';
import ProductItem from '../Common/ProductItem';

const Cart = () => {
  const cartData = useSelector(state => state.Reducer);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      {cartData && cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <ProductItem
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x))
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
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
            <CommonButton bgColor={'limegreen'} textColor={'red'} title={'ChekOut'} />
          </View>
        ) : null
      }
    </View>
  );
};
export default Cart;
