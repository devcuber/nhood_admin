import React from 'react';
import { View, Text, TouchableOpacity, Image , StyleSheet} from 'react-native';


export default function BalanceCard(props){

    let summary_data = props.data

    return (
      <View style={styles.card}  >
        <View style={styles.row} >
          <View>
            <Text style={{color:"green", fontWeight:"bold", fontSize:42}}>{summary_data.current_balance}</Text>
            <Text style={styles.text}>Saldo Actual </Text>
          </View>
          <View>
            <Text style={{color:"red", fontSize:24}}>{summary_data.outstanding_balance}</Text>
            <Text style={styles.text}>Saldo Pendiente </Text>
          </View>  
        </View>
        <View style={styles.row} >
          <View>
            <Text style={{color:"green", fontSize:24}}>{summary_data.month_income}</Text>
            <Text style={styles.text}>Ingreso del mes </Text>
          </View>
          <View>
            <Text style={{color:"green", fontSize:24}}>{summary_data.month_expenses}</Text>
            <Text style={styles.text}>Gastos del mes </Text>
          </View>  
        </View>

        <View style={{flexDirection:"row-reverse", margin:5}}>
          <Text style={{fontStyle: 'italic'}}> Actualizado {summary_data.updated_at}</Text>
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
