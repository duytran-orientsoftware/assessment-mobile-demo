import React, { useCallback, useState } from 'react'
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'

import Space from '@components/space'
import { userDataGenerator } from '@helpers/generator.helper'

import ListCard from './components/listCard'

const LIMIT = 50
const LIMIT_LOAD_MORE = 50
const ITEM_HEIGHT = 130

const HomeScreen: React.FC = () => {
  /**
   * State
   */
  const [data, setData] = useState(userDataGenerator(LIMIT))

  const onEndReached = useCallback(() => {
    const tempData = userDataGenerator(LIMIT_LOAD_MORE)
    setData((preState) => [...preState, ...tempData])
  }, [])

  const renderItem = useCallback(({ item, index }) => {
    return <ListCard item={item} index={index} />
  }, [])

  const renderSeparate = useCallback(() => {
    return <Space height={16} />
  }, [])

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <FlatList
          data={data}
          extraData={data}
          keyExtractor={(item: { name: string }, index) =>
            `${item.name}_${index}`
          }
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparate}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.7}
          contentContainerStyle={styles.contentContainerStyle}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
})
