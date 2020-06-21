import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import MapScreen from 'App/Containers/Map/MapScreen'
import CatchesFormScreen from 'App/Containers/Catches/CatchesFormScreen'
import CatchesScreen from 'App/Containers/Catches/CatchesScreen'
import MainTabNavigator from 'App/Navigators/MainTabNavigator'
import { navigationRef } from 'App/Services/NavigationService'
import i18n from 'App/Services/i18n'

const Stack = createNativeStackNavigator()

function AppNavigationContainer() {
  return (
    // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="MainTabNavigator" headerMode="screen">
        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="CatchesFormScreen" component={CatchesFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigationContainer
