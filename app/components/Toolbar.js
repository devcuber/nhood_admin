import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Toolbar(props){

    return (
        <View style={[props.style, { height: 100, backgroundColor: 'blue'}]}>
            <Text style={{ fontFamily: "Poppins-Medium", top: 40, marginTop: 12, textAlign: 'center', fontSize: 20, color: 'white' }}>{props.titulo}</Text>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 55 }} onPress={props.onPress} >
                <Image style={{ width: 30, height: 30, resizeMode: 'stretch' }}  source={require("@assets/images/logo.jpg")} />
            </TouchableOpacity>
        </View>
    )
}

