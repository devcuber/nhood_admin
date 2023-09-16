import EncryptedStorage from 'react-native-encrypted-storage';
    
const USER_KEY = '@USER_DATA'

async function storeUserInformation(UserData) {
    try {
        let serializeduser = JSON.stringify(UserData)
        await EncryptedStorage.setItem(USER_KEY, serializeduser);
    } catch (error) {
        console.log("Error al almacenar usuario: " + error.message)
    }
}

async function retrieveUserInformation() {
    try {   
        const userData = await EncryptedStorage.getItem(USER_KEY);
        return JSON.parse(userData)
    } catch (error) {
        console.log("Error al encontrar usuario: " + error.message)
        return null
    }
}

export { storeUserInformation, retrieveUserInformation }