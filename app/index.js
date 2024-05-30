import React from 'react';
import { Provider } from 'react-redux';
import store from './../app/Store'; 
import MainContainer from './../app/MainContainer'; 

const App = () => {
  return (
    <Provider store={store}>
        <MainContainer />
    </Provider>
  );
};

export default App;

//my Prodcut work code
// // src/components/MyProducts.js
// import React, { useState } from 'react';
// import { View, Image, Text, TouchableOpacity } from 'react-native';

// const MyProducts = ({ item, addToWishList }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (product) => {
//     setCart(cart.filter((cartItem) => cartItem.id !== product.id));
//   };

//   const isInCart = (product) => {
//     return cart.some((cartItem) => cartItem.id === product.id);
//   };

//   return (
//     <View style={{ width: 200, height: 200, borderRadius: 10, elevation: 5, backgroundColor: '#fff', marginLeft: 20, marginBottom: 10 }}>
//       <Image source={item.image} style={{ width: '100%', height: '61%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
//       <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 15, fontWeight: '600' }}>{item.name}</Text>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginTop: 1, alignItems: 'center' }}>
//         <Text style={{ fontSize: 15, fontWeight: '600' }}>{'₹' + item.price}</Text>
//         {isInCart(item) ? (
//           <TouchableOpacity
//             style={{ borderWidth: 0.3, borderRadius: 10, paddingLeft: 8, paddingRight: 5, paddingBottom: 10, paddingTop: 10 }}
//             onPress={() => removeFromCart(item)}
//           >
//             <Text style={{ color: '#000' }}>Remove from Cart</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             style={{ borderWidth: 0.3, borderRadius: 10, paddingLeft: 8, paddingRight: 5, paddingBottom: 10, paddingTop: 10 }}
//             onPress={() => addToCart(item)}
//           >
//             <Text style={{ color: '#000' }}>Add to Cart</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//       <TouchableOpacity
//         style={{ width: 40, height: 35, backgroundColor: '#fff', borderRadius: 20, elevation: 5, position: 'absolute', top: 8, right: 8, justifyContent: 'center', alignItems: 'center' }}
//         onPress={() => addToWishList(item)}
//       >
//         <Image source={require('./../images/heart.png')} style={{ width: 20, height: 20 }} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default MyProducts;
