import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainTabNavigator from 'App/Navigators/MainTabNavigator'
import { navigationRef } from 'App/Services/NavigationService'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'App/Theme';

const Tab = createBottomTabNavigator()

function AppNavigationContainer() {
  return (
    <NavigationContainer ref={navigationRef} theme={{colors:{ background: Colors.background}}}>
        <MainTabNavigator />
    </NavigationContainer>
  )
}

export default AppNavigationContainer
