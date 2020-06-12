/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import data from '../data.json'
import { List } from "./components"

const App =()=>{
  return(
    <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
               <FlatList
                    keyExtractor={(item, index)=>index.toString()}
                    data={data}
                    renderItem={({item})=>
                    <List
                     Name={item.name}
                     Image={item.image}
                     Location={item.location}
                     Likes={item.likes}
                     IsPopular={item.isPopular}
                     IsOpenNow={item.isOpenNow}
                    />}
               />
            </View>
    </SafeAreaView>
  )
}
export default App