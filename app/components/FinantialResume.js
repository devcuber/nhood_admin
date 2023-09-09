import React from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';


export default function BalanceCard(props){

    let resume_data = props.data

    const Item = ({item, expanded}: ItemProps) => (
      <View style={styles.item}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.name} {item.total_label} {item.total}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>"SOME TEXT"</Text>
        </View>
      </View>
    );

    return (
      <View>
        <FlatList
          data={resume_data.rows}
          renderItem={({item}) => <Item item={item} expanded={false} />}
          keyExtractor={item => item.id}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container   : {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden'
  },
  titleContainer : {
      flexDirection: 'row'
  },
  title       : {
      flex    : 1,
      padding : 10,
      color   :'#2a2f43',
      fontWeight:'bold'
  },
  button      : {

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