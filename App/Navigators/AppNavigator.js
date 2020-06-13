import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import MapScreen from 'App/Containers/Map/MapScreen'
import { navigationRef } from 'App/Services/NavigationService'
import i18n from 'App/Services/i18n'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const Tab = createBottomTabNavigator()

function AppNavigationContainer() {
  return (
    // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator initialRouteName="HomeScreen">
        <Tab.Screen
          name="map"
          component={MapScreen}
          options={{
            title: i18n.t('navigation.map'),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="mapbox" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: i18n.t('navigation.home'),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="catches"
          component={HomeScreen}
          options={{
            title: i18n.t('navigation.catches'),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="fish" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigationContainer
