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
      'title' : 'Junta Online General',
      'text'  : 'Junta Online General por meets',
      'link'  : 'https://meet.google.com/?pli=1',
      'date'  : '27 de agosto 2023, 9:00 pm',
    },
    {
      'id'    : 2,
      'title' : 'Encuesta Total Play',
      'text'  : 'Encuesta para instalación de cableado de total play',
      'link'  : 'https://www.google.com/forms/about/',
      'date'  : '27 de agosto',
    },
    {
      'id'    : 3,
      'title' : 'Mantenimiento Alberca',
      'text'  : 'La alberca estará en mantenimiento el dia lunes, La alberca estará en mantenimiento el dia lunes',
      link    : '' ,
      'date'  : '28 de agosto',
    },
    {
      'id'    : 4,
      'title' : 'Junta General',
      'text'  : 'Junta General online, por meets',
      'link'  : 'https://meet.google.com/?pli=1',
      'date'  : '2 de septiembre',
    },
    {
      'id'    : 5,
      'title' : 'Encuesta Total Play',
      'text'  : 'Encuesta para instalación de cableado de total play',
      'link'  : 'https://meet.google.com/?pli=1',
      'date'  : '27 de agosto 2023',
    },
    {
      'id'    : 6,
      'title' : 'Mantenimiento Alberca',
      'text'  : 'La alberca estará en mantenimiento el dia lunes',
      'link'  : '',
      'date'  : '28 de agosto',
    },
    {
      'id'    : 7,
      'title' : 'Junta General',
      'text'  : 'Junta General por meets',
      'link'  : 'https://meet.google.com/?pli=1',
      'date'  : '27 de agosto a las 9:00 pm',
    },
    {
      'id'    : 8,
      'title' : 'Encuesta Total Play',
      'text'  : 'Encuesta para instalación de cableado de total play',
      'link'  : 'https://www.google.com/forms/about/',
      'date'  : '27 de agosto',      
    },
    {
      'id'    : 9,
      'title' : 'Mantenimiento Alberca',
      'text'  : 'La alberca estará en mantenimiento el dia lunes',
      'link'  : '',
      'date'  : '9 de septiembre',
    },
  ]
}

const action = () => {
  alert('something')
} ;


const Item = ({title, text, link, date}: ItemProps) => (
  <View style={styles.item}>
    <Image style={styles.image} source={require("@assets/images/landscape.jpg")} /> 
    <View style={{flexDirection:'row', justifyContent : 'space-around'}}>

      {link ?     
      <>
        <View style={{width:'60%'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        <TouchableOpacity style={styles.ActionBtn} onPress={action} >
            <Text style={styles.ButtonText}> Enlace </Text> 
        </TouchableOpacity>
      </>
      :
        <View style={{width:'80%'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
      }
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent : 'flex-start',
    borderRadius: 20 ,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  text: {
    fontSize: 12,
    padding : 5,
  },
  image: {
    width: 70, 
    height: 70,
    borderRadius: 40 ,
    marginTop: "5%",
  },
  ActionBtn: {
    borderRadius: 25,
    height: 40,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "8%",
    backgroundColor: "#39a0ff",
  },
  ButtonText: {
    color: 'white',
    fontSize: 14,
  }
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
              renderItem={({item}) => <Item title={item.title} text={item.text} link={item.link} date={item.date}/>}
              keyExtractor={item => item.id}
            />
          </View>
      </View> 
    );
  }
}
