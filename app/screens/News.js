//import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState, Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from "react-native";
import NewsContainer from '@components/NewsContainer';
import {retrieveUserInformation } from '@storage/UserStorage'
import Api from '@api/Api';

export default function News(props) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getNews = async () => {
    setLoading(true);
    const userData = await retrieveUserInformation()
    const api = new Api()
    const response = await api.getNews(userData.id)
    setData(response);
    setLoading(false);
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <View >
      {isLoading ? (
        <ActivityIndicator />
      ) : ( 
        <NewsContainer data={data}/>
      )}
    </View> 
  );
}
