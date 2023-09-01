//HeaderComponent.js
import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Sidemenu extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  }

  render() {
      
    return (
      <View style={{ flexDirection: 'row',height:50,backgroundColor: 'blue'} }>
        <TouchableOpacity 
           style={{marginLeft:10,alignContent:'center',alignSelf:'center', }}
           onPress={()=>{
            alert('MENU')
            //this.props.navigation.navigate('DrawerOpen');
            //this.props.navigation.openDrawer(); 
          }}
            >
          <Image
           source={require("@assets/images/logo.jpg")}
           style={{ width: 25, height: 25, marginLeft: 5 }}
          />

        </TouchableOpacity>
        <Text 
        style = {{color: 'white',alignContent:'center',alignSelf:'center',marginLeft:20,}}>
            
            {this.props.showName}
        </Text>
        
      </View>
    );
  }
}