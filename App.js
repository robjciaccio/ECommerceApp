import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ContextProvider } from './Context'
import { StyleSheet, Text, View } from 'react-native'
import BottomNavBar from './navigation/BottomNav'

export default function App() {
  return (
    <ContextProvider>
      <BottomNavBar />
    </ContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
