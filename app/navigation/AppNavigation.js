import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '@screens/Login';
import News from '@screens/News';
import Savings from '@screens/Savings';

import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer'; 
import { Text, StyleSheet, Image, View } from 'react-native';
import { Container, Content, Header, Body } from 'native-base'


//header in drawer
const DrawerContentComponent = (props) => (

    <Container>
      <Header style={styles.drawerHeader}>
        <Body>
        <View style={{ flexDirection: 'row'} }> 
        <Image
            style={styles.drawerImage}
            source={{ uri:('https://reactnative.dev/img/tiny_logo.png')}} />
           <Text style={{marginLeft:20,alignContent:'center',alignSelf:'center'}}>User name</Text>
         </View>   
        </Body>
      </Header>
      <Content>
        <DrawerItems {...props} />
      </Content>
  
    </Container>
  
  );

const ContentNavigator = createDrawerNavigator({
    News: {
      screen: News,
    },
    Savings: {
      screen: Savings,
    }  
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'News',
    drawerBackgroundColor: 'white',
    drawerWidth: 200,
    contentComponent: DrawerContentComponent,
    contentOptions: {
      activeTintColor: '#2EB6AE',
      inactiveTintColor: '#939393',
    }
    
  });

const AppNavigation = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    AfterLogin: { screen: ContentNavigator,
        navigationBarStyle : {navBarHidden: true },
        navigationOptions: {
          headerShown: false,
        } 
    },    
})

export default createAppContainer(AppNavigation)

const styles = StyleSheet.create({

    container: {
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    drawerHeader: {
      height: 100,
      backgroundColor: 'white',
      flexDirection: 'row'
    },
    drawerImage: {
      height: 50,
      width: 50,
      borderRadius: 75
    }
  
  })