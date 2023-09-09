//import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet,View} from "react-native";
import BalanceCard from '@components/BalanceCard';
import FinantialResume from '@components/FinantialResume';

const styles = StyleSheet.create({
  container   : {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden'
  },
});

export default function Savings(props) {
  const summary_data = require('@test-data/summary_data.json');
  const resume_data  = require('@test-data/finantial_resume.json');

  // <FinantialResume data = {resume_data} />
  return (
    <View style={styles.container}>
      <BalanceCard data = {summary_data} />
      <FinantialResume data = {resume_data} />
    </View> 
  );
}



