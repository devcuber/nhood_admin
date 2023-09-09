//import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import NewsContainer from '@components/NewsContainer';

const data = require('@test-data/news.json');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class News extends Component {
  //TODO IF NO NEWS
  static   navigationOptions = {
    //name in Side-menu bar
   drawerLabel: 'News',  
  };

  handleButton = () => {
    this.props.navigation.navigate('Savings');
  }

  render() {
    return (
      <View style={styles.container}>
        <NewsContainer data={data}/>
      </View> 
    );
  }
}
