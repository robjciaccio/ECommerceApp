import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>ProfileScreen</Text>
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
export default ProfileScreen
