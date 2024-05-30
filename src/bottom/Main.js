import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import { products } from "../Screens/Products";
import { FlatList, ScrollView, State } from "react-native-gesture-handler";
import MyProducts from "../Common/MyProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Actoins/Actoins";
import {addToWishlist} from "../redux/Actoins/Actoins";

const Main = () => {
  const dispatch =useDispatch();
  const [categoryList,setCategoryList] = useState([]);
  const [tshirtList,setTshirtList] = useState([]);
  const [shirtList,setShirtList] = useState([]);
  const [jeansList,setJeansList] = useState([]);
  const [shoesList,setShoesList] = useState([]);
  const [jacketList,setJacketList] = useState([]);
  const [trouserList,setTrouserList] = useState([]);
  const [watchList,setWatchList] = useState([]);
  useEffect(() => {
    // console.log(products);
    let categories = []
    products.category.map(item=>{
      categories.push(item)
    })
    setCategoryList(categories);
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShirtList(products.category[2].data);
    setShoesList(products.category[3].data);
    setJacketList(products.category[4].data);
    setTrouserList(products.category[5].data);
    setWatchList(products.category[6].data);
    console.log(JSON.stringify(products.category[0]));
  }, []);

  // const items = useSelector(state => state);
  // console.log(items);
  return (
    <ScrollView style={{flex:1}}>
    <View style={{ flex: 1}}>
      <Header />
      <Image
        source={require("./../images/banner.jpg")}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 2,
          alignSelf: "center",
          marginTop: 10,
        }}
      />
      <View style={{marginTop:20}}>
        <FlatList data={categoryList} horizontal showsHorizontalScrollIndicator={false } renderItem={({item,index})=>{
          return(
            <TouchableOpacity style={{padding:10, borderWidth:1, marginLeft:15, borderRadius:10}}>
              <Text style={{color:'#000'}}>
                {item.category}
              </Text>
            </TouchableOpacity>
          )
        }}/>
      </View>
      <Text style={{marginTop:20, marginLeft:20, fontWeight:'600', fontSize:16, color:'#000'}}>
        New T-shirts
      </Text>
      <View style={{marginTop:20}}>
        <FlatList data={tshirtList} horizontal showsHorizontalScrollIndicator={false } renderItem={({item,index})=>{
          return(
            <MyProducts item={item} 
            addToWishList={x=>{
              dispatch(addToWishlist(x))
            }}
            addToCart={ x =>{
              dispatch(addToCart(item))
            }}/>
          )
        }}/>
      </View>
      {/* End */}
      <Text style={{marginTop:20, marginLeft:20, fontWeight:'600', fontSize:16, color:'#000'}}>
        New Jeans
      </Text>
      <View style={{marginTop:20}}>
        <FlatList data={jeansList} horizontal showsHorizontalScrollIndicator={false } renderItem={({item,index})=>{
          return(
            <MyProducts item={item} 
            addToWishList={x=>{
              dispatch(addToWishlist(x))
            }}
            addToCart={ x =>{
              dispatch(addToCart(item))
            }}/>
          )
        }}/>
      </View>
      {/* End */}
      <Text style={{marginTop:20, marginLeft:20, fontWeight:'600', fontSize:16, color:'#000'}}>
        New Shirts
      </Text>
      <View style={{marginTop:20}}>
        <FlatList data={shirtList} horizontal showsHorizontalScrollIndicator={false } renderItem={({item,index})=>{
          return(
            <MyProducts item={item}
            addToWishList={x=>{
              dispatch(addToWishlist(x))
            }} 
            addToCart={ x =>{
              dispatch(addToCart(item))
            }}/>
          )
        }}/>
      </View>
      {/* End */}
      <Text style={{marginTop:20, marginLeft:20, fontWeight:'600', fontSize:16, color:'#000'}}>
        New Shoes
      </Text>
      <View style={{marginTop:20}}>
        <FlatList data={shoesList} horizontal showsHorizontalScrollIndicator={false } renderItem={({item,index})=>{
          return(
            <MyProducts item={item} 
            addToWishList={x=>{
              dispatch(addToWishlist(x))
            }}
            addToCart={ x =>{
              dispatch(addToCart(item))
            }}/>
          )
        }}/>
      </View>
      {/* End */}
      <Text style={{marginTop:20, marginLeft:20, fontWeight:'600', fontSize:16, color:'#000'}}>
        New Jacket
      </Text>
      <View style={{marginTop:20}}>
        <FlatList data={jacketList} horizontal showsHorizontalScrollIndicator={false } renderItem={({item,index})=>{
          return(
            <MyProducts item={item} 
            addToWishList={x=>{
              dispatch(addToWishlist(x))
            }}
            addToCart={ x =>{
              dispatch(addToCart(item))
            }}/>
          )
        }}/>
      </View>
      {/* End */}
      <Text style={{marginTop:20, marginLeft:20, fontWeight:'600', fontSize:16, color:'#000'}}>
        New Trouser
      </Text>
      <View style={{marginTop:20}}>
        <FlatList data={trouserList} horizontal showsHorizontalScrollIndicator={false } renderItem={({item,index})=>{
          return(
            <MyProducts 
              item={item} 
             addToWishList={x => {
             dispatch(addToWishlist(x))}}
           addToCart={x => {
            dispatch(addToCart(x))}}/>
      )}}/>
      </View>
      {/* End */}
      <Text style={{marginTop:20, marginLeft:20, fontWeight:'600', fontSize:16, color:'#000'}}>
        New Watch
      </Text>
      <View style={{marginTop:20}}>
        <FlatList data={watchList} horizontal showsHorizontalScrollIndicator={false } renderItem={({item,index})=>{
          return(
            <MyProducts item={item} 
            addToWishList={x=>{
              dispatch(addToWishlist(x))
            }}
            addToCart={ x =>{
            dispatch(addToCart(x))
            }}/>
          )
        }}/>
      </View>
      {/* End */}
    </View>
    </ScrollView>
  );
};

export default Main;
