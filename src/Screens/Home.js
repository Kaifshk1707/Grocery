import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Main from './../bottom/Main';
import Search from './../bottom/Search';
import Cart from './../bottom/Cart';
import Wishlist from './../bottom/Wishlist';
import Profile from './../bottom/Profile';
import Reducer from '../redux/reducers/Reducer';
import Reducer2 from '../redux/reducers/Reducer2';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  
  const data = useSelector((state) => state);
  // const wishlistData = useSelector((state) => state.Reducer2);

  return (
    <View style={styles.container}>
      {selectedTab === 0 ? (
        <Main />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Cart />
      ) : selectedTab === 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View style={styles.vw1}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={require('./../images/home.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab === 0 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setSelectedTab(1)}
        >
          <Image
            source={require('./../images/search.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab === 1 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              backgroundColor: selectedTab === 2 ? 'limegreen' : '#000',
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setSelectedTab(2)}
          >
            <Image
              source={require('./../images/bag.png')}
              style={{ width: 24, height: 24, tintColor: '#fff' }}
            />
            <View style={styles.bags}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>
                {data.Reducer.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setSelectedTab(3)}
        >
          <Image
            source={require('./../images/heart.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab === 3 ? '#000' : '#8e8e8e',
            }}
          />
          <View style={styles.bags2}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>
              {data.Reducer2.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={require('./../images/user.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab === 4 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vw1: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touch: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bags: {
    width: 20,
    height: 20,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  bags2: {
    width: 20,
    height: 20,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    right: 20,
  },
});

export default Home;
