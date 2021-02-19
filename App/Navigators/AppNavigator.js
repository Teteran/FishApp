import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainTabNavigator from 'App/Navigators/MainTabNavigator'
import { navigationRef } from 'App/Services/NavigationService'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

function AppNavigationContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
        <MainTabNavigator />
    </NavigationContainer>
  )
}

export default AppNavigationContainer
