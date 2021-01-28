import React, { useState, useContext } from 'react'
import { View, TextInput, StyleSheet, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-elements'
import { Context } from '../Context'

const SearchBar = () => {
  const { listings } = useContext(Context)
  const [searchContent, setSearchContent] = useState('')

  const searchHandler = () => {
    console.log(searchContent)
  }

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={{ height: 40, fontSize: 23, paddingTop: 17 }}
        placeholder='Search'
        onChangeText={(text) => setSearchContent(text)}
        defaultValue={searchContent}
      />
      <View></View>
      <View style={styles.but}>
        <Button
          icon={<Icon name='search' size={26} color='green' />}
          type='clear'
          title=' '
          onPress={() => searchHandler()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    width: 400,
    height: 60,
    fontSize: 30,
    marginTop: 7,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: `#7cfc00`,
    paddingLeft: 10,
    borderRadius: 7,
    backgroundColor: '#FFF',
  },
  but: {
    // flexDirection: 'row',
    marginLeft: 'auto',
    width: 52,
    alignSelf: 'flex-end',
    paddingBottom: 8,
    paddingRight: 10,
  },
})

export default SearchBar
