import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import MapScreen from 'App/Containers/Map/MapScreen'
import CatchesFormScreen from 'App/Containers/Catches/CatchesFormScreen'
import CatchesScreen from 'App/Containers/Catches/CatchesScreen'
import i18n from 'App/Services/i18n'
import { Colors } from 'App/Theme';

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

catchesStack = () =>{
  return (
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:Colors.backgroundColor}, headerTintColor:Colors.primary}}>
      <Stack.Screen
      name="Catches"
      component={CatchesScreen}
      options={{
        title: i18n.t('navigation.catches'),
        headerShown: false
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
        inactiveTintColor: Colors.secondary,
        tabStyle:{ backgroundColor: Colors.backgroundColor, borderTopWidth: 0.5, borderColor: Colors.transparentPrimary},
        showLabel: false,
      }}
      sceneContainerStyle={{backgroundColor: Colors.backgroundColor}}
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
