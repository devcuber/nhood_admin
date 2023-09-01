import React, { createContext, useReducer } from 'react';
//import { storeuserInformation, retrieveuserInformation } from '@storage/userStorage';

//const userInfoInit = {
//    userInfo: ''
//}
const userInfoInit = {
    token: ''
}

const userInformationReducer = (state = userInfoInit, userInfo) => {
    switch(userInfo.type) {
        case 'has-id-information':
            console.log('Se obtuvo la información del ciudadano')
            return { ...state, userInfo: userInfo }
        case 'create-id-information':
            //storeIdInformation(userInfo.data).then((msg) => {
            //    console.log('Información del usuario almacenada.')
            //})
            return { ...state, userInfo: userInfo }
        case 'delete-id-information':
            //storeIdInformation('').then((msg) => {
            //    console.log('Info deleted.')
            //})
            return { ...state, userInfo: '' }
        default:
            return state
    }
}

const userInformationContext = createContext(userInfoInit)

function UserInformationProvider(props) {
    const [ userInfo, userInfoAction ] = useReducer(userInformationReducer, userInfoInit)
    return (
        <userInformationContext.Provider value= {[ userInfo, userInfoAction]}>
            {props.children}
        </userInformationContext.Provider>
    )
}


export {userInformationContext, UserInformationProvider}