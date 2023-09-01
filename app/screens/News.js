//import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import Toolbar from '@components/Toolbar';
import Sidemenu from '@components/Sidemenu';

const data = {
  rows : [
    {
      'id'    : 1,
      'title' : 'Junta 27 de agosto',
      'text'  : 'Junta por meets, 27 de agosto a las 9:00 pm',
      'link'  : 'https://meet.google.com/?pli=1'
    },
    {
      'id'    : 2,
      'title' : 'Encuesta Total Play',
      'text'  : 'Encuesta para instalación de cableado de total play, contestar antes del 27 de agosto',
      'link'  : 'https://www.google.com/forms/about/'
    },
    {
      'id'    : 3,
      'title' : 'Alberca no disponible',
      'text'  : 'La alberca estará en mantenimiento el dia lunes 28 de agosto',
      link    : '' 
    },
    {
      'id'    : 4,
      'title' : 'Junta 27 de agosto',
      'text'  : 'Junta por meets, 27 de agosto a las 9:00 pm',
      'link'  : 'https://meet.google.com/?pli=1'
    },
    {
      'id'    : 5,
      'title' : 'Encuesta Total Play',
      'text'  : 'Encuesta para instalación de cableado de total play, contestar antes del 27 de agosto',
      'link'  : 'https://meet.google.com/?pli=1'
    },
    {
      'id'    : 6,
      'title' : 'Alberca no disponible',
      'text'  : 'La alberca estará en mantenimiento el dia lunes 28 de agosto',
      'link'  : ''
    },
    {
      'id'    : 7,
      'title' : 'Junta 27 de agosto',
      'text'  : 'Junta por meets, 27 de agosto a las 9:00 pm',
      'link'  : 'https://meet.google.com/?pli=1'
    },
    {
      'id'    : 8,
      'title' : 'Encuesta Total Play',
      'text'  : 'Encuesta para instalación de cableado de total play, contestar antes del 27 de agosto',
      'link'  : 'https://www.google.com/forms/about/'
    },
    {
      'id'    : 9,
      'title' : 'Alberca no disponible',
      'text'  : 'La alberca estará en mantenimiento el dia lunes 28 de agosto',
      'link'  : ''
    },
  ]
}

const Item = ({title, text, link}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.link}>{link}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
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

//  <ScrollView keyboardDismissMode='on-drag' keyboardShouldPersistTaps='always'>


  render() {
    return (
      <View style={styles.container}>
          <View>
            <FlatList
              data={data.rows}
              renderItem={({item}) => <Item title={item.title} text={item.text} link={item.link} />}
              keyExtractor={item => item.id}
            />
          </View>
      </View> 
    );
  }
}
