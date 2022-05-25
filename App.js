import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react'
import QuickShow from './components/QuickShow';
import CoinItem from './components/CoinItem';
import ListCoins from './components/ListCoins';
import Calculate from './components/Calculate';
import axios from 'axios';

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [average, setAverage] = useState(0);

  const loadData = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await res.json();
    setCoins(data);
    setRefreshing(false);
    axios.get('https://en-cuanto-esta-vzla.herokuapp.com/reports')
    .then(response => {
        let promedio = response.data.promedio;
        setAverage(promedio.toFixed(2));
    })
    .catch(err => console.log(err.response));    
    console.log('loaded');
  }

  useEffect(() => {
     loadData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#51A5FA' />
      <View style={styles.header}>
        <Text style={styles.title}>En cuanto está?</Text>
        <TextInput    
          placeholder='Buscar coin'
          style={styles.searchInput} 
          onChangeText={text => setSearch(text.toLowerCase())}
        />
      </View>
      <QuickShow />
      {/* <ListCoins coins={coins} refreshing={refreshing} search={search} /> */}
      <Calculate average={average} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center'
  },
  title: {
    color: "#fff",
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  list: {
    width: '90%'
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: '#4657ce',
    borderBottomWidth: 2,
    marginBottom: 10,
    backgroundColor: '#51A5FA',
    padding: 15
  },
  searchInput: {
    color: '#fff',
    width: '50%',
    textAlign: 'center'
  }
});
