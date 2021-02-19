import * as React from 'react'

const navigationRef = React.createRef()

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}

export default {
  navigationRef,
  navigate,
}
