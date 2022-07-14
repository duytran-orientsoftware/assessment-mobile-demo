import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '@screens/Home'
import { navigationRef } from '@services/navigation.service'

const MainStack = createNativeStackNavigator()

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Screen name={'home'} component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
