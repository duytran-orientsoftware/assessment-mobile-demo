import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import FastImage from 'react-native-fast-image'

import { COLORS } from '@constants/color'

interface ListCardProps {
  item: {
    avatar: string
    name: string
    address: string
    gender: string
    job: string
  }
  index: number
}

const ListCard = ({ item, index }: ListCardProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: index % 2 === 0 ? COLORS.GRAY_BLUE : COLORS.GRAY_90,
        },
      ]}>
      <View style={styles.itemWrapper}>
        {/* <FastImage
          source={{ uri: item.avatar }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        /> */}

        <View style={styles.content}>
          <View style={styles.contentHeaderWrapper}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>

            <Text style={styles.gender} numberOfLines={1}>
              {item.gender}
            </Text>
          </View>

          <View style={styles.line} />

          <Text numberOfLines={1}>{item.address}</Text>
          <Text numberOfLines={2}>{item.job}</Text>
        </View>
      </View>

      <View style={styles.floatView}>
        <Text style={styles.cardNumber}>{index + 1}</Text>
      </View>
    </View>
  )
}

export default ListCard

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 16,
  },
  itemWrapper: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  contentHeaderWrapper: {},
  name: {
    flexShrink: 1,
    fontWeight: 'bold',
  },
  gender: {
    flexShrink: 1,
    fontSize: 10,
  },
  line: {
    height: 1,
    marginVertical: 8,
    backgroundColor: COLORS.GRAY_30,
  },
  cardNumber: {
    fontWeight: 'bold',
  },
  floatView: {
    position: 'absolute',
    right: -7,
    top: -7,
    padding: 4,
    minWidth: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
})
