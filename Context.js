import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [user_id, setUser_id] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [rentee, setRentee] = useState(false)
  const [image, setImage] = useState('')
  const [products, setProducts] = useState([])

  const ipAdress = '192.168.0.135'

  // 192.168.0.135 downstairs
  // 192.168.1.106 upstairs

  const logMeIn = async (resData) => {
    console.log(resData[0])
    setUser_id(resData[0].id)
    setFirstName(resData[0].first_name)
    setLastName(resData[0].last_name)
    setEmail(resData[0].email)
    setPassword(resData[0].password)
    setImage(resData[0].image)
    jsonData = JSON.stringify(resData)
    await AsyncStorage.setItem('userData', jsonData)
    setLoggedIn(true)
  }

  const logInCurrent = async (resData) => {
    console.log(resData.id, 34)
    setUser_id(resData.id)
    setFirstName(resData.first_name)
    setLastName(resData.last_name)
    setEmail(resData.email)
    setPassword(resData.password)
    setImage(resData.image)
    jsonData = JSON.stringify(resData)

    await AsyncStorage.setItem('userData', jsonData)
    setLoggedIn(true)
  }

  const getProducts = async () => {
    const response = await fetch(`http://${ipAdress}:4001/products`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const resData = await response.json()
    setProducts(resData)
  }

  const logOut = async () => {
    setLoggedIn(false)
    setUser_id('')
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setImage('')
    await AsyncStorage.clear()
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const loggedInUser = await AsyncStorage.getItem('userData')
        console.log(loggedInUser)
        return loggedInUser != null ? JSON.parse(loggedInUser) : null
      } catch (error) {
        console.log('context line 34')
      }

      if (loggedInUser) {
        logMeIn(loggedInUser.resData)
        setLoggedIn(true)
      }
    }
    getData()
  }, [])
  return (
    <Context.Provider
      value={{
        logMeIn,
        logInCurrent,
        ipAdress,
        loggedIn,
        rentee,
        logOut,
        user_id,
        image,
        user_id,
        getProducts,
        products,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
