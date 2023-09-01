//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import Toolbar from '@components/Toolbar';
import Sidemenu from '@components/Sidemenu';

export default function News(props) {

  const summary_data = {
    current_balance      : '$4,600.27',     
    outstanding_balance  : '$100.00'   ,      
    month_income         : '$3,600.27'  ,   
    month_expenses       : '$500.00'     ,
    updated_at           : '22/08/2023 15:22:07' ,
  }

  const transaction_data = {
    rows : [
      {
        'id'    : 1,
        'title' : 'C42 Agosto 2023',
        'date' : '22/08/2023 11:02:07',
        'amount': '+$100.00'
      },
      {
        'id'    : 2,
        'title' : 'C41 Agosto 2023',
        'date' : '22/08/2023 11:02:07',
        'amount': '+$100.00'
      },
      {
        'id'    : 3,
        'title' : 'C40 Agosto 2023',
        'date' : '22/08/2023 11:02:07',
        'amount': '+$100.00'
      },
      {
        'id'    : 4,
        'title' : 'C02 Agosto 2023',
        'date' : '22/08/2023 11:02:07',
        'amount': '+$100.00'
      },
      {
        'id'    : 5,
        'title' : 'Fumigación',
        'date' : '22/08/2023 11:02:07',
        'amount': '-$500.00'
      },
      {
        'id'    : 6,
        'title' : 'C12 Agosto 2023',
        'date' : '22/08/2023 11:02:07',
        'amount': '+$100.00'
      },
    ]
  }

  const Item = ({title, date, amount}: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.text}>{amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>Saldo Actual {summary_data.current_balance}</Text>
        <Text style={styles.text}> Saldo Pendiente {summary_data.outstanding_balance}</Text>
        <Text style={styles.text}> Ingreso del mes {summary_data.month_income}</Text>
        <Text style={styles.text}> Gastos del mes {summary_data.month_expenses}</Text>
        <Text style={styles.text}> Actualizado {summary_data.updated_at}</Text>
      </View>
      <View>
        <FlatList
          data={transaction_data.rows}
          renderItem={({item}) => <Item title={item.title} date={item.date} amount={item.amount} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});