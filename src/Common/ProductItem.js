import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// As a CartItem
const ProductItem = ({ item, onRemoveItem, onAddWishlist, isWishList, onRemoveFromWishList, onAddToCart }) => {
    return (
        <TouchableOpacity style={{
            borderRadius: 20,
            elevation: 5,
            width: '94%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            marginLeft: 10,
            marginBottom: 10
        }}>
            <View style={{ width: '100%' }}>
                <Image source={item.image} style={{ width: '100%', height: 400, borderRadius: 20, borderTopRightRadius: 20 }} />
                <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 18, fontWeight: '600' }}>
                    {item.name}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                }}>
                    <Text style={{ marginTop: 5, marginLeft: 10, fontSize: 16, fontWeight: '500', marginBottom: 10 }}>
                        {'₹' + item.price}
                    </Text>
                    {isWishList ? (<TouchableOpacity style={{
                        padding: 5,
                        borderWidth: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginRight: 15,
                    }} onPress={() => {
                        onAddToCart(item);
                    }} >
                        <Text style={{ color: '#000' }}>
                            Add To Cart
                        </Text>
                    </TouchableOpacity>) : (<TouchableOpacity style={{
                        padding: 5,
                        borderWidth: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginRight: 15,
                    }} onPress={() => {
                        onRemoveItem();
                    }} >
                        <Text style={{ color: '#000' }}>
                            Remove Item
                        </Text>
                    </TouchableOpacity>)}

                </View>
                {
                    isWishList ? (<TouchableOpacity style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        elevation: 5,
                        top: 10,
                        right: 10
                    }}
                        onPress={() => {
                            onRemoveFromWishList();
                        }}
                    >
                        <Image source={require('./../images/fillHeart.png')} style={{ width: 20, height: 20, tintColor: 'red' }} />
                    </TouchableOpacity>) : (<TouchableOpacity style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        elevation: 5,
                        top: 10,
                        right: 10
                    }}
                        onPress={() => {
                            onAddWishlist(item);
                        }}
                    >
                        <Image source={require('./../images/heart.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>)
                }

            </View>
        </TouchableOpacity>
    )
}

export default ProductItem;