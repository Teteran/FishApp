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
import { navigationRef } from 'App/Services/NavigationService'
import i18n from 'App/Services/i18n'
import { Colors } from 'App/Theme';

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()

catchesStack = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Catches"
      component={CatchesScreen}
      options={{
        title: i18n.t('navigation.catches'),
      }}
      />
      <Stack.Screen name="CatchesFormScreen" component={CatchesFormScreen} />
   </Stack.Navigator>
  )
}

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        backgroundColor: 'red',
        tabStyle:{ backgroundColor: Colors.backgroundColor},
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: i18n.t('navigation.map'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="mapbox" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: i18n.t('navigation.map'),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: i18n.t('navigation.home'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: i18n.t('navigation.home'),
        }}
      />
      <Tab.Screen
        name="Catches"
        component={catchesStack}
        options={{
          title: i18n.t('navigation.catches'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fish" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: i18n.t('navigation.catches'),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabs
