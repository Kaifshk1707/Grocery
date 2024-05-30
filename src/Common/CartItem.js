// import { View, Image,Text, TouchableOpacity } from 'react-native'
// import React from 'react'

// const CartItem = ({item,onAddToCart,addToWishList}) => {
//   return (
//     <View style={{width:'90%',height:200,borderRadius:10,elevation:5,backgroundColor:'#fff', marginLeft:20,marginBottom:10}}>
//     <Image source={item.image} style={{width:'100%' , height:'61%',borderTopLeftRadius:10,borderTopRightRadius:10}}/>
//     <Text style={{marginLeft:10, marginTop:10,fontSize:15,fontWeight:'600' }}>{item.name}</Text>
//     <View style={{flexDirection:'row',
//     justifyContent:'space-between',
//     paddingLeft:10,
//     paddingRight:10,
//     marginTop:1,
//     alignItems:'center'}}>
//     <Text style={{fontSize:15,fontWeight:'600'}}>
//         {'₹'+item.price}
//     </Text>
//     <TouchableOpacity style={{borderWidth:.3,
//       borderRadius:10,
//       paddingLeft:8,
//       paddingRight:5,
//       paddingBottom:10,
//       paddingTop:10}}
//       onPress={()=>{
//         onAddToCart(item)}}>
//         <Text>
//            Add to Cart
//         </Text>
//     </TouchableOpacity>
//     </View>
//     <TouchableOpacity style={{width:40,
//         height:35,
//         backgroundColor:'#fff',
//         borderRadius:20,
//         elevation:5,
//         position:'absolute',
//         top:8,
//         right:8,
//         justifyContent:'center',
//         alignItems:'center'
//         }}
//         onPress={()=>{
//           addToWishList(item)}} >

//         <Image source={require('./../images/heart.png')} style={{width:20,height:20}}/>
//     </TouchableOpacity>
//     </View>
//   )
// }

// export default CartItem;