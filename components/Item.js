import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Item = ({
  name,
  price,
  category,
  scent,
  brand,
  target_gender,
  item_weight,
  about,
  image,
}) => {
  console.log(image, 17)
  return (
    <View style={styles.screen}>
      <Image style={styles.img} source={{ uri: image }} />
      <View>
        <View>
          <Text style={styles.description} numberOfLines={2}>{`${about}`}</Text>
        </View>
        <View>
          <View style={styles.stars}>
            <Ionicons name={'star-outline'} size={20} />
            <Ionicons name={'star-outline'} size={20} />
            <Ionicons name={'star-outline'} size={20} />
            <Ionicons name={'star-outline'} size={20} />
            <Ionicons name={'star-outline'} size={20} />
          </View>
          <View>
            <Text style={styles.price}>{`$${price}`}</Text>
          </View>
          <View>
            <Text style={styles.delivery}>First delivery option</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#7cfc00',
    borderRadius: 7,
    width: 380,
    height: 150,
    flex: 1,
    margin: 5,
    flexShrink: 1,
  },
  price: {
    fontSize: 20,
    paddingLeft: 8,
    paddingTop: 8,
    color: 'green',
    fontWeight: '700',
  },
  stars: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingTop: 12,
  },
  img: {
    zIndex: 0,

    width: 180,
    height: 145,
  },
  delivery: {
    paddingLeft: 8,
    paddingTop: 15,
    fontSize: 14,
    fontWeight: '200',
  },
  description: {
    paddingLeft: 8,
    paddingTop: 8,
    flexShrink: 1,
    fontSize: 16,
    fontWeight: '300',
    width: 200,
  },
})

export default Item
