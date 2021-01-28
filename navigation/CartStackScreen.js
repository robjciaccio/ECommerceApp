import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from '../screens/CartScreen'

const CartStack = createStackNavigator()

const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name='Cart'
        component={CartScreen}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      />
    </CartStack.Navigator>
  )
}

export default CartStackScreen
