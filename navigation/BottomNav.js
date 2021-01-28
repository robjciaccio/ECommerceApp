import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import HomeStackScreen from './HomeStackScreen'
import SearchStackScreen from './SearchScreenStack'
import CartStackScreen from './CartStackScreen'
import ProfileStackScreen from './ProfileStackScreen'
import { Context } from '../Context'
import { View, Image, StyleSheet } from 'react-native'

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'
  switch (routeName) {
    case 'Login':
      return 'Login'
    case 'Register':
      return 'Register'
  }
}

const BottomNavBar = ({ route, navigation }) => {
  const { user_id, image } = useContext(Context)
  const Tab = createBottomTabNavigator()
  return user_id ? (
    <NavigationContainer>
      <Tab.Navigator
        // options={({ route }) => ({
        //   title: route.params.name,
        // })}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = 'home-outline'
            } else if (route.name === 'Search') {
              iconName = 'search-outline'
            } else if (route.name === 'Cart') {
              iconName = 'cart-outline'
            } else if (route.name === 'Profile') {
              return <Image source={{ uri: image }} style={styles.cirleImage} />
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },

          headerTitleStyle: {
            color: '#ffffff',
          },
          headerStyle: {
            backgroundColor: 'green',
          },
        })}
        tabBarOptions={{
          activeTintColor: `#7cfc00`,

          inactiveTintColor: 'grey',
          showLabel: false,
        }}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Search' component={SearchStackScreen} />

        <Tab.Screen name='Cart' component={CartStackScreen} />
        <Tab.Screen name='Profile' component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Tab.Navigator
        // options={({ route }) => ({
        //   title: route.params.name,
        // })}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = 'home-outline'
            } else if (route.name === 'Search') {
              iconName = 'search-outline'
            } else if (route.name === 'Cart') {
              iconName = 'cart-outline'
            } else if (route.name === 'Profile') {
              iconName = 'reorder-three-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },

          headerTitleStyle: {
            color: '#ffffff',
          },
          headerStyle: {
            backgroundColor: 'green',
          },
        })}
        tabBarOptions={{
          activeTintColor: `#7cfc00`,

          inactiveTintColor: 'grey',
          showLabel: false,
        }}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Search' component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  cirleImage: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: 33,
    height: 33,
    borderRadius: 400 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default BottomNavBar
