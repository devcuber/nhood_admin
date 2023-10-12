import React, {useEffect, useState, Component} from 'react';
import {StyleSheet,View,ActivityIndicator} from "react-native";
import BalanceCard from '@components/BalanceCard';
import FinantialResume from '@components/FinantialResume';
import {retrieveUserInformation } from '@storage/UserStorage'
import Api from '@api/Api';

const styles = StyleSheet.create({
  container   : {

    margin:10,
    overflow:'hidden'
  },
});

export default function Savings(props) {
  console.log("Savings enter")
  const [summary_data, setSummaryData] = useState([]);
  const [isSummaryLoading, setSummaryLoading] = useState(true);
  const [resume_data, setResumeData] = useState([]);
  const [isResumeLoading, setResumeLoading] = useState(true);

  const getSummaryData = async () => {
    setSummaryLoading(true);
    const userData = await retrieveUserInformation()
    const api = new Api()
    const response = await api.getSummary(userData.id)
    setSummaryData(response);
    setSummaryLoading(false);
  };
  const getResumeData = async () => {
    setResumeLoading(true);
    const userData = await retrieveUserInformation()
    const api = new Api()
    const response = await api.getResume(userData.id)
    setResumeData(response);
    setResumeLoading(false);
  };
  useEffect(() => {
    getSummaryData();
    getResumeData()
  }, []);
  
  return (
    <View style={styles.container}>
      {isSummaryLoading ? (
        <ActivityIndicator />
      ) : ( 
        <BalanceCard data = {summary_data} />
      )}

      {isResumeLoading ? (
        <ActivityIndicator />
      ) : ( 
        <FinantialResume data = {resume_data} />
      )}
    </View> 
  );
}



