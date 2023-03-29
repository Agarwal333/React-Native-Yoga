import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Yoga from '../Data/Yoga';
import TestData from '../Data/TestData';

const YogaCards = () => {
    const Test = TestData;
  return (
    <View>
      {Test.map((item)=>{
        <Text>{item.name}</Text>
      })}
      {/* <Text style={{color:"orange"}}>YogaCards</Text> */}
    </View>
  )
}

export default YogaCards

const styles = StyleSheet.create({})