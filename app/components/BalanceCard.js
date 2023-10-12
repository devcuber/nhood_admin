import React from 'react';
import { View, Text, TouchableOpacity, Image , StyleSheet} from 'react-native';


export default function BalanceCard(props){

    let summary_data = props.data

    return (
      <View style={styles.card}  >
        <View style={styles.row} >
          <View>
            <Text style={{color:"green", fontWeight:"bold", fontSize:36}}>{summary_data.our_current_balance}</Text>
            <Text style={styles.text}> {summary_data.our_current_balance_label} </Text>
          </View>
          <View>
            <Text style={{color:"red", fontSize:24}}>{summary_data.our_outstanding_balance}</Text>
            <Text style={styles.text}>{summary_data.our_outstanding_balance_label}</Text>
          </View>  
        </View>
        <View style={styles.row} >
          <View>
            <Text style={{color:"green", fontSize:24}}>{summary_data.my_current_balance}</Text>
            <Text style={styles.text}>{summary_data.my_current_balance_label}</Text>
          </View>
          <View>
            <Text style={{color:"red", fontSize:24}}>{summary_data.my_outstanding_balance}</Text>
            <Text style={styles.text}>{summary_data.my_outstanding_balance_label}</Text>
          </View>  
        </View>

        <View style={{flexDirection:"row-reverse", margin:5}}>
          <Text style={{fontStyle: 'italic'}}> {summary_data.updated_at_label} {summary_data.updated_at}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    borderRadius: 20 ,
    padding:5,
    margin : 5
  },
  row:{flexDirection:"row", justifyContent :"space-around", alignItems :"center", margin:5},
  });
