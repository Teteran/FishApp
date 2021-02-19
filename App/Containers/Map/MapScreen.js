import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { Config } from 'App/Config'
import Style from './MapScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

MapboxGL.setAccessToken(Config.MAPBOX_ACCESS_TOKEN)

class HomeScreen extends React.Component {
  render() {
    MapboxGL.requestAndroidLocationPermissions()
    return (
      <View style={[Helpers.fill]}>
        <MapboxGL.MapView
          styleURL={MapboxGL.StyleURL.Dark}
          attributionEnabled={false}
          compassEnabled={true}
          compassViewPosition={1}
          surfaceView={true}
          zoomLevel={12}
          style={[Helpers.fill]}
        >
          <MapboxGL.Camera
            ref={(ref) => (this.camera = ref)}
            followUserLocation={true}
            followUserMode="normal"
            defaultSettings={{
              zoomLevel: 17,
            }}
          />
          <MapboxGL.UserLocation
            ref={(ref) => (this.userLocation = ref)}
            visible={true}
            androidRenderMode={'gps'}
            showsUserHeadingIndicator={true}
            animationMode={'flyTo'}
          />
        </MapboxGL.MapView>
      </View>
    )
  }
}

HomeScreen.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
