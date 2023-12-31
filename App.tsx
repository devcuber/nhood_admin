//import * as React from 'react';
import React, { useEffect } from 'react';
import { Button, Text, TextInput, View , StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import News from '@screens/News';
import Savings from '@screens/Savings';
import Api from '@api/Api';
import { storeUserInformation, retrieveUserInformation } from '@storage/UserStorage'

const Drawer = createDrawerNavigator();
const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function SingOut() {
  const { signOut } = React.useContext(AuthContext);
  const navigation = useNavigation();
  useEffect(() => {
    Alert.alert(
      'Cerrar sesión', 
      '¿Deseas cerrar sesión?',
      [
        {
          text: 'Cancelar',
          onPress: () => navigation.goBack(),
        },
        {
          text: 'Si', 
          onPress: () => signOut()
        },
      ]
    )
  }, [])
}

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = React.useContext(AuthContext);

  function login_action (username, password) {
    signIn({ username, password })
  } ;



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
      borderRadius: 80,
    },
    inputView: {
      backgroundColor: "#39a0ff",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color:"white"
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginText: {
      color:"white",
      fontSize: 14,
      fontWeight:'bold'
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#008eea"
    },
  });
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("@assets/images/logo.png")} /> 

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Usuario"
          placeholderTextColor="#C3E4E9"
          onChangeText={(username) => setUsername(username)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Constraseña"
          placeholderTextColor="#C3E4E9"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity style={styles.loginBtn} onPress={ () => login_action(username, password)  } >
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            id: action.id,
            name: action.name
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            id : action.id,
            name : action.name
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            id : null,
            name : null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let id;
      let name;

      try {
        const userData = await retrieveUserInformation()
        console.log('automatic login: ', userData)
        userToken= userData.token
        id= userData.id
        name=  userData.name
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken, id:id, name:name });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        const api = new Api()
        response = await api.LogIn(data.username, data.password)
        
        if (! response) {
          return
        }
        const name = response.name
        const id = response.id
        const token = response.token

        userData = {
          id : id,
          name : name, 
          token : token
        }
        console.log('save user', userData)
        storeUserInformation(userData)


        //TODO
        //SecureStore
        
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: token, id:id, name:name });
      },
      signOut: () => { 
        userData = {
          id : null,
          name : null,
          token : null
        }
        storeUserInformation(userData)
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          {state.isLoading ? (
            <Stack.Navigator>
              <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
          ) : state.userToken == null ? (
            <Stack.Navigator>
              <Stack.Screen name="Inicio" component={SignInScreen}/>
            </Stack.Navigator>
          ) : (
            <Drawer.Navigator screenOptions={{unmountOnBlur: true}}>
              <Drawer.Screen name="Noticias" component={News} />
              <Drawer.Screen name="Fondo de ahorros" component={Savings} />
              <Drawer.Screen name="Cerrar sesión" component={SingOut} />
            </Drawer.Navigator>
          )}

      </NavigationContainer>
    </AuthContext.Provider>
  );
}
