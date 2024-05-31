import { View, FlatList, Text } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeFromWishlist } from '../redux/Actoins/Actoins';
import ProductItem from '../Common/ProductItem';

const Wishlist = () => {
  const cartData = useSelector(state => state.Reducer2);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      {cartData && cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <ProductItem item={item}
                isWishList={'asasfas'}
                onRemoveFromWishList={() => {
                  dispatch(removeFromWishlist(index))
                }}
                onAddToCart={(x) => {
                  dispatch(addItemToCart(x));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Items in Wishlist</Text>
        </View>
      )}
    </View>
  );
};
export default Wishlist;
