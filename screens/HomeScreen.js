import React, { useLayoutEffect, useEffect, useContext, useState } from 'react'
import { Text, View, StyleSheet, Button, Image, ScrollView } from 'react-native'
import { Context } from '../Context'
import Login from '../components/Login'
import SearchBar from '../components/SearchBar'
import Item from '../components/Item'

const HomeScreen = ({ navigation }) => {
  const {
    ipAdress,
    logOut,
    loggedIn,
    image,
    user_id,
    products,
    getProducts,
  } = useContext(Context)
  const [buttonState, setButtonState] = useState(false)

  const handleLogout = () => {
    logOut()
    setButtonState(false)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        user_id ? (
          <Button
            title='LogOut'
            color='#7cfc00'
            onPress={() => handleLogout()}
          />
        ) : (
          <Button
            title='Log In'
            color='#7cfc00'
            onPress={() => navigation.navigate('Login')}
          />
        ),
    })
  }, [loggedIn])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <View>
      <View style={styles.search}>
        <SearchBar />
      </View>
      {buttonState && !loggedIn ? (
        <Login navigation={navigation} style={styles.login} />
      ) : null}
      <ScrollView style={styles.screen}>
        <View>
          {products.map((product, i) => {
            return (
              <View key={i} style={{ alignItems: 'center' }}>
                <Item
                  image={product.image}
                  price={product.price}
                  about={product.about}
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffe0',
    height: '100%',
    zIndex: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  search: {
    backgroundColor: '#ffffe0',
    alignItems: 'center',
  },
  cirleImage: {
    width: 40,
    height: 40,
    borderRadius: 400 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  img: {
    zIndex: 0,
    borderWidth: 1,
    borderColor: 'pink',
    width: 200,
    height: 200,
  },
  login: {
    position: 'absolute',
  },
})

export default HomeScreen
