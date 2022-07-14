import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Space from '@components/space'
import { COLORS } from '@constants/color'

interface ListCardProps {
  item: {
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
      <Text style={styles.cardNumber}>{index}</Text>

      <View style={styles.cardHeaderWrapper}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>

        <Space width={20} />

        <Text style={styles.gender} numberOfLines={1}>
          {item.gender}
        </Text>
      </View>

      <View style={styles.line} />

      <Text numberOfLines={1}>{item.address}</Text>
      <Text numberOfLines={1}>{item.job}</Text>
    </View>
  )
}

export default ListCard

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 16,
  },
  cardNumber: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flexShrink: 1,
  },
  gender: {
    flexShrink: 1,
  },
  line: {
    height: 1,
    marginVertical: 8,
    backgroundColor: COLORS.GRAY_30,
  },
})
