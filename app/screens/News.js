//import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import NewsContainer from '@components/NewsContainer';
import Api from '@api/Api';

export default function News(props) {
  const api = new Api()
  const data = api.getNews()

  return (
    <View >
      <NewsContainer data={data}/>
    </View> 
  );
}
