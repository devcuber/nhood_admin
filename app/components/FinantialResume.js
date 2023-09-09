import React from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';

export default function BalanceCard(props){
    let resume_data = props.data
    return (
      <View style ={styles.container}>
        <FlatList
            data={resume_data.rows}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title}>{item.total_label}</Text>
                  <Text style={styles.title}>{item.total}</Text>
                  <Text style={styles.button}>O</Text>
                </View>
                <FlatList 
                  data={item.fields}
                  renderItem={({item}) => (
                    <View style={{flexDirection:'row', justifyContent:'space-between', margin:3}}>
                      <Text>{item.label} </Text>
                      <Text>{item.value} </Text>
                    </View>
                  )}
                />
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
      </View>      
    )
}

const styles = StyleSheet.create({
  container   : {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden',
  },
  item:{
    borderWidth: 1,
    margin:5
  },
  titleContainer : {
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems : 'flex-end',
      alignContent:'center'
  },
  title       : {
      flex    : 1,
      padding : 10,
      color   :'#2a2f43',
      fontWeight:'bold'
  },
  button      : {
    color   :'#2a2f43',
    fontWeight:'bold',
  },
  buttonImage : {
      width   : 30,
      height  : 25
  },
  body        : {
      padding     : 10,
      paddingTop  : 0
  }

});