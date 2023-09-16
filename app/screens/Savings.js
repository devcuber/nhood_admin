//import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet,View} from "react-native";
import BalanceCard from '@components/BalanceCard';
import FinantialResume from '@components/FinantialResume';
import Api from '@api/Api';

const styles = StyleSheet.create({
  container   : {

    margin:10,
    overflow:'hidden'
  },
});

export default function Savings(props) {
  const api = new Api()
  const summary_data = api.getBalance()
  const resume_data  = api.getFinantialResume()

  // <FinantialResume data = {resume_data} />
  return (
    <View style={styles.container}>
      <BalanceCard data = {summary_data} />
      <FinantialResume data = {resume_data} />
    </View> 
  );
}



