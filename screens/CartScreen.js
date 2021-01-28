import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const CartScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CartScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default CartScreen
