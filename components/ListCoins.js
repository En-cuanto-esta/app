import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import CoinItem from './CoinItem'

const ListCoins = ({coins, refreshing, search}) => {
    return (
        <FlatList 
        style={styles.list}
        data={
          coins.filter((coin) => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)) 
        }
        renderItem={({item}) => {
          return <CoinItem coin={item} />
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true)
          await loadData()
        }}
      />
    )
}

let styles = StyleSheet.create({
  list: {
    width: '100%',
    marginTop: 200
  }
})

export default ListCoins;