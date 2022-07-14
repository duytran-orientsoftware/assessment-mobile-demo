import React from 'react'
import { View } from 'react-native'

interface SpaceProps {
  width?: number
  height?: number
}

const Space = ({ width = 0, height = 0 }: SpaceProps) => {
  return <View style={{ width, height }} />
}

export default Space
